package com.omcube.model.po;

import org.springframework.format.annotation.DateTimeFormat;

public class CustShifthis {
	private String uid;
	private String custNo;
	private String workhisId;
	private String shiftType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String shiftCameTime;
	private String oldOrgId;
	private String newOrgId;
	private String oldDeprtId;
	private String newDeprtId;
	private String oldLineManager;
	private String newLineManager;
	private String oldPost;
	private String newPost;
	private String oldClass;
	private String newClass;
	private String shiftReason;
	private String attachm;
	private String createdBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String createdDate;
	private String updatedBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String uodatedDate;
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getCustNo() {
		return custNo;
	}
	public void setCustNo(String custNo) {
		this.custNo = custNo;
	}
	public String getWorkhisId() {
		return workhisId;
	}
	public void setWorkhisId(String workhisId) {
		this.workhisId = workhisId;
	}
	public String getShiftType() {
		return shiftType;
	}
	public void setShiftType(String shiftType) {
		this.shiftType = shiftType;
	}
	public String getShiftCameTime() {
		return shiftCameTime;
	}
	public void setShiftCameTime(String shiftCameTime) {
		this.shiftCameTime = shiftCameTime;
	}
	public String getOldOrgId() {
		return oldOrgId;
	}
	public void setOldOrgId(String oldOrgId) {
		this.oldOrgId = oldOrgId;
	}
	public String getNewOrgId() {
		return newOrgId;
	}
	public void setNewOrgId(String newOrgId) {
		this.newOrgId = newOrgId;
	}
	public String getOldDeprtId() {
		return oldDeprtId;
	}
	public void setOldDeprtId(String oldDeprtId) {
		this.oldDeprtId = oldDeprtId;
	}
	public String getNewDeprtId() {
		return newDeprtId;
	}
	public void setNewDeprtId(String newDeprtId) {
		this.newDeprtId = newDeprtId;
	}
	public String getOldLineManager() {
		return oldLineManager;
	}
	public void setOldLineManager(String oldLineManager) {
		this.oldLineManager = oldLineManager;
	}
	public String getNewLineManager() {
		return newLineManager;
	}
	public void setNewLineManager(String newLineManager) {
		this.newLineManager = newLineManager;
	}
	public String getOldPost() {
		return oldPost;
	}
	public void setOldPost(String oldPost) {
		this.oldPost = oldPost;
	}
	public String getNewPost() {
		return newPost;
	}
	public void setNewPost(String newPost) {
		this.newPost = newPost;
	}
	public String getOldClass() {
		return oldClass;
	}
	public void setOldClass(String oldClass) {
		this.oldClass = oldClass;
	}
	public String getNewClass() {
		return newClass;
	}
	public void setNewClass(String newClass) {
		this.newClass = newClass;
	}
	public String getShiftReason() {
		return shiftReason;
	}
	public void setShiftReason(String shiftReason) {
		this.shiftReason = shiftReason;
	}
	public String getAttachm() {
		return attachm;
	}
	public void setAttachm(String attachm) {
		this.attachm = attachm;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getUodatedDate() {
		return uodatedDate;
	}
	public void setUodatedDate(String uodatedDate) {
		this.uodatedDate = uodatedDate;
	}
}
