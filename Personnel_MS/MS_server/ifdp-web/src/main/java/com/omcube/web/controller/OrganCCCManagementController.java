package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.service.OrganCCCManagementService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@RestController
@RequestMapping(value = "/organ")
public class OrganCCCManagementController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private OrganCCCManagementMapper organCCCManagementMapper;

	@Autowired
	private OrganCCCManagementService organCCCManagementService;

	// 查询所有列表
	@GetMapping(value = "/queryOrgCCCList/{uId}")
	@Cacheable(value = "queryCache")
	public Object queryOrgCCCList(@PathVariable String uId,
			HttpServletRequest request, Integer pageSize, Integer pageNum) {

		if (StringUtils.isEmpty(uId)) {
			logger.error("the request params uId is null");
			return JSONResultUtil.setError("F00002",
					"the request params uId is null");
		}

		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<OrganCCCManagemenPO> list = organCCCManagementService
				.queryOrgCCCList(uId);
		PageInfo<OrganCCCManagemenPO> pageInfo = new PageInfo<OrganCCCManagemenPO>(
				list);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 新增
	@PostMapping(value = "/addOrgCCC")
	public Object addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) {

		if (organCCCManagemenPO == null) {
			logger.error("the request organCCCManagemenPO is null");
			JSONResultUtil.setError("F00002",
					"the request params organCCCManagemenPO is null");
		}

		// 校验机构CCC是否存在
		if (organCCCManagementService.queryOrgCCCByName(
				organCCCManagemenPO.getOrganName()) != null) {
			logger.error("the organCCC already exists");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the organCCC already exists");
		}

		if (organCCCManagementService == null) {
			organCCCManagementService = SpringUtil
					.getBean(OrganCCCManagementService.class);
		}

		organCCCManagementService.addOrgCCC(organCCCManagemenPO);
		return JSONResultUtil.setSuccess();
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

		return JSONResultUtil.setSuccess(organCCCManagementService
				.queryOrganCCCManagementByOrganName(organName));
	}

	// 修改
	@PutMapping(value = "/modOrgCCC")
	public Object modOrgCCC(
			OrganCCCManagemenPO organCCCManagemenPO) {

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
