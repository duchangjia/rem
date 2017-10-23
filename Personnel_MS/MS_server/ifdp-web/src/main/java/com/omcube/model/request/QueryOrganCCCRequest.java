package com.omcube.model.request;

public class QueryOrganCCCRequest {
	
	private int pageNum;// 第几页
	private int pageSize;// 每页多少条
	private String uid;// 租户id 从session 中获取
	private String organNo;//机构ID
	private String costType;//机构CCC类型
	private String costCode;//机构CCC编号
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getOrganNo() {
		return organNo;
	}
	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}
	
	public String getCostType() {
		return costType;
	}
	public void setCostType(String costType) {
		this.costType = costType;
	}
	public String getCostCode() {
		return costCode;
	}
	public void setCostCode(String costCode) {
		this.costCode = costCode;
	}

	
	
}
