package com.omcube.web.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.ifdpcore.common.JSONResult;
import com.omcube.model.po.AssetUsePO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryAssetUseRequest;
import com.omcube.model.response.AssetUseResponse;
import com.omcube.service.AssetUseService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.GetNumUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 资产使用管理
 * 
 * @author 程龙
 *
 */
@RestController
@RequestMapping(value = "/assetUse")
public class AssetUseController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private AssetUseService assetUseService;

	/**
	 * 查询反显姓名,手机号,岗位,职级
	 * 
	 * @author 程龙
	 * @param applyUserNo,organNo,derpNo,ccc
	 * @return Object
	 */
	@GetMapping(value = "/queryAssetUserByApplyUserNo/{organNo}/{derpNo}/{ccc}/{applyUserNo}")
	@Cacheable(value = ConstantUtil.QUERY_CACHE)
	public Object queryAssetUserByApplyUserNo(@PathVariable String applyUserNo,
			@PathVariable String organNo, @PathVariable String derpNo,
			@PathVariable String ccc) {

		if (StringUtils.isEmpty(applyUserNo) || StringUtils.isEmpty(organNo)
				|| StringUtils.isEmpty(derpNo) || StringUtils.isEmpty(ccc)) {
			logger.error("the request applyUserNo,organNo,derpNo ,ccc is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request applyUserNo,organNo,derpNo,ccc is null");
		}

		// 从session 获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		// 判断uid为空的情况 不能获取到uid
		if (StringUtils.isEmpty(uid)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前uid不存在");
		}
		// 获取到uid
		logger.info(String.format(
				"the request param uid:%s, applyUserNo:%s,organName:%s,"
						+ "derpName:%s,ccc:%s",
				uid, applyUserNo, organNo, derpNo, ccc));

		AssetUsePO assetUsePO = assetUseService.queryAssetUserByApplyUserNo(uid,
				applyUserNo, organNo, organNo, ccc);

		if (StringUtils.isEmpty(assetUsePO)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前用户信息不存在");
		}

		return JSONResultUtil.setSuccess(assetUsePO);
	}

	/**
	 * 根据资产编号assetNo查询反显所需要的资产信息
	 * 
	 * @author 程龙
	 * @param assetNo,organNo,derpNo,
	 * @return Object
	 */
	@GetMapping(value = "/queryAssetUserByAssetNo/{assetNo}")
	@Cacheable(value = ConstantUtil.QUERY_CACHE)
	public Object queryAssetUserByAssetNo(@PathVariable String assetNo) {

		if (StringUtils.isEmpty(assetNo)) {
			logger.error("the request assetNo is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request assetNo is null");
		}

		// 从session 获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		// 判断uid为空的情况 不能获取到uid
		if (StringUtils.isEmpty(uid)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前uid不存在");
		}
		// 获取到uid
		logger.info(String.format("the request param uid:%s, assetNo:%s", uid,
				assetNo));

		AssetUsePO assetUsePO = assetUseService.queryAssetUserByAssetNo(uid,
				assetNo);

		if (StringUtils.isEmpty(assetUsePO)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前资产信息不存在");
		}
		return JSONResultUtil.setSuccess(assetUsePO);
	}

	/**
	 * 添加资产使用信息
	 * 
	 * @author 程龙
	 * @param assetUsePO
	 * 
	 */
	@PostMapping(value = "/addAssetUseINF")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object addAssetUseINF(AssetUsePO assetUsePO) {

		if (assetUsePO == null) {
			logger.error("the param assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the param assetUsePO is null");
		}

		logger.info(String.format("the request body is %s:",
				assetUsePO.toString()));

		// 从session中获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		assetUsePO.setUid(uid);
		
		//使用编号的生成
		String applyNo = GetNumUtil.getNo();
		assetUsePO.setApplyNo(applyNo);

		try {
			assetUseService.addAssetUseINF(assetUsePO);
			return JSONResultUtil.setSuccess(assetUsePO);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"add EssetUsePO fail");
	}

	/**
	 * 资产使用信息修改
	 * 
	 * @author 程龙
	 * @param AssetUsePO
	 */
	@PutMapping(value = "/modAssUse")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object modAssUse(AssetUsePO assetUsePO) {

		if (assetUsePO == null) {
			logger.error("the request params assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params assetUsePO is null");
		}

		// 判断资产使用信息是否存在
		// 从session 获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		String updatedBy = sysLoginCtrl.getUpdatedBy();

		// 判断uid为空的情况 不能获取到uid
		if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(updatedBy)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前修改的资产信息不存在");
		}

		assetUsePO.setUid(uid);
		assetUsePO.setUpdatedBy(updatedBy);

		try {
			assetUseService.modAssUse(assetUsePO);
			return JSONResultUtil.setSuccess(assetUsePO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"update assetUseInfo fail");
	}

	/**
	 * 逻辑删除资产使用信息
	 * 
	 * @author 程龙
	 * @param applyNo
	 * 
	 */
	@RequestMapping(value = "/delAssUse/{applyNo}", method = RequestMethod.GET)
	public Object delAssUse(@PathVariable String applyNo) {

		if (StringUtils.isEmpty(applyNo)) {
			logger.error("the request applyNo is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request applyNo is null");
		}

		// 从session中获取uid
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();

		if (StringUtils.isEmpty(uid)) {
			logger.error("assetUsePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前uid不存在");
		}

		logger.info(String.format("the request param uid:%s", uid));

		assetUseService.delAssUse(uid, applyNo);

		return JSONResultUtil.setSuccess();
	}

	/**
	 * 查询资产使用列表
	 * 
	 * @author 程龙
	 * @param QueryAssetUseRequest
	 * @return
	 */
	@GetMapping(value = "queryAssUseList")
	@Cacheable(value = ConstantUtil.QUERY_CACHE)
	public Object queryAssUseList(QueryAssetUseRequest queryAssetUseRequest) {

		if (queryAssetUseRequest == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request body is null");
		}

		logger.info(String.format("the request body is %s:",
				queryAssetUseRequest.toString()));

		QueryAssetUseRequest queryAssetUseParam = makeRequestPragram(
				queryAssetUseRequest);

		logger.debug(
				String.format("the pageNum is  :%s and the pageSize is :%s",
						queryAssetUseParam.getPageNum(),
						queryAssetUseParam.getPageSize()));

		// 分页
		Result<AssetUseResponse> result = new Result<>();

		Page<AssetUseResponse> page = PageHelper.startPage(
				queryAssetUseRequest.getPageNum(),
				queryAssetUseRequest.getPageSize(), true);

		List<AssetUseResponse> assetUseResponseInfos = assetUseService
				.queryAssUseList(queryAssetUseParam);
		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModels(assetUseResponseInfos);
		logger.debug(String.format(
				"queryAssUseList is end  total numbers is :%s", totalNum));

		return JSONResultUtil.setSuccess(result);
	}

	private QueryAssetUseRequest makeRequestPragram(
			QueryAssetUseRequest queryAssetUseRequest) {
		
		if (queryAssetUseRequest.getPageNum() <= 0) {
			queryAssetUseRequest.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
		}
		if (queryAssetUseRequest.getPageSize() <= 0) {
			queryAssetUseRequest.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
		}
		if (queryAssetUseRequest.getPageSize() > 100) {
			queryAssetUseRequest
					.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
		}

		// 从session 中获取信息
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		queryAssetUseRequest.setUid(sysLoginCtrl.getUid());
		return queryAssetUseRequest;
	}

}
