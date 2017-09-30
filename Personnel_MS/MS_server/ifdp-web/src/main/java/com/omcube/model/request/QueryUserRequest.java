package com.omcube.model.request;

public class QueryUserRequest {

    private int pageNum;//第几页
    private int pageSize;//每页多少条
    private String uid;//租户id
    private String organCompanyName;
    private String organDepartmentName;
    private String userFeatureInfo;
    private String userNo;
    private String userName;
    private String mobileTEL;
    private String email;
    
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

    public String getOrganCompanyName()
    {
	return organCompanyName;
    }

    public void setOrganCompanyName(String organCompanyName)
    {
	this.organCompanyName = organCompanyName;
    }

    public String getOrganDepartmentName()
    {
        return organDepartmentName;
    }

    public void setOrganDepartmentName(String organDepartmentName)
    {
        this.organDepartmentName = organDepartmentName;
    }

    public String getUserFeatureInfo()
    {
	return userFeatureInfo;
    }

    public void setUserFeatureInfo(String userFeatureInfo)
    {
	this.userFeatureInfo = userFeatureInfo;
    }

    
    public String getUserNo()
    {
        return userNo;
    }

    public void setUserNo(String userNo)
    {
        this.userNo = userNo;
    }

    public String getUserName()
    {
        return userName;
    }

    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getMobileTEL()
    {
        return mobileTEL;
    }

    public void setMobileTEL(String mobileTEL)
    {
        this.mobileTEL = mobileTEL;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    @Override
    public String toString()
    {
	return "QueryUserRequest [pageNum=" + pageNum + ", pageSize=" + pageSize + ", uid=" + uid + ", organCompanyName=" + organCompanyName
		+ ", organDepartmentName=" + organDepartmentName + ", userFeatureInfo=" + userFeatureInfo + "]";
    }

}
