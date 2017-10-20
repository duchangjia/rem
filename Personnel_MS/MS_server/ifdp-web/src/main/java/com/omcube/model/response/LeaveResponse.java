package com.omcube.model.response;

import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import com.omcube.model.po.BasicPO;

/**
 * 请假的管理的响应实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class LeaveResponse extends BasicPO {

	private String applyNo; // 请假编号
	private String organNo; // 公司编号
	private String deptNo; // 部门编号
	private String companyName; // 公司名称
	private String deptName; // 部门名称
	private String userNo; // 工号
	private String custName; // 姓名
	private String custPost; // 岗位
	private String custClass; // 职级
	private String leaveType; // 请假类型
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date leaveStartTime; // 请假开始时间
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date leaveEndTime; // 请假结束时间
	private double timeSheet; // 请假工时
	private String remark; // 备注
	private String attachm; // 附件
	private MultipartFile file; // 文件的上传

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public String getApplyNo() {
		return applyNo;
	}

	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}

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

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public Date getLeaveStartTime() {
		return leaveStartTime;
	}

	public void setLeaveStartTime(Date leaveStartTime) {
		this.leaveStartTime = leaveStartTime;
	}

	public Date getLeaveEndTime() {
		return leaveEndTime;
	}

	public void setLeaveEndTime(Date leaveEndTime) {
		this.leaveEndTime = leaveEndTime;
	}

	public double getTimeSheet() {
		return timeSheet;
	}

	public void setTimeSheet(double timeSheet) {
		this.timeSheet = timeSheet;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getAttachm() {
		return attachm;
	}

	public void setAttachm(String attachm) {
		this.attachm = attachm;
	}

}
