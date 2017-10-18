package com.omcube.model.po;

public class RankSalaryTemplatePO extends BasicPO {
    private String organNo;//机构号
    private String applyNo;//申请号(模板编号)
    private String applyName;//模板名称
    private String rank;//职级
    private Double salaryTop;//薪资上限
    private Double salaryFloor;//薪资下限
    private Double businessStandard;//出差标准
    private String remark;//备注
    public String getOrganNo()
    {
        return organNo;
    }
    public void setOrganNo(String organNo)
    {
        this.organNo = organNo;
    }
    public String getApplyNo()
    {
        return applyNo;
    }
    public void setApplyNo(String applyNo)
    {
        this.applyNo = applyNo;
    }
    public String getApplyName()
    {
        return applyName;
    }
    public void setApplyName(String applyName)
    {
        this.applyName = applyName;
    }
    public String getRank()
    {
        return rank;
    }
    public void setRank(String rank)
    {
        this.rank = rank;
    }
    public Double getSalaryTop()
    {
        return salaryTop;
    }
    public void setSalaryTop(Double salaryTop)
    {
        this.salaryTop = salaryTop;
    }
    public Double getSalaryFloor()
    {
        return salaryFloor;
    }
    public void setSalaryFloor(Double salaryFloor)
    {
        this.salaryFloor = salaryFloor;
    }
    public Double getBusinessStandard()
    {
        return businessStandard;
    }
    public void setBusinessStandard(Double businessStandard)
    {
        this.businessStandard = businessStandard;
    }
    public String getRemark()
    {
        return remark;
    }
    public void setRemark(String remark)
    {
        this.remark = remark;
    }
    
    
}
