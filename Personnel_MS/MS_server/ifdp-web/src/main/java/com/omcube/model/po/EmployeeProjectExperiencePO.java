package com.omcube.model.po;

import java.util.Date;

public class EmployeeProjectExperiencePO extends BasicPO {
	//用户编号
	private String userNo;
	//序号
	private String projectId;
	// 开始时间
	private Date startTime;
	// 结束时间
	private Date endTime;
	// 项目名称
	private String projectName;
	// 主要技能
	private String mainSkill;
	// 项目角色
	private String projectRole;
	// 软件环境
	private String softEnv;
	// 客户
	private String custom;
	// 项目职责
	private String projectDuty;
	// 项目描述
	private String desc;
	
	public EmployeeProjectExperiencePO() {
	}
	
	public String getUserNo() {
		return userNo;
	}

	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getMainSkill() {
		return mainSkill;
	}
	public void setMainSkill(String mainSkill) {
		this.mainSkill = mainSkill;
	}
	public String getProjectRole() {
		return projectRole;
	}
	public void setProjectRole(String projectRole) {
		this.projectRole = projectRole;
	}
	public String getSoftEnv() {
		return softEnv;
	}
	public void setSoftEnv(String softEnv) {
		this.softEnv = softEnv;
	}
	public String getCustom() {
		return custom;
	}
	public void setCustom(String custom) {
		this.custom = custom;
	}
	public String getProjectDuty() {
		return projectDuty;
	}
	public void setProjectDuty(String projectDuty) {
		this.projectDuty = projectDuty;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

}
