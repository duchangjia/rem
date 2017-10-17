package com.omcube.model.po;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 合同续签
 * @author Administrator
 *
 */
public class PactRenew {
	private String uId;
	private String pactNo;
	private String renewId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String renewTime;
	private String renewType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String renewCameTime;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String renewLostTime;
	private String renewContent;
	private String attachm;
	private String remark;
	private String createdBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String createdDate;
	private String updatedBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String updatedDate;
	private String isDelete;
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	public String getuId() {
		return uId;
	}
	public void setuId(String uId) {
		this.uId = uId;
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
	public String getRenewTime() {
		return renewTime;
	}
	public void setRenewTime(String renewTime) {
		this.renewTime = renewTime;
	}
	public String getRenewType() {
		return renewType;
	}
	public void setRenewType(String renewType) {
		this.renewType = renewType;
	}
	public String getRenewCameTime() {
		return renewCameTime;
	}
	public void setRenewCameTime(String renewCameTime) {
		this.renewCameTime = renewCameTime;
	}
	public String getRenewLostTime() {
		return renewLostTime;
	}
	public void setRenewLostTime(String renewLostTime) {
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
	public String getCreateString() {
		return createdDate;
	}
	public void setCreateString(String createString) {
		this.createdDate = createString;
	}
	public String getupdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getUpdatedDate() {
		return updatedDate;
	}
	public void setUpStringdString(String updatedDate) {
		this.updatedDate = updatedDate;
	}
	
}
