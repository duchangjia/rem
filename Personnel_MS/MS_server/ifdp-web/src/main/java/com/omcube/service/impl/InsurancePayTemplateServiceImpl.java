package com.omcube.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.InsurancePayTemplateMapper;
import com.omcube.model.po.InsurancePayTemplatePO;
import com.omcube.service.InsurancePayTemplateService;
import com.omcube.util.JSONResultUtil;

@Component
public class InsurancePayTemplateServiceImpl implements InsurancePayTemplateService {

    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private InsurancePayTemplateMapper insurancePayTemplateMapper;

    /**
     * 1.通过uid查询所有的保险缴纳模板列表
     * @param uid
     * @return
     */
    public List<InsurancePayTemplatePO> queryInsurancePayTemplates(String uid) {
	return insurancePayTemplateMapper.queryInsurancePayTemplates(uid);
    }

    /**
     * 2.添加保险纳税模板
     * @param insurancePayTemplate
     * @return
     */
    public Object addInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	// 获取最大模板编号applyNo
	String string = insurancePayTemplateMapper.queryMaxApplyNo(insurancePayTemplate.getUid());
	if (string == null || string.length() == 0) {
	    string = "0";
	}
	int num = Integer.parseInt(string);
	num++;
	if (num < 10000) {
	    string = "" + num;
	}
	else {
	    return JSONResultUtil.setError("", "新增模板编号超过4位数");
	}
	// 添加保险纳税模板
	logger.info("uid为" + insurancePayTemplate.getUid() + ",用户编号为" + insurancePayTemplate.getApplyNo() + "准备添加编号为"
		+ insurancePayTemplate.getApplyNo() + "的保险缴纳模板");
	insurancePayTemplateMapper.addInsurancePayTemplate(insurancePayTemplate);
	logger.info("uid为" + insurancePayTemplate.getUid() + ",用户编号为" + insurancePayTemplate.getApplyNo() + "成功添加了编号为"
		+ insurancePayTemplate.getApplyNo() + "的保险缴纳模板");
	return JSONResultUtil.setSuccess();
    }

    /**
     * 3.根据uid和模板编号详细查询单个保险缴纳模板
     * @param insurancePayTemplate
     * @return
     */
    public InsurancePayTemplatePO queryInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	return insurancePayTemplateMapper.queryInsurancePayTemplate(insurancePayTemplate);
    }

    /**
     * 4.修改保险纳税模板
     * @param insurancePayTemplate
     */
    public void updateINsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	insurancePayTemplateMapper.updateInsurancePayTemplate(insurancePayTemplate);
    }

    /**
     * 5.删除保险缴纳系数模板
     */
    public void deleteInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
	insurancePayTemplateMapper.deleteInsurancePayTemplate(insurancePayTemplate);
    }

}
