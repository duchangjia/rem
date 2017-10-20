package com.omcube.model.po;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class EpTravelPO extends BasicPO {
    
    private String applyNo;		//差旅编号
    private String userNo;		//用户编号
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date travelStartTime;	//出差开始日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date travelEndTime;		//出差结束日期
    private BigDecimal travelSTD;	//差补标准
    private String travelType;		//出差类型
    private String travelStartCity;	//出差出发城市
    private String travelArrivalCity;	//出差到达城市
    private String travelDays;		//出差天数  
    private String attachm;		//附件 
    private String remark;		//备注
    
    public String getApplyNo()
    {
        return applyNo;
    }
    public void setApplyNo(String applyNo)
    {
        this.applyNo = applyNo;
    }
    public String getUserNo()
    {
        return userNo;
    }
    public void setUserNo(String userNo)
    {
        this.userNo = userNo;
    }
    public Date getTravelStartTime()
    {
        return travelStartTime;
    }
    public void setTravelStartTime(Date travelStartTime)
    {
        this.travelStartTime = travelStartTime;
    }
    public Date getTravelEndTime()
    {
        return travelEndTime;
    }
    public void setTravelEndTime(Date travelEndTime)
    {
        this.travelEndTime = travelEndTime;
    }
    public BigDecimal getTravelSTD()
    {
        return travelSTD;
        
    }
    public void setTravelSTD(BigDecimal travelSTD)
    {
        this.travelSTD = travelSTD;
    }
    public String getTravelType()
    {
        return travelType;
    }
    public void setTravelType(String travelType)
    {
        this.travelType = travelType;
    }
    public String getTravelStartCity()
    {
        return travelStartCity;
    }
    public void setTravelStartCity(String travelStartCity)
    {
        this.travelStartCity = travelStartCity;
    }
    public String getTravelArrivalCity()
    {
        return travelArrivalCity;
    }
    public void setTravelArrivalCity(String travelArrivalCity)
    {
        this.travelArrivalCity = travelArrivalCity;
    }
    public String getTravelDays()
    {
        return travelDays;
    }
    public void setTravelDays(String travelDays)
    {
        this.travelDays = travelDays;
    }
    public String getAttachm()
    {
        return attachm;
    }
    public void setAttachm(String attachm)
    {
        this.attachm = attachm;
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
