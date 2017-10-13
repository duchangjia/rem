package com.omcube.web.controller;

import javax.validation.Valid;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    
    private PayBaseInfoService payBaseInfoService;

    /**
     * 添加员工薪酬基数
     * url：/pay/addPayBaseInfo
     * @return
     */
    @PostMapping(value = "/addPayBaseInfo")
    public Object addPayBaseInfo(@RequestBody @Valid EpPayBaseInfoPO epPayBaseInfo, BindingResult bindingResult) {
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
	//通过userNo 查职级控制No
	//通过 职级控制No 查职级薪水控制区间
	
	
	epPayBaseInfo.setuId(uid);
	epPayBaseInfo.setCreatedBy(sysLoginCtrl.getUserName());
	epPayBaseInfo.setUpdatedBy(sysLoginCtrl.getUserName());
	payBaseInfoService.addPayBaseInfo(epPayBaseInfo);
	
	return JSONResultUtil.setSuccess();

    }
}
