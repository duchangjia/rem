package com.omcube.web.controller;

import javax.validation.Valid;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.enumtype.PayBaseStatusEnum;
import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.PayBaseInfoService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
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
}
