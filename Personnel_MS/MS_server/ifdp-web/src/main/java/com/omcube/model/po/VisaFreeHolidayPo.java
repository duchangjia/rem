package com.omcube.model.po;


public class VisaFreeHolidayPo extends BasicPO {
	
	// 节假日期
	private String dayDate;
	// 节假日类型
	private String dayFlag;
	// 备注
	private String remark;

	public VisaFreeHolidayPo() {

	}

	public String getDayDate() {
		return dayDate;
	}

	public void setDayDate(String dayDate) {
		this.dayDate = dayDate;
	}

	public String getDayFlag() {
		return dayFlag;
	}

	public void setDayFlag(String dayFlag) {
		this.dayFlag = dayFlag;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}


}
