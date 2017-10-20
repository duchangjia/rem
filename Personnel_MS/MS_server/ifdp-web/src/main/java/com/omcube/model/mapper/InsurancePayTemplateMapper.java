package com.omcube.model.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.InsurancePayTemplatePO;

@Mapper
public interface InsurancePayTemplateMapper {

    // 通过uid查询所有的保险缴纳模板列表
    public List<InsurancePayTemplatePO> queryInsurancePayTemplates(String uid);

    // 添加保险纳税模板
    void addInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);

    // 修改保险缴纳模板
    void updateInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);

    // 查询单个模板的详细信息
    public InsurancePayTemplatePO queryInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);

    // 获取最大的模板编号
    public String queryMaxApplyNo(String uid);

    //删除保险缴纳模板
    public void deleteInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
}
