package com.omcube.model.po;

import java.util.List;

public class OrganTree {
	
	
	private String id;
	
	private String name;
	
	private List<OrganTree> childrenList;
	
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
