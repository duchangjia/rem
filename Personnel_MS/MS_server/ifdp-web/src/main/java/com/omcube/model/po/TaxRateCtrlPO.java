package com.omcube.model.po;

import java.math.BigDecimal;

public class TaxRateCtrlPO extends BasicPO{
    private String     groupId;         //组id
    private String     applyNo;         //编号
    private String     remark;          //备注
    private BigDecimal groupLimit;      //上限
    private BigDecimal groupLowerLimit; //下限
    private BigDecimal percentRate;     //百分比率
    private BigDecimal quickCal;        //速算扣除数
    private String     isDelete;        //是否删除
    
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
	public String getApplyNo() {
		return applyNo;
	}
	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public BigDecimal getGroupLimit() {
		return groupLimit;
	}
	public void setGroupLimit(BigDecimal groupLimit) {
		this.groupLimit = groupLimit;
	}
	public BigDecimal getGroupLowerLimit() {
		return groupLowerLimit;
	}
	public void setGroupLowerLimit(BigDecimal groupLowerLimit) {
		this.groupLowerLimit = groupLowerLimit;
	}
	public BigDecimal getPercentRate() {
		return percentRate;
	}
	public void setPercentRate(BigDecimal percentRate) {
		this.percentRate = percentRate;
	}
	public BigDecimal getQuickCal() {
		return quickCal;
	}
	public void setQuickCal(BigDecimal quickCal) {
		this.quickCal = quickCal;
	}    
}
