package com.omcube.model.request;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class QueryTravelRequest {
    
    
    private int pageNum;//第几页
    private int pageSize;//每页多少条
    private String uid;//租户id  从session 中获取
    private String organNo;
    private String userNo;//用户编号
    private String applyNo;
  
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date travelStartTime;	//出差开始日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date travelEndTime;		//出差结束日期
    
    
    public int getPageNum()
    {
        return pageNum;
    }
    public void setPageNum(int pageNum)
    {
        this.pageNum = pageNum;
    }
    public int getPageSize()
    {
        return pageSize;
    }
    public void setPageSize(int pageSize)
    {
        this.pageSize = pageSize;
    }
    public String getUid()
    {
        return uid;
    }
    public void setUid(String uid)
    {
        this.uid = uid;
    }
    public String getOrganNo()
    {
        return organNo;
    }
    public void setOrganNo(String organNo)
    {
        this.organNo = organNo;
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
    
    public String getApplyNo()
    {
        return applyNo;
    }
    public void setApplyNo(String applyNo)
    {
        this.applyNo = applyNo;
    }
    
    
    
    
    
   

}
