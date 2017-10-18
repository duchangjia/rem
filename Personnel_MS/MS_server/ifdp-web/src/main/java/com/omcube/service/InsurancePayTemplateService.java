package com.omcube.service;

import java.util.List;

import com.omcube.model.po.InsurancePayTemplatePO;

public interface InsurancePayTemplateService {
    /**
     * 1.通过uid查询所有的保险缴纳模板列表
     * @param uId
     * @return
     */
    public List<InsurancePayTemplatePO> queryInsurancePayTemplates(String uId);
    
    /**
     * 2.添加保险纳税模板
     * @param insurancePayTemplate
     * @return
     */
    public Object addInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
    
    /**
     * 3.根据uid和模板编号详细查询单个保险缴纳模板
     * @param insurancePayTemplate
     * @return
     */
    public InsurancePayTemplatePO queryInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
    
    /**
     * 4.修改保险纳税模板
     * @param insurancePayTemplate
     */
    public void updateINsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
    
    /**
     * 5.删除保险缴纳系数模板
     * @param insurancePayTemplate
     */
    public void deleteInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
}
