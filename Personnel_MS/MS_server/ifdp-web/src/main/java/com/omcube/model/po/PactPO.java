package com.omcube.model.po;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 合同基础信息
 * @author Administrator
 *
 */
public class PactPO {
	private String uid;
	private String pactNo;
	private String paperPactNo;
	private String pactName;
	private String organNo;//公司id
	private String derpNo; //部门id
	private String userNo;
	private String custName;
	private String sex;
	private String cert;
	private String pactType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date signTime;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pactStartTime;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pactEndTime;
	private String pactStatus;
	private String pactExpires;//合同年限
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pactStopTime;//终止日期
	private String stopReason;//终止原因
	private String autoudFlag;//是否自动更新标志
	private String attachm;//附件
	private String remark;//备注
	private String createdBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;
	private String updatedBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedDate;
	private String isDelete;
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPactNo() {
		return pactNo;
	}
	public void setPactNo(String pactNo) {
		this.pactNo = pactNo;
	}
	public String getPaperPactNo() {
		return paperPactNo;
	}
	public void setPaperPactNo(String paperPactNo) {
		this.paperPactNo = paperPactNo;
	}
	public String getPactName() {
		return pactName;
	}
	public void setPactName(String pactName) {
		this.pactName = pactName;
	}
	public String getOrganNo() {
		return organNo;
	}
	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}
	public String getDerpNo() {
		return derpNo;
	}
	public void setDerpNo(String derpNo) {
		this.derpNo = derpNo;
	}
	public String getUserNo() {
		return userNo;
	}
	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getCert() {
		return cert;
	}
	public void setCert(String cert) {
		this.cert = cert;
	}
	public String getPactType() {
		return pactType;
	}
	public void setPactType(String pactType) {
		this.pactType = pactType;
	}
	public Date getSignTime() {
		return signTime;
	}
	public void setSignTime(Date signTime) {
		this.signTime = signTime;
	}
	public Date getPactStartTime() {
		return pactStartTime;
	}
	public void setPactStartTime(Date pactStartTime) {
		this.pactStartTime = pactStartTime;
	}
	public Date getPactEndTime() {
		return pactEndTime;
	}
	public void setPactEndTime(Date pactEndTime) {
		this.pactEndTime = pactEndTime;
	}
	public String getPactStatus() {
		return pactStatus;
	}
	public void setPactStatus(String pactStatus) {
		this.pactStatus = pactStatus;
	}
	public String getPactExpires() {
		return pactExpires;
	}
	public void setPactExpires(String pactExpires) {
		this.pactExpires = pactExpires;
	}
	public Date getPactStopTime() {
		return pactStopTime;
	}
	public void setPactStopTime(Date pactStopTime) {
		this.pactStopTime = pactStopTime;
	}
	public String getStopReason() {
		return stopReason;
	}
	public void setStopReason(String stopReason) {
		this.stopReason = stopReason;
	}
	public String getAutoudFlag() {
		return autoudFlag;
	}
	public void setAutoudFlag(String autoudFlag) {
		this.autoudFlag = autoudFlag;
	}
	public String getAttachm() {
		return attachm;
	}
	public void setAttachm(String attachm) {
		this.attachm = attachm;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getUpdatedDate() {
		return updatedDate;
	}
	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	
}
