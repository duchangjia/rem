package com.omcube.model.request;

public class QueryVisaFreeHolidayRequest {
	
	private int pageNum;//第几页
	
    private int pageSize;//每页多少条
	
	private String uid;
	// 开始日期
	private String startDate;
	// 结束日期
	private String endDate;
	// 类型
	private String dayFlag;
	
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
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getDayFlag() {
		return dayFlag;
	}
	public void setDayFlag(String dayFlag) {
		this.dayFlag = dayFlag;
	}

}
