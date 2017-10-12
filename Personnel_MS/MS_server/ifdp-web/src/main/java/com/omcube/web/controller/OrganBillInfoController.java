package com.omcube.web.controller;

import java.text.ParseException;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.OrganBillInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.OrganBillInfoService;
import com.omcube.service.OrganService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 公司开票信息维护
 * 
 * @author rongxing
 * @version 1.0
 */
@RestController
@RequestMapping(value = "/organBillInfo")
public class OrganBillInfoController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private OrganBillInfoService billInfoService;

    @Autowired
    private OrganService organService;

    /**
     * 新增开票信息	
     * 
     * @param uId
     * @return
     * @throws ParseException
     */
    @PostMapping(value = "/addOrganBillInfo")
    public Object addOrganBillInfo(OrganBillInfoPO billInfo) throws ParseException {

	//从session 获取uid  userNo 并赋值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	String userNo = sysLoginCtrl.getUserNo();
	billInfo.setuId(uid);
	billInfo.setCreatedBy(userNo);
	billInfo.setUpdatedBy(userNo);

	//校验机构是否存在
	if (organService.queryCurrentOrgan(billInfo.getOrganNo()) == null) {
	    logger.error("the organ does not exist");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the organ does not exist");
	}

	//校验是否重复开票
	if (billInfoService.queryBillInfo(billInfo.getuId(),billInfo.getOrganNo()) != null) {
	    logger.error("the organ already exists");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the billInfo already exists");
	}

	billInfoService.addOrganBillInfo(billInfo);
	logger.info("uid:" + billInfo.getuId() + "organName" + billInfo.getOrganName() + "新增公司信息成功");
	return JSONResultUtil.setSuccess();
    }

    /**
     * 修改开票信息
     * 
     * @return
     * @throws ParseException
     */
    @PutMapping(value = "/updateOrganBillInfo")
    public Object updateOrganBillInfo(OrganBillInfoPO billInfo) throws ParseException {

	//从session 获取uid  userNo 并赋值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String userNo = sysLoginCtrl.getUserNo();
	billInfo.setuId(uId);
	billInfo.setUpdatedBy(userNo);
	
	if (billInfo != null) {
	    billInfoService.updateOrganBillInfo(billInfo);
	}
	logger.info("修改公司信息成功");
	return JSONResultUtil.setSuccess();
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
    @GetMapping(value = "/queryBillInfoList")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object quetyBillInfoList(Integer pageNum, Integer pageSize) {

	//从session 获取uid  并赋值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
		
	if (StringUtils.isEmpty(uId)) {
	    logger.error("the request param uId is null");
	    return JSONResultUtil.setError("ErrorCodeConstantUtil.REQUEST_INVALID_ERR",
		    "the request param uId is null");
	}
	//分页
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);
	
	List<OrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoList(uId);
	PageInfo<OrganBillInfoPO> pageInfo = new PageInfo<OrganBillInfoPO>(billInfoPOList);

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
    @GetMapping(value = "/queryBillInfoByName/{organName}")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryBillInfoByName(@PathVariable String organName, Integer pageNum, Integer pageSize) {

	//从session 获取uid  并赋值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	
	
	//分页
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);
	
	List<OrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoByName(uId,organName);
	PageInfo<OrganBillInfoPO> pageInfo = new PageInfo<OrganBillInfoPO>(billInfoPOList);

	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 查询公司开票信息
     * 
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryBillInfo/{organNo}")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryBillInfo(@PathVariable String organNo) {

	//从session 获取uid  并赋值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	System.out.println(organNo+"organNoorganNo");
	OrganBillInfoPO billInfoPO = billInfoService.queryBillInfo(uId,organNo);
	return JSONResultUtil.setSuccess(billInfoPO);
    }

}
