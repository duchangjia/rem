package com.omcube.service;

import java.util.List;

import com.omcube.model.po.RankSalaryTemplatePO;

public interface RankSalaryTemplateService {
    /**
     * 1.添加职级薪酬标准模板
     * @param rankSalaryTemplate
     */
    void addRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate);
    
    /**
     * 2.根据uId和organNo查询职级薪酬标准模板列表
     * @param rankSalaryTemplate
     * @return
     */
    List<RankSalaryTemplatePO> queryRankSalaryTemplates(RankSalaryTemplatePO rankSalaryTemplate);
    
    /**
     * 3.根据uId，organNo和applyNo查询单个职级薪酬模板
     * @param rankSalaryTemplate
     * @return
     */
    Object queryRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate);

    /**
     * 4.修改职级薪酬标准模板
     * @param rankSalaryTemplate
     */
    void updateRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate);

    /**
     * 5.根据uId，organNo和applyNo删除相应的职级薪酬模板
     * @param rankSalaryTemplate
     */
    void deleteRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate);

}
