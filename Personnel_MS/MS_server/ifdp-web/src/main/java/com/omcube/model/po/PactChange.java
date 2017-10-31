package com.omcube.model.po;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 合同变更
 * 
 * @author Administrator
 *
 */
public class PactChange {
	private String uid;
	private String pactNo;
	private String changeId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date changeTime;
	private String changeType;
	private String changeContent;// 变更内容
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

	public String getChangeId() {
		return changeId;
	}

	public void setChangeId(String changeId) {
		this.changeId = changeId;
	}

	public Date getChangeTime() {
		return changeTime;
	}

	public void setChangeTime(Date changeTime) {
		this.changeTime = changeTime;
	}

	public String getChangeType() {
		return changeType;
	}

	public void setChangeType(String changeType) {
		this.changeType = changeType;
	}

	public String getChangeContent() {
		return changeContent;
	}

	public void setChangeContent(String changeContent) {
		this.changeContent = changeContent;
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

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
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

}
