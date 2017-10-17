package com.omcube.model.request;

public class QueryFuncRequest {
    
    
    private int pageNum;//第几页
    private int pageSize;//每页多少条
    private String uid;//租户id  从session 中获取
    private String userNo;//用户编号
    private String sysNo; // 系统编号
    private String bsnNo; // 功能编号
    private String methodName; // 方法(功能)名称
    private String status;//状态
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
    public String getUserNo()
    {
        return userNo;
    }
    public void setUserNo(String userNo)
    {
        this.userNo = userNo;
    }
    public String getSysNo()
    {
        return sysNo;
    }
    public void setSysNo(String sysNo)
    {
        this.sysNo = sysNo;
    }
    public String getBsnNo()
    {
        return bsnNo;
    }
    public void setBsnNo(String bsnNo)
    {
        this.bsnNo = bsnNo;
    }
    public String getMethodName()
    {
        return methodName;
    }
    public void setMethodName(String methodName)
    {
        this.methodName = methodName;
    }
    public String getStatus()
    {
        return status;
    }
    public void setStatus(String status)
    {
        this.status = status;
    }
    
  
    
    
    
    
   

}
