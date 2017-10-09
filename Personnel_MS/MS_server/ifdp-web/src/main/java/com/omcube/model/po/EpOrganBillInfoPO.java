package com.omcube.model.po;

import java.util.Date;

public class EpOrganBillInfoPO {

	private String uId; // 租户id
	private String organNo; // 机构号
	private String organName; // 公司名称
	private String organTaxNo; // 纳税人编号
	private String organTel; // 电话
	private String organAcct; // 账号
	private String organAcctname;// 账户名称
	private String organAddr; // 地址
	private Date createdDate;
	private Date updatedDate;
	private String createdBy;
	private String updatedBy;

	public EpOrganBillInfoPO() {
		super();
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

	public String getOrganTaxNo() {
		return organTaxNo;
	}

	public void setOrganTaxNo(String organTaxNo) {
		this.organTaxNo = organTaxNo;
	}

	public String getOrganTel() {
		return organTel;
	}

	public void setOrganTel(String organTel) {
		this.organTel = organTel;
	}

	public String getOrganAcct() {
		return organAcct;
	}

	public void setOrganAcct(String organAcct) {
		this.organAcct = organAcct;
	}

	public String getOrganAcctname() {
		return organAcctname;
	}

	public void setOrganAcctname(String organAcctname) {
		this.organAcctname = organAcctname;
	}

	public String getOrganAddr() {
		return organAddr;
	}

	public void setOrganAddr(String organAddr) {
		this.organAddr = organAddr;
	}

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

}