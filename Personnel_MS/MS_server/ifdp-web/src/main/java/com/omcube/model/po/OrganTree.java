package com.omcube.model.po;

import java.util.List;

public class OrganTree {
	
	
	private String id;//机构编号
	
	private String name;//机构名
	
	private List<OrganTree> childrenList;//当前机构下的子机构
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<OrganTree> getChildrenList() {
		return childrenList;
	}
	public void setChildrenList(List<OrganTree> childrenList) {
		this.childrenList = childrenList;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
