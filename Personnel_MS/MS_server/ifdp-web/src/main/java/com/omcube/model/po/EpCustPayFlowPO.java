package com.omcube.model.po;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.omcube.parameter.verification.Money;

public class EpCustPayFlowPO extends BasicPO {

	@NotBlank(message = "组编号不能为空")
	@Length(max = 15, message = "组编号最大长度15")
	private String grpNo;

	@NotBlank(message = "工号不能为空")
	@Length(max = 16, message = "工号最大长度16")
	private String userNo;

	@Money(message = "基础工资精确到小数点后2位")
	private double wagesBase;

	@Money(message = "绩效工资精确到小数点后2位")
	private double wagesPerf;

	@Money(message = "岗位补贴精确到小数点后2位")
	private double postPension;

	@Money(message = "其他补贴精确到小数点后2位")
	private double otherPension;

	@Money(message = "养老保险基数精确到小数点后2位")
	private double endmBase;

	@Money(message = "医疗保险基数精确到小数点后2位")
	private double mediBase;

	@Money(message = "失业保险基数精确到小数点后2位")
	private double unemBase;

	@Money(message = "工伤保险基数精确到小数点后2位")
	private double emplBase;

	@Money(message = "生育保险基数精确到小数点后2位")
	private double mateBase;

	@Money(message = "公积金基数精确到小数点后2位")
	private double houseBase;

	@NotBlank(message = "保险缴纳标准不能为空")
	@Length(max = 15, message = "保险缴纳标准最大长度15")
	private String welcoeNo;

	@Money(message = "个人实际缴纳养老保险精确到小数点后2位")
	private double perEndmPay;

	@Money(message = "个人实际缴纳医疗保险精确到小数点后2位")
	private double perMediPay;

	@Money(message = "个人实际缴纳失业保险精确到小数点后2位")
	private double perUnemPay;

	@Money(message = "个人实际缴纳工伤保险精确到小数点后2位")
	private double perEmplPay;

	@Money(message = "个人实际缴纳生育保险精确到小数点后2位")
	private double perMatePay;

	@Money(message = "个人实际缴纳公积金精确到小数点后2位")
	private double perHousePay;

	@Money(message = "公司实际缴纳养老保险精确到小数点后2位")
	private double comEndmPay;

	@Money(message = "公司实际缴纳医疗保险精确到小数点后2位")
	private double comMediPay;

	@Money(message = "公司实际缴纳失业保险精确到小数点后2位")
	private double comUnemPay;

	@Money(message = "公司实际缴纳工伤保险精确到小数点后2位")
	private double comEmplPay;

	@Money(message = "公司实际缴纳生育保险精确到小数点后2位")
	private double comMatePay;

	@Money(message = "公司实际缴纳公积金精确到小数点后2位")
	private double comHousePay;

	@Money(message = "当月扣款金额精确到小数点后2位")
	private double payCut;

	@Money(message = "当月奖金金额精确到小数点后2位")
	private double payBonus;

	@Money(message = "当月调整金额精确到小数点后2位")
	private double payAdjust;

	@Money(message = "扣税部分金额精确到小数点后2位")
	private double payTax;

	@Money(message = "合计（扣税前）金额精确到小数点后2位")
	private double pretaxTotal;

	@Money(message = "实发金额精确到小数点后2位")
	private double realHair;

	@Length(max = 2, message = "状态最大长度2")
	private String payStatus;

	@Length(max = 2000, message = "备注最大长度2000")
	private String remark;

