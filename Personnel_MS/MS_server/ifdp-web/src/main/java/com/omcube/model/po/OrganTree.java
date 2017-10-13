package com.omcube.model.po;

import java.util.List;

public class OrganTree {

	private String id;//机构编号
	private String name;//机构名
	private String organType;
	private String organLevel;//机构级别
	private String status;
	private String parentNo;
	private String organDescr;
	private String organPath;
	private String createdBy;
	private String createdDate;
	private String updateBy;
	private String updateDate;
	private List<OrganTree> childrenList;//当前机构下的子机构

	public String getId()
	{
	    return id;
	}
	public void setId(String id)
	{
	    this.id = id;
	}
	public String getName()
	{
	    return name;
	}
	public void setName(String name)
	{
	    this.name = name;
	}
	public String getOrganType()
	{
	    return organType;
	}
	public void setOrganType(String organType)
	{
	    this.organType = organType;
	}
	public String getOrganLevel()
	{
	    return organLevel;
	}
	public void setOrganLevel(String organLevel)
	{
	    this.organLevel = organLevel;
	}
	public String getStatus()
	{
	    return status;
	}
	public void setStatus(String status)
	{
	    this.status = status;
	}
	public String getParentNo()
	{
	    return parentNo;
	}
	public void setParentNo(String parentNo)
	{
	    this.parentNo = parentNo;
	}
	public String getOrganDescr()
	{
	    return organDescr;
	}
	public void setOrganDescr(String organDescr)
	{
	    this.organDescr = organDescr;
	}
	public String getOrganPath()
	{
	    return organPath;
	}
	public void setOrganPath(String organPath)
	{
	    this.organPath = organPath;
	}
	public String getCreatedBy()
	{
	    return createdBy;
	}
	public void setCreatedBy(String createdBy)
	{
	    this.createdBy = createdBy;
	}
	public String getCreatedDate()
	{
	    return createdDate;
	}
	public void setCreatedDate(String createdDate)
	{
	    this.createdDate = createdDate;
	}
	public String getUpdateBy()
	{
	    return updateBy;
	}
	public void setUpdateBy(String updateBy)
	{
	    this.updateBy = updateBy;
	}
	public String getUpdateDate()
	{
	    return updateDate;
	}
	public void setUpdateDate(String updateDate)
	{
	    this.updateDate = updateDate;
	}
	public List<OrganTree> getChildrenList()
	{
	    return childrenList;
	}
	public void setChildrenList(List<OrganTree> childrenList)
	{
	    this.childrenList = childrenList;
	}
	
	
	
}
