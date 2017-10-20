package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import com.omcube.model.po.RankSalaryTemplatePO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.RankSalaryTemplateService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/RankSalaryTemplate")
public class RankSalaryTemplateController {
    @Autowired
    private RankSalaryTemplateService rankSalaryTemplateService;

    /**
     * 1.添加职级薪酬标准模板
     * @param rankSalaryTemplate
     * @return
     */
    @PostMapping(value = "/addCparm")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addCparm(RankSalaryTemplatePO rankSalaryTemplate) {
	//从session中获取uid createdBy
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String createdBy = sysLoginCtrl.getCreatedBy();
	//将uid createdBy放进对象中
	rankSalaryTemplate.setUid(uid);
	rankSalaryTemplate.setCreatedBy(createdBy);
	if (StringUtils.isEmpty(rankSalaryTemplate) || StringUtils.isEmpty(rankSalaryTemplate.getUid())
		|| StringUtils.isEmpty(rankSalaryTemplate.getOrganNo())
		|| StringUtils.isEmpty(rankSalaryTemplate.getSalaryTop())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param uid , organNo or salaryTop is null");
	}
	if (StringUtils.isEmpty(rankSalaryTemplate.getSalaryFloor())) {
	    rankSalaryTemplate.setSalaryFloor(0.0);
	}
	if (rankSalaryTemplate.getSalaryFloor() > rankSalaryTemplate.getSalaryTop()) {
	    return JSONResultUtil.setError("", "the  param salaryFloor > the  param salaryTop");
	}
	rankSalaryTemplateService.addRankSalaryTemplate(rankSalaryTemplate);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 2.根据uid和organNo查询职级薪酬标准模板列表
     * @param request
     * @param pageNum
     * @param pageSize
     * @param uid
     * @param organNo
     * @return
     */
    @GetMapping(value = "queryCParmList/{pageNum}/{pageSize}/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCParmList(HttpServletRequest request, @PathVariable Integer pageNum,
	    @PathVariable Integer pageSize, @PathVariable String organNo) {
	//从session中获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	//将查询条件封装到对象中
	RankSalaryTemplatePO rankSalaryTemplate = new RankSalaryTemplatePO();
	rankSalaryTemplate.setOrganNo(organNo);
	rankSalaryTemplate.setUid(uid);
	//判断查询条件是否为空
	if (StringUtils.isEmpty(rankSalaryTemplate.getUid()) || StringUtils.isEmpty(rankSalaryTemplate.getOrganNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param uid or organNo is null");
	}
	PageHelper.startPage(pageNum, pageSize, true);
	List<RankSalaryTemplatePO> rankSalaryTemplates = rankSalaryTemplateService
		.queryRankSalaryTemplates(rankSalaryTemplate);
	PageInfo<RankSalaryTemplatePO> pageInfo = new PageInfo<RankSalaryTemplatePO>(rankSalaryTemplates);
	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 3.根据uid，organNo和applyNo查询单个职级薪酬模板
     * @param request
     * @param uid
     * @param organNo
     * @param applyNo
     * @return
     */
    @GetMapping(value = "queryCParmDtl/{organNo}/{applyNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCParmDtl(@PathVariable(value = "organNo") String organNo,
	    @PathVariable(value = "applyNo") String applyNo) {
	//从session中获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	//将查询条件封装到对象中
	RankSalaryTemplatePO rankSalaryTemplate = new RankSalaryTemplatePO();
	rankSalaryTemplate.setOrganNo(organNo);
	rankSalaryTemplate.setUid(uid);
	rankSalaryTemplate.setApplyNo(applyNo);
	//判断查询条件是否为空
	if (StringUtils.isEmpty(rankSalaryTemplate.getUid()) || StringUtils.isEmpty(rankSalaryTemplate.getApplyNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param uid ,applyNo or organNo is null");
	}
	return JSONResultUtil.setSuccess(rankSalaryTemplateService.queryRankSalaryTemplate(rankSalaryTemplate));
    }

    /**
     * 3.根据uid和applyNo查询单个职级薪酬模板
     * @param applyNo
     * @return
     */
    @GetMapping(value = "queryCParmDtl/{applyNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCParmDtl(@PathVariable(value = "applyNo") String applyNo) {
	return queryCParmDtl(null, applyNo);
    }

    /**
     * 4.修改职级薪酬标准模板
     * @param rankSalaryTemplate
     * @return
     */
    @PutMapping(value = "modCparm")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object modCparm(RankSalaryTemplatePO rankSalaryTemplate) {
	//从session中获取uid updatedBy
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	//将uid updatedBy放入对象中
	rankSalaryTemplate.setUid(uid);
	rankSalaryTemplate.setUpdatedBy(updatedBy);
	//判断主要字段是否为空
	if (StringUtils.isEmpty(rankSalaryTemplate.getUid()) || StringUtils.isEmpty(rankSalaryTemplate.getOrganNo())
		|| StringUtils.isEmpty(rankSalaryTemplate.getApplyNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param uid ,applyNo or organNo is null");
	}
	rankSalaryTemplateService.updateRankSalaryTemplate(rankSalaryTemplate);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 5.根据uid，organNo和applyNo删除相应的职级薪酬标准模板
     * @param request
     * @param uid
     * @param organNo
     * @param applyNo
     * @return
     */
    @DeleteMapping(value = "delCparm/{organNo}/{applyNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object delCparm(HttpServletRequest request, @PathVariable String organNo, @PathVariable String applyNo) {
	//从session中获取uid updatedBy
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	//将删除条件和修改项封入对象
	RankSalaryTemplatePO rankSalaryTemplate = new RankSalaryTemplatePO();
	rankSalaryTemplate.setOrganNo(organNo);
	rankSalaryTemplate.setUid(uid);
	rankSalaryTemplate.setApplyNo(applyNo);
	rankSalaryTemplate.setUpdatedBy(updatedBy);
	rankSalaryTemplateService.deleteRankSalaryTemplate(rankSalaryTemplate);
	return JSONResultUtil.setSuccess();
    }

}
