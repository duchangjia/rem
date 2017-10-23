package com.omcube.model.response;

import com.omcube.model.po.EPLeaveInfoPO;

/**
 * 请假的管理的响应实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class LeaveResponse extends EPLeaveInfoPO {

	private String organNo; // 公司编号
	private String deptNo; // 部门编号
	private String companyName; // 公司名称
	private String deptName; // 部门名称
	private String userNo; // 工号
	private String custName; // 姓名
	private String custPost; // 岗位
	private String custClass; // 职级

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(String deptNo) {
		this.deptNo = deptNo;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
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

	public String getCustPost() {
		return custPost;
	}

	public void setCustPost(String custPost) {
		this.custPost = custPost;
	}

	public String getCustClass() {
		return custClass;
	}

	public void setCustClass(String custClass) {
		this.custClass = custClass;
	}

}
