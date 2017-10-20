package com.omcube.web.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryOrganCCCRequest;
import com.omcube.service.OrganCCCManagementService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SpringUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/organ")
public class OrganCCCManagementController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private OrganCCCManagementService organCCCManagementService;

	/**
	 * 查询机构CCC列表
	 * 
	 * @author 程龙
	 * @param queryOrganCCCRequest
	 * @return
	 */
	@GetMapping(value = "/queryOrgCCCList")
	@Cacheable(value = ConstantUtil.QUERY_CACHE)
	public Object queryOrgCCCList(QueryOrganCCCRequest queryOrganCCCRequest) {

		if (queryOrganCCCRequest == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request body is null");
		}

		logger.info(String.format("the request body is %s:",
				queryOrganCCCRequest.toString()));

		QueryOrganCCCRequest queryOrganCCCParam = makeRequestPragram(
				queryOrganCCCRequest);

		logger.debug(
				String.format("the pageNum is  :%s and the pageSize is :%s",
						queryOrganCCCParam.getPageNum(),
						queryOrganCCCParam.getPageSize()));
		// 分页
		Result<OrganCCCManagemenPO> result = new Result<>();

		Page<OrganCCCManagemenPO> page = PageHelper.startPage(
				queryOrganCCCRequest.getPageNum(),
				queryOrganCCCRequest.getPageSize(), true);

		List<OrganCCCManagemenPO> OrganCCCManagemenInfos = organCCCManagementService
				.queryOrgCCCList(queryOrganCCCParam);
		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModels(OrganCCCManagemenInfos);
		logger.debug(String.format(
				"queryOrgCCCList is end  total numbers is :%s", totalNum));

		return JSONResultUtil.setSuccess(result);
	}

	private QueryOrganCCCRequest makeRequestPragram(
			QueryOrganCCCRequest queryOrganCCCRequest) {

		if (queryOrganCCCRequest.getPageNum() <= 0) {
			queryOrganCCCRequest.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
		}
		if (queryOrganCCCRequest.getPageSize() <= 0) {
			queryOrganCCCRequest.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
		}
		if (queryOrganCCCRequest.getPageSize() > 100) {
			queryOrganCCCRequest
					.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
		}
		// 从session 中获取信息
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		queryOrganCCCRequest.setUid(sysLoginCtrl.getUid());
		return queryOrganCCCRequest;

	}

	
	
	/**
	 * 机构CCC新增功能
	 * 
	 * @author 程龙
	 * @param organCCCManagemenPO
	 * @return
	 */
	@PostMapping(value = "/addOrgCCC")
	public Object addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) {

		if (organCCCManagemenPO == null) {
			logger.error("the request organCCCManagemenPO is null");
			JSONResultUtil.setError("F00002",
					"the request params organCCCManagemenPO is null");
		}

		// 从session中获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		organCCCManagemenPO.setUid(uid);

		// 根据机构名称获取机构ID organNo
		String organNo = organCCCManagementService.getOrganNoByName(
				organCCCManagemenPO.getUid(),
				organCCCManagemenPO.getOrganName());

		// 根据organNo校验
		OrganCCCManagemenPO databaseOrganCCCManagemenPO = organCCCManagementService
				.queryOrganCCCManagementByOrganNo(uid, organNo);

		if (databaseOrganCCCManagemenPO != null) {
			logger.error("the organCCC already exists");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the organCCC already exists");
		}

		// String organNo=databaseOrganCCCManagemenPO.getOrganNo();
		organCCCManagemenPO.setOrganNo(organNo);
		String createdBy = sysLoginCtrl.getCreatedBy();
		organCCCManagemenPO.setCreatedBy(createdBy);

		if (organCCCManagementService == null) {
			organCCCManagementService = SpringUtil
					.getBean(OrganCCCManagementService.class);
		}
		
		try {
			organCCCManagementService.addOrgCCC(organCCCManagemenPO);
			return JSONResultUtil.setSuccess(organCCCManagemenPO);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"add EssetUsePO fail");
		
		
	}

	
	// 修改之前的查询返显
	@GetMapping(value = "/queryOrganCCCManagementByOrganName/{organName}")
	@Cacheable(value = "queryCache")
	public Object queryOrganCCCManagementByOrganName(
			@PathVariable(value = "organName", required = true) String organName) {

		if (StringUtils.isEmpty(organName)) {
			logger.error("the request params organName is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params organName is null");
		}

		// 从session中获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();

		return JSONResultUtil.setSuccess(organCCCManagementService
				.queryOrganCCCManagementByOrganName(uid, organName));
	}

	// 修改
	@PutMapping(value = "/modOrgCCC")
	public Object modOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) {

		if (organCCCManagemenPO == null) {
			logger.error("the request params organCCCManagemenPO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params organCCCManagemenPO is null");
		}

		try {
			organCCCManagementService
					.updateOrganCCCManagement(organCCCManagemenPO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"update organCCCManagemen fail");
	}

	// 删除机构CCC：逻辑删除
	@RequestMapping(value = "/delOrgCCC/{organNo}", method = RequestMethod.GET)
	public Object delOrgCCC(@PathVariable String organNo) {
		if (StringUtils.isEmpty(organNo)) {
			logger.error("the request params organNo is null");
			return JSONResultUtil.setError("F00002",
					"the request params organNo is null");
		}
		organCCCManagementService.deleteOrganCCC(organNo);
		return JSONResultUtil.setSuccess();
	}

}
