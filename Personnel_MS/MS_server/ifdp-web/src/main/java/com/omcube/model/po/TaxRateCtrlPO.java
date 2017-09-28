package com.omcube.model.po;

import java.math.BigDecimal;

public class TaxRateCtrlPO extends BasicPO{
	private String     groupId;
    private String     applyNo;
    private String     remark;
    private BigDecimal groupLimit;
    private BigDecimal groupLowerLimit;
    private BigDecimal percentRate;
    private BigDecimal quickCal;
    
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
