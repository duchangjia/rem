package com.omcube.model.po;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 合同续签
 * @author Administrator
 *
 */
public class PactRenew {
	private String uid;
	private String pactNo;
	private String renewId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date renewTime;
	private String renewType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date renewCameTime;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date renewLostTime;
	private String renewContent;
	private String attachm;
	private String remark;
	private String createdBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;
	private String updatedBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedDate;
	private String isDelete;
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
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
	public String getRenewId() {
		return renewId;
	}
	public void setRenewId(String renewId) {
		this.renewId = renewId;
	}
	public Date getRenewTime() {
		return renewTime;
	}
	public void setRenewTime(Date renewTime) {
		this.renewTime = renewTime;
	}
	public String getRenewType() {
		return renewType;
	}
	public void setRenewType(String renewType) {
		this.renewType = renewType;
	}
	public Date getRenewCameTime() {
		return renewCameTime;
	}
	public void setRenewCameTime(Date renewCameTime) {
		this.renewCameTime = renewCameTime;
	}
	public Date getRenewLostTime() {
		return renewLostTime;
	}
	public void setRenewLostTime(Date renewLostTime) {
		this.renewLostTime = renewLostTime;
	}
	public String getRenewContent() {
		return renewContent;
	}
	public void setRenewContent(String renewContent) {
		this.renewContent = renewContent;
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
	
}
