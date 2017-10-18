package com.omcube.model.request;

public class UpdateUserInfoRequest {

    private String uid;//session 获取

    private String organCompanyNo;
    private String organDepartmentNo;

    private String roleNo;

    private String userNo;
    private String userName;
    private String certNo;
    private String mobile;
    private String email;
    private String status;
    private String remark;
    private String updatedBy;//session 获取

    public String getUid() {
	return uid;
    }

    public void setUid(String uid) {
	this.uid = uid;
    }

    public String getOrganCompanyNo() {
	return organCompanyNo;
    }

    public void setOrganCompanyNo(String organCompanyNo) {
	this.organCompanyNo = organCompanyNo;
    }

    public String getOrganDepartmentNo() {
	return organDepartmentNo;
    }

    public void setOrganDepartmentNo(String organDepartmentNo) {
	this.organDepartmentNo = organDepartmentNo;
    }

    public String getRoleNo() {
	return roleNo;
    }

    public void setRoleNo(String roleNo) {
	this.roleNo = roleNo;
    }

    public String getUserNo() {
	return userNo;
    }

    public void setUserNo(String userNo) {
	this.userNo = userNo;
    }

    public String getUserName() {
	return userName;
    }

    public void setUserName(String userName) {
	this.userName = userName;
    }

    public String getCertNo() {
	return certNo;
    }

    public void setCertNo(String certNo) {
	this.certNo = certNo;
    }

    public String getMobile() {
	return mobile;
    }

    public void setMobile(String mobile) {
	this.mobile = mobile;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public String getRemark() {
	return remark;
    }

    public void setRemark(String remark) {
	this.remark = remark;
    }

    public String getUpdatedBy() {
	return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
	this.updatedBy = updatedBy;
    }

    public String getStatus() {
	return status;
    }

    public void setStatus(String status) {
	this.status = status;
    }

    @Override
    public String toString() {
	return "UpdateUserInfoRequest [uid=" + uid + ", organCompanyNo=" + organCompanyNo + ", organDepartmentNo="
		+ organDepartmentNo + ", roleNo=" + roleNo + ", userNo=" + userNo + ", userName=" + userName
		+ ", certNo=" + certNo + ", mobile=" + mobile + ", email=" + email + ", status=" + status + ", remark="
		+ remark + ", updatedBy=" + updatedBy + "]";
    }

}
