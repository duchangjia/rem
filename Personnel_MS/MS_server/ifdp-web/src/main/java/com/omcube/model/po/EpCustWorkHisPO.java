package com.omcube.model.po;

public class EpCustWorkHisPO extends BasicPO{
    private String userNo;    //用户编号
    private String workHisId; //序号
    private String startTime; //开始时间
    private String endTime;   //结束时间
    private String company;   //公司
    private String post1;     //职务
    private String duty;      //职责
    private String desc;      //描述
    private String isDelete;  //是否删除
    
    public String getIsDelete()
    {
        return isDelete;
    }
    public void setIsDelete(String isDelete)
    {
        this.isDelete = isDelete;
    }
    public String getUserNo()
    {
        return userNo;
    }
    public void setUserNo(String userNo)
    {
        this.userNo = userNo;
    }
    public String getWorkHisId()
    {
        return workHisId;
    }
    public void setWorkHisId(String workHisId)
    {
        this.workHisId = workHisId;
    }
    public String getStartTime()
    {
        return startTime;
    }
    public void setStartTime(String startTime)
    {
        this.startTime = startTime;
    }
    public String getEndTime()
    {
        return endTime;
    }
    public void setEndTime(String endTime)
    {
        this.endTime = endTime;
    }
    public String getCompany()
    {
        return company;
    }
    public void setCompany(String company)
    {
        this.company = company;
    }
    public String getPost1()
    {
        return post1;
    }
    public void setPost1(String post1)
    {
        this.post1 = post1;
    }
    public String getDuty()
    {
        return duty;
    }
    public void setDuty(String duty)
    {
        this.duty = duty;
    }
    public String getDesc()
    {
        return desc;
    }
    public void setDesc(String desc)
    {
        this.desc = desc;
    }

    
}
