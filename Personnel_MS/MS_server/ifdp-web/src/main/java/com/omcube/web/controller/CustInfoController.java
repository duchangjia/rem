package com.omcube.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.util.StringUtils;
import com.omcube.model.po.CustInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.SysUserPO;
import com.omcube.service.CustInfoService;
import com.omcube.service.OrganService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/CustInfo")
public class CustInfoController {

    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private CustInfoService custInfoService; 
    
    @PostMapping(value = "/insertCustInfo")
    public Object insertCustInfo(CustInfoPO custInfo){
	
	if (custInfo == null) {
	    logger.error("the param custInfo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the param custInfo is null");
	}
	
	setupID(custInfo);
	custInfoService.insertCustInfo(custInfo);
	return JSONResultUtil.setSuccess(custInfo);
    }
    
    //从session中获取uid userNo(操作人),并赋值
    public void setupID(CustInfoPO custInfo){
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String userNO = sysLoginCtrl.getUserNo();
	custInfo.setuId(uId);
	custInfo.setCreatedBy(userNO);
	custInfo.setUpdatedBy(userNO);
    }
    
    //校验数据库参数  不能为null
    public void checkNull(CustInfoPO custInfo){
	
    }   
   
    @GetMapping(value = "/queryCustInfoByUserNo/{userNo}")
    public Object queryCustInfoByUserNo(@PathVariable String userNo)
    {
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request userNo is null");
	}
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	logger.info(String.format("the request param uid:%s, userNo:%s", uid, userNo));
	
	CustInfoPO custInfoPO = custInfoService.queryCustInfoByUserNo(uid, userNo);
	return JSONResultUtil.setSuccess(custInfoPO);
    }
}
