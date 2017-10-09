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
import com.omcube.util.JSONResultUtil;


@RestController
@RequestMapping(value = "/organBillInfo")
@CacheConfig(cacheNames = "organBillInfoes")
public class OrganBillInfoController {

	protected final Log logger = LogFactory.getLog(getClass());
	@Autowired
	private EpOrganBillInfoMapper billInfoMapper;

	// 新增开票信息
	@RequestMapping(value = "/addOrganBillInfo/{uId}", method = RequestMethod.GET)
	@Cacheable
	public Object addOrganBillInfo(@PathVariable String uId) throws ParseException {
		EpOrganBillInfoPO billInfoPO = new EpOrganBillInfoPO();
		billInfoPO.setuId(uId);
		billInfoPO.setOrganNo("10008");
		billInfoPO.setOrganName("");
		billInfoPO.setOrganTaxNo("");
		billInfoPO.setOrganTel("123456");
		billInfoPO.setOrganAcct("66666666");
		billInfoPO.setOrganAcctname("tianan");
		billInfoPO.setOrganAddr("福田");
		billInfoPO.setCreatedBy("wrx");
		billInfoPO.setUpdatedBy("wrx");
		if (StringUtils.isEmpty(billInfoPO.getOrganName()) || StringUtils.isEmpty(billInfoPO.getOrganTaxNo())) {
			return JSONResultUtil.setError("F00002", "the request params userNo and userName is null");
		}
		billInfoMapper.addOrganBillInfo(billInfoPO);
		logger.info("uid:" + billInfoPO.getuId() + "organName" + billInfoPO.getOrganName() + "新增公司信息成功");
		return JSONResultUtil.setSuccess();
	}

	// 修改开票信息
	@RequestMapping(value = "/updateOrganBillInfo", method = RequestMethod.GET)
	@Cacheable
	public Object updateOrganBillInfo() throws ParseException {
		EpOrganBillInfoPO billInfoPO = new EpOrganBillInfoPO();
		billInfoPO.setuId("0001");
		billInfoPO.setOrganNo("10001");
		billInfoPO.setOrganName("深圳平安0001");
		billInfoPO.setOrganTaxNo("8888");
		billInfoPO.setOrganTel("123456");
		billInfoPO.setOrganAcct("66666666");
		billInfoPO.setOrganAcctname("平安科技");
		billInfoPO.setOrganAddr("深圳");
		billInfoPO.setUpdatedBy("wurongxing");
		billInfoMapper.updateOrganBillInfo(billInfoPO);
		logger.info("uid:" + billInfoPO.getuId() + "organName" + billInfoPO.getOrganName() + "修改公司信息成功");
		return JSONResultUtil.setSuccess(billInfoPO);
	}

	// 查询公司开票信息列表
	@RequestMapping(value = "/queryBillInfoList/{uId}", method = RequestMethod.GET)
	@Cacheable
	public Object quetyBillInfoList(@PathVariable String uId, HttpServletRequest request, Integer pageNum,
			Integer pageSize) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<EpOrganBillInfoPO> billInfoPOList = billInfoMapper.queryBillInfoList(uId);
		PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 根据名称模糊查询开票信息
	@RequestMapping(value = "/queryBillInfoByName/{uId}&{organName}", method = RequestMethod.GET)
	@Cacheable
	public Object queryBillInfoByName(@PathVariable String uId, @PathVariable String organName,
			HttpServletRequest request, Integer pageNum, Integer pageSize) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<EpOrganBillInfoPO> billInfoPOList = billInfoMapper.queryBillInfoByName(uId, organName);
		PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);
		return JSONResultUtil.setSuccess(pageInfo);
	}

}
