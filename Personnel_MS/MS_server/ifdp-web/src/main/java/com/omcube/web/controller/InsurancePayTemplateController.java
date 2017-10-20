package com.omcube.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.InsurancePayTemplatePO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.InsurancePayTemplateService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 保险缴纳系数的设置
 * 
 * @author zhaoqi
 *
 */
@RestController
@RequestMapping(value = "/InsurancePayTemplate")
public class InsurancePayTemplateController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private InsurancePayTemplateService insurancePayTemplateService;

    /**
     * 1.通过uId查询所有的保险缴纳模板列表
     * 
     * @param uId
     * @param pageNum
     * @param pageSize
     * @return
     */
    @GetMapping(value = "/queryInsurancePayTemplates/{pageNum}/{pageSize}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryInsurancePayTemplates(@PathVariable Integer pageNum, @PathVariable  Integer pageSize) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getUid();
	// 判断传入参数是否为空,若为空则返回错误信息
	if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(pageNum) || StringUtils.isEmpty(pageSize)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uId,pageNum or pageSize is null");
	}
	// 使用pagehelper插件进行分页查询
	PageHelper.startPage(pageNum, pageSize, true);
	List<InsurancePayTemplatePO> insurancePayTemplates = insurancePayTemplateService
		.queryInsurancePayTemplates(uId);
	PageInfo<InsurancePayTemplatePO> pageInfo = new PageInfo<InsurancePayTemplatePO>(insurancePayTemplates);
	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 2.添加保险缴纳模板
     * 
     * @return
     */
    @PostMapping(value = "/addInsurancePayTemplate")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	//从session 获取uid  userNo
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getUid();
	String userNo = sysLoginCtrl.getUserNo();
	if (StringUtils.isEmpty(insurancePayTemplate)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "request body is null");
	}
	//将获取的uid  userNo放进实例
	insurancePayTemplate.setuId(uId);
	insurancePayTemplate.setCreatedBy(userNo);
	// 返回查询结果 和信息
	return insurancePayTemplateService.addInsurancePayTemplate(insurancePayTemplate);
    }

    /**
     * 3.根据uId和模板编号applyNo详细查询单个保险缴纳模板
     * 
     * @param uId
     * @param applyNo
     * @return
     */
    @GetMapping(value = "/queryInsurancePayTemplate/{applyNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryInsurancePayTemplate(@PathVariable String applyNo) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getUid();
	// 判断传入参数是否为空,若为空则返回错误信息
	if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(applyNo)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "param uId or applyNo is null");
	}
	InsurancePayTemplatePO insurancePayTemplate = new InsurancePayTemplatePO();
	insurancePayTemplate.setuId(uId);
	insurancePayTemplate.setApplyNo(applyNo);
	// 返回查询结果 和信息
	return JSONResultUtil.setSuccess(insurancePayTemplateService.queryInsurancePayTemplate(insurancePayTemplate));
    }

    /**
     * 4.修改保险缴纳模板
     * 
     * @return
     */
    @PutMapping(value = "/updateInsurancePayTemplate")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object updateInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	//从session 获取uid  userNo
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getUid();
	String userNo = sysLoginCtrl.getUserNo();
	if (StringUtils.isEmpty(insurancePayTemplate)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	//将获取到的uid  userNo放入实例
	insurancePayTemplate.setuId(uId);
	insurancePayTemplate.setUpdatedBy(userNo);
	if (StringUtils.isEmpty(insurancePayTemplate.getuId())
		|| StringUtils.isEmpty(insurancePayTemplate.getApplyNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "param uId or applyNo is null");
	}
	insurancePayTemplateService.updateINsurancePayTemplate(insurancePayTemplate);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 5.根据uId和applyNo删除模板
     * 
     * @param insurancePayTemplate
     * @return
     */
    @DeleteMapping(value = "/deleteInsurancePayTemplate/{applyNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deleteInsurancePayTemplate(@PathVariable String applyNo) {
	//从session 获取uid  userNo
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getUid();
	String userNo = sysLoginCtrl.getUserNo();
	if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(applyNo) || StringUtils.isEmpty(userNo)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "param uId , applyNo or userNo is null");
	}
	InsurancePayTemplatePO insurancePayTemplate = new InsurancePayTemplatePO();
	insurancePayTemplate.setuId(uId);
	System.out.println(insurancePayTemplate.getuId());
	insurancePayTemplate.setApplyNo(applyNo);
	insurancePayTemplate.setUpdatedBy(userNo);
	insurancePayTemplateService.deleteInsurancePayTemplate(insurancePayTemplate);
	return JSONResultUtil.setSuccess();
    }
}
