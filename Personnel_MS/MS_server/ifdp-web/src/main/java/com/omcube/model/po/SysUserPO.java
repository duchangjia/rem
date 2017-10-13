package com.omcube.model.po;

import java.util.List;

public class SysUserPO extends BasicPO {
	private String userNo; 
	private String userName; 
	private String certNo;
	private String mobileTEL;
	private String email;
	private String organNo;// 所属机构
	private String password;
	private String pwdLevel;
	private String remark;
	private List<SysRolePO> roles;

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

	public String getMobileTEL() {
		return mobileTEL;
	}

	public void setMobileTEL(String mobileTEL) {
		this.mobileTEL = mobileTEL;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPwdLevel() {
		return pwdLevel;
	}

	public void setPwdLevel(String pwdLevel) {
		this.pwdLevel = pwdLevel;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public List<SysRolePO> getRoles() {
		return roles;
	}

	public void setRoles(List<SysRolePO> roles) {
		this.roles = roles;
	}

}
