package com.omcube.model.po;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.omcube.parameter.verification.Money;

public class EpPayChageInfPO extends BasicPO {

	@NotBlank(message = "调薪编号不能为空")
	@Length(max = 15, message = "调薪编号最大长度15")
	private String applyNo;

	@NotBlank(message = "工号不能为空")
	@Length(max = 16, message = "工号最大长度16")
	private String userNo;

	@Money(message = "原基础工资精确到小数点后2位")
	private double oWagesBase;

	@Money(message = "原绩效工资精确到小数点后2位")
	private double oWagesPerf;

	@Money(message = "原岗位补贴精确到小数点后2位")
	private double oPostPension;

	@Money(message = "原其他补贴精确到小数点后2位")
	private double oOtherPension;

	@Money(message = "原养老保险基数精确到小数点后2位")
	private double oEndmBase;

	@Money(message = "原医疗保险基数精确到小数点后2位")
	private double oMediBase;

	@Money(message = "原失业保险基数精确到小数点后2位")
	private double oUnemBase;

	@Money(message = "原工伤保险基数精确到小数点后2位")
	private double oEmplBase;

	@Money(message = "原生育保险基数精确到小数点后2位")
	private double oMateBase;

	@Money(message = "原公积金基数精确到小数点后2位")
	private double oHouseBase;

	@NotBlank(message = "原保险缴纳标准不能为空")
	@Length(max = 15, message = "保险缴纳标准最大长度15")
	private String oWelcoeNo;

	@Money(message = "新基础工资精确到小数点后2位")
	private double nWagesBase;

	@Money(message = "新绩效工资精确到小数点后2位")
	private double nWagesPerf;

	@Money(message = "新岗位补贴精确到小数点后2位")
	private double nPostPension;

	@Money(message = "新其他补贴精确到小数点后2位")
	private double nOtherPension;

	@Money(message = "新养老保险基数精确到小数点后2位")
	private double nEndmBase;

	@Money(message = "新医疗保险基数精确到小数点后2位")
	private double nMediBase;

	@Money(message = "新失业保险基数精确到小数点后2位")
	private double nUnemBase;

	@Money(message = "新工伤保险基数精确到小数点后2位")
	private double nEmplBase;

	@Money(message = "新生育保险基数精确到小数点后2位")
	private double nMateBase;

	@Money(message = "新公积金基数精确到小数点后2位")
	private double nHouseBase;

	@NotBlank(message = "新保险缴纳标准不能为空")
	@Length(max = 15, message = "新保险缴纳标准最大长度15")
	private String nWelcoeNo;

	@Length(max = 2, message = "是否跟新到薪酬最大长度2")
	private String updFlag;

	@Length(max = 20, message = "审批流水号最大长度20")
	private String authFlow;

	@Length(max = 2, message = "审批状态最大长度2")
	private String authStatus;

	@Length(max = 2, message = "状态最大长度20")
	private String chageStatus;

	@Length(max = 2000, message = "调薪信息备注最大长度2000")
	private String remark;

	public String getChageStatus() {
		return chageStatus;
	}
	public void setChageStatus(String chageStatus) {
		this.chageStatus = chageStatus;
	}
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
	public double getoWagesBase() {
		return oWagesBase;
	}
	public void setoWagesBase(double oWagesBase) {
		this.oWagesBase = oWagesBase;
	}
	public double getoWagesPerf() {
		return oWagesPerf;
	}
	public void setoWagesPerf(double oWagesPerf) {
		this.oWagesPerf = oWagesPerf;
	}
	public double getoPostPension() {
		return oPostPension;
	}
	public void setoPostPension(double oPostPension) {
		this.oPostPension = oPostPension;
	}
	public double getoOtherPension() {
		return oOtherPension;
	}
	public void setoOtherPension(double oOtherPension) {
		this.oOtherPension = oOtherPension;
	}
	public double getoEndmBase() {
		return oEndmBase;
	}
	public void setoEndmBase(double oEndmBase) {
		this.oEndmBase = oEndmBase;
	}
	public double getoMediBase() {
		return oMediBase;
	}
	public void setoMediBase(double oMediBase) {
		this.oMediBase = oMediBase;
	}
	public double getoUnemBase() {
		return oUnemBase;
	}
	public void setoUnemBase(double oUnemBase) {
		this.oUnemBase = oUnemBase;
	}
	public double getoEmplBase() {
		return oEmplBase;
	}
	public void setoEmplBase(double oEmplBase) {
		this.oEmplBase = oEmplBase;
	}
	public double getoMateBase() {
		return oMateBase;
	}
	public void setoMateBase(double oMateBase) {
		this.oMateBase = oMateBase;
	}
	public double getoHouseBase() {
		return oHouseBase;
	}
	public void setoHouseBase(double oHouseBase) {
		this.oHouseBase = oHouseBase;
	}
	public String getoWelcoeNo() {
		return oWelcoeNo;
	}
	public void setoWelcoeNo(String oWelcoeNo) {
		this.oWelcoeNo = oWelcoeNo;
	}
	public double getnWagesBase() {
		return nWagesBase;
	}
	public void setnWagesBase(double nWagesBase) {
		this.nWagesBase = nWagesBase;
	}
	public double getnWagesPerf() {
		return nWagesPerf;
	}
	public void setnWagesPerf(double nWagesPerf) {
		this.nWagesPerf = nWagesPerf;
	}
	public double getnPostPension() {
		return nPostPension;
	}
	public void setnPostPension(double nPostPension) {
		this.nPostPension = nPostPension;
	}
	public double getnOtherPension() {
		return nOtherPension;
	}
	public void setnOtherPension(double nOtherPension) {
		this.nOtherPension = nOtherPension;
	}
	public double getnEndmBase() {
		return nEndmBase;
	}
	public void setnEndmBase(double nEndmBase) {
		this.nEndmBase = nEndmBase;
	}
	public double getnMediBase() {
		return nMediBase;
	}
	public void setnMediBase(double nMediBase) {
		this.nMediBase = nMediBase;
	}
	public double getnUnemBase() {
		return nUnemBase;
	}
	public void setnUnemBase(double nUnemBase) {
		this.nUnemBase = nUnemBase;
	}
	public double getnEmplBase() {
		return nEmplBase;
	}
	public void setnEmplBase(double nEmplBase) {
		this.nEmplBase = nEmplBase;
	}
	public double getnMateBase() {
		return nMateBase;
	}
	public void setnMateBase(double nMateBase) {
		this.nMateBase = nMateBase;
	}
	public double getnHouseBase() {
		return nHouseBase;
	}
	public void setnHouseBase(double nHouseBase) {
		this.nHouseBase = nHouseBase;
	}
	public String getnWelcoeNo() {
		return nWelcoeNo;
	}
	public void setnWelcoeNo(String nWelcoeNo) {
		this.nWelcoeNo = nWelcoeNo;
	}
	public String getUpdFlag() {
		return updFlag;
	}
	public void setUpdFlag(String updFlag) {
		this.updFlag = updFlag;
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
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

}
