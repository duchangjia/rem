package com.omcube.model.response;

import java.util.Date;

public class QueryUserInfoResponse {

    private String userNo;
    private String userName;
    private String certNo;
    private String mobile;
    private String email;
    private String userStatus;
    private String remark;
    private Date updatedDate;
    private String updatedBy;

    private String roleName;
    private String roleNo;

    private String organCompanyName;
    private String organCompanyNo;
    private String organDepartmentName;
    private String organDepartmentNo;

    public String getUserNo() {
	return userNo;
    }

    public void setUserNo(String userNo) {
	this.userNo = userNo;
    }

    public String getOrganCompanyName() {
	return organCompanyName;
    }

    public void setOrganCompanyName(String organCompanyName) {
	this.organCompanyName = organCompanyName;
    }

    public String getOrganCompanyNo() {
	return organCompanyNo;
    }

    public void setOrganCompanyNo(String organCompanyNo) {
	this.organCompanyNo = organCompanyNo;
    }

    public String getOrganDepartmentName() {
	return organDepartmentName;
    }

    public void setOrganDepartmentName(String organDepartmentName) {
	this.organDepartmentName = organDepartmentName;
    }

    public String getOrganDepartmentNo() {
	return organDepartmentNo;
    }

    public void setOrganDepartmentNo(String organDepartmentNo) {
	this.organDepartmentNo = organDepartmentNo;
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

    public String getRoleName() {
	return roleName;
    }

    public void setRoleName(String roleName) {
	this.roleName = roleName;
    }

    public String getRoleNo() {
	return roleNo;
    }

    public void setRoleNo(String roleNo) {
	this.roleNo = roleNo;
    }

    public String getUserStatus() {
	return userStatus;
    }

    public void setUserStatus(String userStatus) {
	this.userStatus = userStatus;
    }

    public String getRemark() {
	return remark;
    }

    public void setRemark(String remark) {
	this.remark = remark;
    }

    public Date getUpdatedDate() {
	return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
	this.updatedDate = updatedDate;
    }

    public String getUpdatedBy() {
	return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
	this.updatedBy = updatedBy;
    }

    public String getUserName() {
	return userName;
    }

    public void setUserName(String userName) {
	this.userName = userName;
    }

}
