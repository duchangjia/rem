package com.omcube.model.po;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 请假详情管理的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class EPLeaveInfoPO extends BasicPO {

	private String applyNo; // 请假的详情的编号
	private String userNo; // 员工的编号
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date leaveStartTime; // 请假开始的时间
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date leaveEndTime; // 请假结束的时间
	private String leaveType; // 请假的类型
	private double timeSheet; // 请假的工时
	private String authFlow; // 审批流水号
	private String authStatus; // 审批的状态
	private String authView; // 审批意见
	private String attachm; // 附件
	private String remark; // 描述

	public String getApplyNo() {
		return applyNo;
	}

	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}

	public String getUserNo() {
		return userNo;
	}

	public void setUserNo(String userNo) {
		this.userNo = userNo;
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

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public double getTimeSheet() {
		return timeSheet;
	}

	public void setTimeSheet(double timeSheet) {
		this.timeSheet = timeSheet;
	}

	public String getAuthFlow() {
		return authFlow;
	}

	public void setAuthFlow(String authFlow) {
		this.authFlow = authFlow;
	}

	public String getAuthStatus() {
		return authStatus;
	}

	public void setAuthStatus(String authStatus) {
		this.authStatus = authStatus;
	}

	public String getAuthView() {
		return authView;
	}

	public void setAuthView(String authView) {
		this.authView = authView;
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

}
