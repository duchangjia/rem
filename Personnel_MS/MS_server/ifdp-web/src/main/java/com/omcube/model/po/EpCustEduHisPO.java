package com.omcube.model.po;

public class EpCustEduHisPO extends BasicPO{
    private String userNo;    //用户编号
    private String eduHisId;  //序号
    private String startTime; //开始时间
    private String endTime;   //结束时间
    private String schoolName;//学校名称
    private String major;     //专业
    private String education; //学历
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
    public String getEduHisId()
    {
        return eduHisId;
    }
    public void setEduHisId(String eduHisId)
    {
        this.eduHisId = eduHisId;
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
    public String getSchoolName()
    {
        return schoolName;
    }
    public void setSchoolName(String schoolName)
    {
        this.schoolName = schoolName;
    }
    public String getMajor()
    {
        return major;
    }
    public void setMajor(String major)
    {
        this.major = major;
    }
    public String getEducation()
    {
        return education;
    }
    public void setEducation(String education)
    {
        this.education = education;
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
