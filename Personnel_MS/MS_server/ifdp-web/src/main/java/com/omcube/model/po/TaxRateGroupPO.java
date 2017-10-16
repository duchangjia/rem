package com.omcube.model.po;

public class TaxRateGroupPO extends BasicPO{
    private String groupId;      //组ID
    private String groupNo;      //组名称
    private String startTime;    //生效时间
    private String endTime;      //失效时间
    private String remark;       //备注
    private String isDelete;     //是否删除

    public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	public String getGroupId() {
		return groupId;
	}
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	public String getGroupNo() {
		return groupNo;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public void setGroupNo(String groupNo) {
		this.groupNo = groupNo;
	}
	
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
}
