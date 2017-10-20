package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.RankSalaryTemplateMapper;
import com.omcube.model.po.RankSalaryTemplatePO;
import com.omcube.service.RankSalaryTemplateService;

@Component
public class RankSalaryTemplateServiceImpl implements RankSalaryTemplateService {
    @Autowired
    private RankSalaryTemplateMapper rankSalaryTemplateServiceMapper;

    /**
     * 1.添加职级薪酬标准模板
     */
    public void addRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate) {
	rankSalaryTemplateServiceMapper.addRankSalaryTemplate(rankSalaryTemplate);
    }

    /**
     * 2.查询职级薪酬标准模板列表
     */
    public List<RankSalaryTemplatePO> queryRankSalaryTemplates(RankSalaryTemplatePO rankSalaryTemplate) {
	return rankSalaryTemplateServiceMapper.queryRankSalaryTemplates(rankSalaryTemplate);
    }

    /**
     * 3.根据uid，organNo和applyNo查询单个职级薪酬模板
     */
    public Object queryRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate) {
	return rankSalaryTemplateServiceMapper.queryRankSalaryTemplate(rankSalaryTemplate);
    }

    /**
     * 4.修改职级薪酬标准模板
     */
    public void updateRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate) {
	rankSalaryTemplateServiceMapper.updateRankSalaryTemplate(rankSalaryTemplate);
    }

    /**
     * 5.根据uid，organNo和applyNo删除相应的职级薪酬模板
     */
    public void deleteRankSalaryTemplate(RankSalaryTemplatePO rankSalaryTemplate) {
	rankSalaryTemplateServiceMapper.deleteRankSalaryTemplate(rankSalaryTemplate);
    }

}
