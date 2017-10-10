package com.omcube.model.po;

import java.util.Date;

public class VisaFreeHolidayPo extends BasicPO{
    private String uid;
    //节假日期
    private Date day;
    //节假日类型
    private String dayFlag;
    //备注
    private String remark;
    //创建人
    private String creatById;
    //创建时间
    private Date time;

    public VisaFreeHolidayPo()
    {

    }

    public VisaFreeHolidayPo(Date day, String dayFlag, String remark, String creatById, Date time)
    {

	this.day = day;
	this.dayFlag = dayFlag;
	this.remark = remark;
	this.creatById = creatById;
	this.time = time;
    }
    
    public String getUid()
    {
        return uid;
    }

    public void setUid(String uid)
    {
        this.uid = uid;
    }

    public Date getDay()
    {
	return day;
    }

    public void setDay(Date day)
    {
	this.day = day;
    }

    public String getDayFlag()
    {
	return dayFlag;
    }

    public void setDayFlag(String dayFlag)
    {
	this.dayFlag = dayFlag;
    }

    public String getRemark()
    {
	return remark;
    }

    public void setRemark(String remark)
    {
	this.remark = remark;
    }

    public String getCreatById()
    {
	return creatById;
    }

    public void setCreatById(String creatById)
    {
	this.creatById = creatById;
    }

    public Date getTime()
    {
	return time;
    }

    public void setTime(Date time)
    {
	this.time = time;
    }

}
