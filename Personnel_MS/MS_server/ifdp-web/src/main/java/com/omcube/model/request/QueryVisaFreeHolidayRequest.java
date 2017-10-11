package com.omcube.model.request;

public class QueryVisaFreeHolidayRequest {

	private String uid;
	// 开始日期
	private String startDate;
	// 结束日期
	private String endDate;
	// 类型
	private String dayFlag;
	public QueryVisaFreeHolidayRequest() {
	}
	public QueryVisaFreeHolidayRequest(String uid, String startDate,
			String endDate, String dayFlag) {
		this.uid = uid;
		this.startDate = startDate;
		this.endDate = endDate;
		this.dayFlag = dayFlag;
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
