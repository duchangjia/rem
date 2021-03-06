package com.omcube.model.request;

import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * 请假详情的查询的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class QueryLeaveRequest {

	private int pageNum; // 第几页
	private int pageSize; // 每页多少条
	private String uid; // 租户id 从session 中获取
	private String organNo; // 机构号(部门号)
	private String userNo; // 用户编号
	private String applyNo; // 请假编号

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date leaveStartTime; // 请假开始日期
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date leaveEndTime; // 请假结束日期

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getUserNo() {
		return userNo;
	}

	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}

	public String getApplyNo() {
		return applyNo;
	}

	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
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

}
