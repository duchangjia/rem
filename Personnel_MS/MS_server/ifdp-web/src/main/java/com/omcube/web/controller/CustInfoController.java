package com.omcube.web.controller;

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
import com.omcube.model.po.CustInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.CustInfoService;
import com.omcube.util.ConstantUtil;
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
    public Object insertCustInfo(CustInfoPO custInfo) {

	if (custInfo == null) {
	    logger.error("the param custInfo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the param custInfo is null");
	}
	//从session获取登录信息
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String userNO = sysLoginCtrl.getUserNo();
	custInfo.setUid(uid);
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
    public Object modCustInf(CustInfoPO custInfo) {

	if (custInfo == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	//从session中获取登录信息
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	custInfo.setUid(sysLoginCtrl.getUid());
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
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryCustInf(@PathVariable String userNo) {

	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request param userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param userNo is null");
	}
	//从session 中获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	CustInfoPO custInfo = custInfoService.queryCustInfoByUserNo(uid, userNo);
	return JSONResultUtil.setSuccess(custInfo);
    }

    /**
     * 员工基本信息删除
     * @param userNo
     * @return
     */
    @PutMapping("/delCustInf/{userNo}")
    public Object delCustInf(@PathVariable String userNo) {
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request param userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param userNo is null");
	}
	//从session 中获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	custInfoService.delCustInf(uid, userNo);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 人事档案列表查询
     * @return
     */
    @GetMapping(value = "/queryCustInfList/")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryCustInfList(Integer pageNum, Integer pageSize) {

	//从session 获取uids
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();

	if (StringUtils.isEmpty(uid)) {
	    logger.error("the param uid is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the param uid is null");
	}

	//分页
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);
	List<CustInfoPO> list = custInfoService.queryCustInfList(uid);
	PageInfo<CustInfoPO> pageInfo = new PageInfo<CustInfoPO>(list);

	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 直线经理查询
     * @param userNo
     * @return
     */
    @GetMapping(value = "/queryLineManager/{userNo}")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryLineManager(@PathVariable String userNo) {

	//从session 获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();

	String lineManager = custInfoService.queryLineManager(uid, userNo);
	return JSONResultUtil.setSuccess(lineManager);
    }

    /**
     * 员工自助_员工信息查询
     * @param userNo
     * @return
     */
    @GetMapping(value = "/queryCustInfBySelf/{userNo}")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryCustInfBySelf(@PathVariable String userNo) {

	//从session 获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
<<<<<<< HEAD
	String uId = sysLoginCtrl.getUid();
=======
	String uid = sysLoginCtrl.getUid();
>>>>>>> d9051828ad73f623e57e2ccecec572f0258dd1d6

	List<CustInfoPO> custInfoList = custInfoService.queryCustInfBySelf(uid, userNo);
	return JSONResultUtil.setSuccess(custInfoList);
    }

    /**
     * 员工自助_员工便捷查询
     * @param custInfo
     * @param pageNum
     * @param pageSize
     * @return
     */
    @GetMapping(value = "/queryCustInfByNameAndNo")
    @Cacheable(ConstantUtil.QUERY_CACHE)
    public Object queryCustInfByNameAndNo(CustInfoPO custInfo, Integer pageNum, Integer pageSize) {

	//从session 获取uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	custInfo.setUid(uid);
	//分页
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);
	List<CustInfoPO> custInfoList = custInfoService.queryCustInfByNameAndNo(custInfo);
	PageInfo<CustInfoPO> pageInfo = new PageInfo<CustInfoPO>(custInfoList);

	return JSONResultUtil.setSuccess(pageInfo);
    }
}
