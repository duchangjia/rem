package com.omcube.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.util.StringUtils;
import com.omcube.model.po.CustInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.CustInfoService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/CustInfo")
public class CustInfoController {

    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private CustInfoService custInfoService; 
    
    /**
     * 员工基本信息新增
     * @param custInfo
     * @return
     */
    @PostMapping(value = "/insertCustInfo")
    public Object insertCustInfo(CustInfoPO custInfo){
	
	if (custInfo == null) {
	    logger.error("the param custInfo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the param custInfo is null");
	}
	//从session获取登录信息
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String userNO = sysLoginCtrl.getUserNo();
	custInfo.setuId(uId);
	custInfo.setCreatedBy(userNO);
	custInfo.setUpdatedBy(userNO);
	
	custInfoService.insertCustInfo(custInfo);
	return JSONResultUtil.setSuccess(custInfo);
    }
    
    /**
     * 员工基本信息修改
     * @param custInfo
     * @return
     */
    @PutMapping("/modCustInf")
    public Object modCustInf(CustInfoPO custInfo){
	
	if (custInfo == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	//从session中获取登录信息
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	custInfo.setuId(sysLoginCtrl.getuId());
	custInfo.setUpdatedBy(sysLoginCtrl.getUserNo());
	
	custInfoService.modCustInf(custInfo);
	return JSONResultUtil.setSuccess();
    }
    
    /**
     * 员工详细信息查询
     * @param userNO
     * @return
     */
    @GetMapping("/queryCustInfoByUserNo/{userNo}")
    public Object queryCustInf(@PathVariable String userNo){
	
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request param userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param userNo is null");
	}
	//从session 中获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	CustInfoPO custInfo = custInfoService.queryCustInfoByUserNo(uId,userNo);
	return JSONResultUtil.setSuccess(custInfo);
    }

    @PutMapping("/delCustInf/{userNo}")
    public Object delCustInf(@PathVariable String userNo){
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request param userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param userNo is null");
	}
	//从session 中获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	custInfoService.delCustInf(uId, userNo);
	return JSONResultUtil.setSuccess();
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
