package com.omcube.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.enumtype.PayBaseStatusEnum;
import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryPayBaseInfoRequest;
import com.omcube.model.response.PayBaseInfoListResponse;
import com.omcube.model.response.UserDetailInfo;
import com.omcube.model.response.UserListInfo;
import com.omcube.service.PayBaseInfoService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 薪酬福利基数管理controllser
 * @author jinx
 *
 */
@RestController
@RequestMapping(value = "pay")
public class PayBaseInfoController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private PayBaseInfoService payBaseInfoService;

    /**
     * 添加员工薪酬基数
     * url：/pay/addPayBaseInfo
     * @return
     */
    @PostMapping(value = "/addPayBaseInfo")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addPayBaseInfo(@Valid EpPayBaseInfoPO epPayBaseInfo, BindingResult bindingResult) {
	//参数校验
	if (bindingResult.hasErrors()) {
	    logger.error("the request params is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    bindingResult.getFieldError().getDefaultMessage());
	}
	//从session中获取缓存值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	//校验remark  如果基本工资超过职级最大范围工资必须备注

	double salaryTop = payBaseInfoService.querySalaryTopByUserNo(uid, epPayBaseInfo.getUserNo());
	logger.debug(String.format("the salaryTop is :%s ", salaryTop));

	if (epPayBaseInfo.getWagesBase() > salaryTop && StringUtils.isEmpty(epPayBaseInfo.getRemark())) {
	    logger.error("the remark is must not be null when the wage base is over the top limit.");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the remark is must not be null when the wage base is over the salary top: " + salaryTop);
	}
	//status 的校验
	String status = epPayBaseInfo.getStatus();
	logger.debug(String.format("the pay base info status is :%s ", status));
	if (!PayBaseStatusEnum.isMatcher(status)) {
	    logger.error("the request status is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request status is invalid");
	}

	epPayBaseInfo.setuId(uid);
	epPayBaseInfo.setCreatedBy(sysLoginCtrl.getUserName());
	epPayBaseInfo.setUpdatedBy(sysLoginCtrl.getUserName());
	payBaseInfoService.addPayBaseInfo(epPayBaseInfo);

	return JSONResultUtil.setSuccess();
    }

    @GetMapping(value = "/queryPayBaseInfoList")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryPayBaseInfoList(@Valid QueryPayBaseInfoRequest queryPayBaseInfoReq,
	    BindingResult bindingResult) {
	//参数校验
	if (bindingResult.hasErrors()) {
	    logger.error("the request params is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    bindingResult.getFieldError().getDefaultMessage());
	}
	//校正分页属性
	checkPageParam(queryPayBaseInfoReq);
	//获取缓存uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	queryPayBaseInfoReq.setUid(sysLoginCtrl.getuId());
	//分页返回
	Result<PayBaseInfoListResponse> result = new Result<>();
	Page<PayBaseInfoListResponse> page = PageHelper.startPage(queryPayBaseInfoReq.getPageNum(),
		queryPayBaseInfoReq.getPageSize(), true);
	List<PayBaseInfoListResponse> payBaseInfoList = payBaseInfoService.queryPayBaseInfoList(queryPayBaseInfoReq);
	
	long totalNum = page.getTotal();
	result.setTotal(totalNum);
	result.setModels(payBaseInfoList);
	logger.debug(String.format("queryUser is end  total numbers is :%s", totalNum));
	
	return JSONResultUtil.setSuccess(result);

    }

    @GetMapping(value = "/queryPayBaseInfoDetail/{userNo}")
    public Object queryPayBaseInfoDetail(@PathVariable String userNo) {
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request userNo is null");
	}
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	logger.info(String.format("the request param uid:%s, userNo:%s", uid, userNo));
	EpPayBaseInfoPO epPayBaseInfo = payBaseInfoService.queryPayBaseInfoDetail(uid, userNo);

	return JSONResultUtil.setSuccess(epPayBaseInfo);
    }
    
    private void checkPageParam(QueryPayBaseInfoRequest queryPayBaseInfoReq) {
	if (queryPayBaseInfoReq.getPageNum() <= 0) {
	    queryPayBaseInfoReq.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
	}
	if (queryPayBaseInfoReq.getPageSize() <= 0) {
	    queryPayBaseInfoReq.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
	}
	if (queryPayBaseInfoReq.getPageSize() > 100) {
	    queryPayBaseInfoReq.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
	}
    }
}
