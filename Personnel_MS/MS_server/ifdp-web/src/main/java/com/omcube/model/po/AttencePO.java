package com.omcube.model.po;

import java.math.BigDecimal;
import java.util.Date;

public class AttencePO extends BasicPO {
    
   private String attenceNo	;	//考勤编号
   private String userNo	;	//用户编号 
   private Date attenceTime	;	//考勤日期 
   private String attenceType	;	//考勤类型	 
   private String projNo	;	//项目ID	 
   private BigDecimal taskTime	;	//工时	 
   private String attenceStatus ;	//状态	 
   private String remark	;	//备注	 
    public String getUserNo()
    {
        return userNo;
    }
    public void setUserNo(String userNo)
    {
        this.userNo = userNo;
    }
    public Date getAttenceTime()
    {
        return attenceTime;
    }
    public void setAttenceTime(Date attenceTime)
    {
        this.attenceTime = attenceTime;
    }
    public String getAttenceType()
    {
        return attenceType;
    }
    public void setAttenceType(String attenceType)
    {
        this.attenceType = attenceType;
    }
    public String getProjNo()
    {
        return projNo;
    }
    public void setProjNo(String projNo)
    {
        this.projNo = projNo;
    }
    public BigDecimal getTaskTime()
    {
        return taskTime;
    }
    public void setTaskTime(BigDecimal taskTime)
    {
        this.taskTime = taskTime;
    }
    public String getAttenceStatus()
    {
        return attenceStatus;
    }
    public void setAttenceStatus(String attenceStatus)
    {
        this.attenceStatus = attenceStatus;
    }
    public String getRemark()
    {
        return remark;
    }
    public void setRemark(String remark)
    {
        this.remark = remark;
    }
    public String getAttenceNo()
    {
        return attenceNo;
    }
    public void setAttenceNo(String attenceNo)
    {
        this.attenceNo = attenceNo;
    }
    
    @Override
    public String toString()
    {
	return "AttencePO [attenceNo=" + attenceNo + ", userNo=" + userNo + ", attenceTime=" + attenceTime
		+ ", attenceType=" + attenceType + ", projNo=" + projNo + ", taskTime=" + taskTime + ", attenceStatus="
		+ attenceStatus + ", remark=" + remark + "]";
    }
      
                
       
       

}
