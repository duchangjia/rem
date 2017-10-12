package com.omcube.model.po;


public class OrganCCCManagemenPO extends BasicPO {
	// 机构ID
	private String organNo;
	// 机构名称
	private String organName;
	// ccc类型
	private String costType;
	// ccc值
	private String costCode;
	// 备注
	private String descr;
	// 状态
	private String status;
	// 机构类型
	private String organType;
	// 机构级别
	private String organLevel;

	public OrganCCCManagemenPO() {

	}

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getOrganName() {
		return organName;
	}

	public void setOrganName(String organName) {
		this.organName = organName;
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

	public String getDescr() {
		return descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getOrganType() {
		return organType;
	}

	public void setOrganType(String organType) {
		this.organType = organType;
	}

	public String getOrganLevel() {
		return organLevel;
	}

	public void setOrganLevel(String organLevel) {
		this.organLevel = organLevel;
	}
}