	public String getGrpNo() {
		return grpNo;
	}
	public void setGrpNo(String grpNo) {
		this.grpNo = grpNo;
	}
	public String getUserNo() {
		return userNo;
	}
	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}
	public double getWagesBase() {
		return wagesBase;
	}
	public void setWagesBase(double wagesBase) {
		this.wagesBase = wagesBase;
	}
	public double getWagesPerf() {
		return wagesPerf;
	}
	public void setWagesPerf(double wagesPerf) {
		this.wagesPerf = wagesPerf;
	}
	public double getPostPension() {
		return postPension;
	}
	public void setPostPension(double postPension) {
		this.postPension = postPension;
	}
	public double getOtherPension() {
		return otherPension;
	}
	public void setOtherPension(double otherPension) {
		this.otherPension = otherPension;
	}
	public double getEndmBase() {
		return endmBase;
	}
	public void setEndmBase(double endmBase) {
		this.endmBase = endmBase;
	}
	public double getMediBase() {
		return mediBase;
	}
	public void setMediBase(double mediBase) {
		this.mediBase = mediBase;
	}
	public double getUnemBase() {
		return unemBase;
	}
	public void setUnemBase(double unemBase) {
		this.unemBase = unemBase;
	}
	public double getEmplBase() {
		return emplBase;
	}
	public void setEmplBase(double emplBase) {
		this.emplBase = emplBase;
	}
	public double getMateBase() {
		return mateBase;
	}
	public void setMateBase(double mateBase) {
		this.mateBase = mateBase;
	}
	public double getHouseBase() {
		return houseBase;
	}
	public void setHouseBase(double houseBase) {
		this.houseBase = houseBase;
	}
	public String getWelcoeNo() {
		return welcoeNo;
	}
	public void setWelcoeNo(String welcoeNo) {
		this.welcoeNo = welcoeNo;
	}
	public double getPerEndmPay() {
		return perEndmPay;
	}
	public void setPerEndmPay(double perEndmPay) {
		this.perEndmPay = perEndmPay;
	}
	public double getPerMediPay() {
		return perMediPay;
	}
	public void setPerMediPay(double perMediPay) {
		this.perMediPay = perMediPay;
	}
	public double getPerUnemPay() {
		return perUnemPay;
	}
	public void setPerUnemPay(double perUnemPay) {
		this.perUnemPay = perUnemPay;
	}
	public double getPerEmplPay() {
		return perEmplPay;
	}
	public void setPerEmplPay(double perEmplPay) {
		this.perEmplPay = perEmplPay;
	}
	public double getPerMatePay() {
		return perMatePay;
	}
	public void setPerMatePay(double perMatePay) {
		this.perMatePay = perMatePay;
	}
	public double getPerHousePay() {
		return perHousePay;
	}
	public void setPerHousePay(double perHousePay) {
		this.perHousePay = perHousePay;
	}
	public double getComEndmPay() {
		return comEndmPay;
	}
	public void setComEndmPay(double comEndmPay) {
		this.comEndmPay = comEndmPay;
	}
	public double getComMediPay() {
		return comMediPay;
	}
	public void setComMediPay(double comMediPay) {
		this.comMediPay = comMediPay;
	}
	public double getComUnemPay() {
		return comUnemPay;
	}
	public void setComUnemPay(double comUnemPay) {
		this.comUnemPay = comUnemPay;
	}
	public double getComEmplPay() {
		return comEmplPay;
	}
	public void setComEmplPay(double comEmplPay) {
		this.comEmplPay = comEmplPay;
	}
	public double getComMatePay() {
		return comMatePay;
	}
	public void setComMatePay(double comMatePay) {
		this.comMatePay = comMatePay;
	}
	public double getComHousePay() {
		return comHousePay;
	}
	public void setComHousePay(double comHousePay) {
		this.comHousePay = comHousePay;
	}
	public double getPayCut() {
		return payCut;
	}
	public void setPayCut(double payCut) {
		this.payCut = payCut;
	}
	public double getPayBonus() {
		return payBonus;
	}
	public void setPayBonus(double payBonus) {
		this.payBonus = payBonus;
	}
	public double getPayAdjust() {
		return payAdjust;
	}
	public void setPayAdjust(double payAdjust) {
		this.payAdjust = payAdjust;
	}
	public double getPayTax() {
		return payTax;
	}
	public void setPayTax(double payTax) {
		this.payTax = payTax;
	}
	public double getPretaxTotal() {
		return pretaxTotal;
	}
	public void setPretaxTotal(double pretaxTotal) {
		this.pretaxTotal = pretaxTotal;
	}
	public double getRealHair() {
		return realHair;
	}
	public void setRealHair(double realHair) {
		this.realHair = realHair;
	}
	public String getPayStatus() {
		return payStatus;
	}
	public void setPayStatus(String payStatus) {
		this.payStatus = payStatus;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

}
