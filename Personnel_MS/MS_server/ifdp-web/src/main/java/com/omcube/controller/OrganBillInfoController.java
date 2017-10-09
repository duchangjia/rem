package com.omcube.controller;

import java.text.ParseException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.mapper.EpOrganBillInfoMapper;
import com.omcube.model.po.EpOrganBillInfoPO;
import com.omcube.service.OrganBillInfoService;
import com.omcube.util.JSONResultUtil;

/**
 * 公司开票信息维护
 * 
 * @author rongxing
 * @version 1.0
 */

@RestController
@RequestMapping(value = "/organBillInfo")
@CacheConfig(cacheNames = "organBillInfoes")
public class OrganBillInfoController {

	protected final Log logger = LogFactory.getLog(getClass());
	@Autowired
	private OrganBillInfoService billInfoService;

	/**
	 * 新增开票信息
	 * 
	 * @param uId
	 * @return
	 * @throws ParseException
	 */
	@RequestMapping(value = "/addOrganBillInfo", method = RequestMethod.GET)
	@Cacheable
	public Object addOrganBillInfo(EpOrganBillInfoPO billInfoPO) throws ParseException {
		if (billInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError("F0002", "the request body is null");
		}
		billInfoPO.setuId("0001");
		billInfoPO.setOrganNo("10008");
		billInfoPO.setOrganName("");
		billInfoPO.setOrganTaxNo("");
		billInfoPO.setOrganTel("123456");
		billInfoPO.setOrganAcct("66666666");
		billInfoPO.setOrganAcctname("tianan");
		billInfoPO.setOrganAddr("福田");
		billInfoPO.setCreatedBy("wrx");
		billInfoPO.setUpdatedBy("wrx");
		
		billInfoService.addOrganBillInfo(billInfoPO);
		logger.info("uid:" + billInfoPO.getuId() + "organName" + billInfoPO.getOrganName() + "新增公司信息成功");
		return JSONResultUtil.setSuccess();
	}

	/**
	 * 修改开票信息
	 * 
	 * @return
	 * @throws ParseException
	 */
	@RequestMapping(value = "/updateOrganBillInfo", method = RequestMethod.GET)
	@Cacheable
	public Object updateOrganBillInfo(EpOrganBillInfoPO billInfoPO) throws ParseException {
		
		billInfoPO.setuId("0001");
		billInfoPO.setOrganNo("10001");
		billInfoPO.setOrganName("深圳平安0001");
		billInfoPO.setOrganTaxNo("8888");
		billInfoPO.setOrganTel("123456");
		billInfoPO.setOrganAcct("66666666");
		billInfoPO.setOrganAcctname("平安科技");
		billInfoPO.setOrganAddr("深圳");
		billInfoPO.setUpdatedBy("wurongxing");
		
		billInfoService.updateOrganBillInfo(billInfoPO);
		logger.info("uid:" + billInfoPO.getuId() + "organName" + billInfoPO.getOrganName() + "修改公司信息成功");
		return JSONResultUtil.setSuccess(billInfoPO);
	}

	/**
	 * 查询公司开票信息列表
	 * 
	 * @param uId
	 * @param request
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	@RequestMapping(value = "/queryBillInfoList/{uId}", method = RequestMethod.GET)
	@Cacheable
	public Object quetyBillInfoList(@PathVariable(value = "uId", required = true) String uId,
			HttpServletRequest request, Integer pageNum, Integer pageSize) {

		if(StringUtils.isEmpty(uId)){
			logger.error("the request param uId is null");
			return JSONResultUtil.setError("F0002", "the request param uId is null");
		}
		
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);

		List<EpOrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoList(uId);
		PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);
		
		return JSONResultUtil.setSuccess(pageInfo);
	}

	/**
	 * 根据名称模糊查询开票信息
	 * 
	 * @param uId
	 * @param organName
	 * @param request
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	@RequestMapping(value = "/queryBillInfoByName/{uId}&{organName}", method = RequestMethod.GET)
	@Cacheable
	public Object queryBillInfoByName(@PathVariable String uId, @PathVariable String organName,
			HttpServletRequest request, Integer pageNum, Integer pageSize) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<EpOrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoByName(uId, organName);
		PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);
		return JSONResultUtil.setSuccess(pageInfo);
	}

}
