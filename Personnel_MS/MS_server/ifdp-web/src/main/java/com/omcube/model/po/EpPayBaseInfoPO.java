package com.omcube.model.po;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import com.omcube.util.ConstantUtil;

public class EpPayBaseInfoPO extends BasicPO {

    @NotEmpty(message = "工号不能为空")
    @Length(max = 16, message = "工号最大长度16")
    private String userNo;

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "基础工资最大精度到小数点后2位")
    private double WagesBase; //基础工资

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "绩效工资最大精度到小数点后2位")
    private double WagesPerf;//绩效工资

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "岗位补贴最大精度到小数点后2位")
    private double PostPension;//岗位补贴

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "其他补贴最大精度到小数点后2位")
    private double OtherPension;//其他补贴

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "养老保险基数最大精度到小数点后2位")
    private double EndmBase;//养老保险基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "医疗保险基数最大精度到小数点后2位")
    private double MediBase;//医疗保险基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "失业保险基数最大精度到小数点后2位")
    private double UnemBase;//失业保险基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "工伤保险基数最大精度到小数点后2位")
    private double EmplBase;//工伤保险基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "生育保险基数最大精度到小数点后2位")
    private double MatlBase;//生育保险基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "公积金基数最大精度到小数点后2位")
    private double HouseBase;//公积金基数

    @Pattern(regexp = ConstantUtil.MONEY_REG, message = "试用期比例最大精度到小数点后2位")
    private double ProbRatio;//试用期比例

    @NotEmpty(message = "保险缴纳标准不能为空")
    @Length(max = 15, message = "保险缴纳标准最大长度15")
    private String WelcoeNo;//保险缴纳标准模板Id

    @Length(max = 2000, message = "薪酬福利信息备注最大长度2000")
    private String remark;//基本工资超职级限制必须填备注

    public String getUserNo() {
	return userNo;
    }

    public void setUserNo(String userNo) {
	this.userNo = userNo;
    }

    public double getWagesBase() {
	return WagesBase;
    }

    public void setWagesBase(double wagesBase) {
	WagesBase = wagesBase;
    }

    public double getWagesPerf() {
	return WagesPerf;
    }

    public void setWagesPerf(double wagesPerf) {
	WagesPerf = wagesPerf;
    }

    public double getPostPension() {
	return PostPension;
    }

    public void setPostPension(double postPension) {
	PostPension = postPension;
    }

    public double getOtherPension() {
	return OtherPension;
    }

    public void setOtherPension(double otherPension) {
	OtherPension = otherPension;
    }

    public double getEndmBase() {
	return EndmBase;
    }

    public void setEndmBase(double endmBase) {
	EndmBase = endmBase;
    }

    public double getMediBase() {
	return MediBase;
    }

    public void setMediBase(double mediBase) {
	MediBase = mediBase;
    }

    public double getUnemBase() {
	return UnemBase;
    }

    public void setUnemBase(double unemBase) {
	UnemBase = unemBase;
    }

    public double getEmplBase() {
	return EmplBase;
    }

    public void setEmplBase(double emplBase) {
	EmplBase = emplBase;
    }

    public double getMatlBase() {
	return MatlBase;
    }

    public void setMatlBase(double matlBase) {
	MatlBase = matlBase;
    }

    public double getHouseBase() {
	return HouseBase;
    }

    public void setHouseBase(double houseBase) {
	HouseBase = houseBase;
    }

    public double getProbRatio() {
	return ProbRatio;
    }

    public void setProbRatio(double probRatio) {
	ProbRatio = probRatio;
    }

    public String getWelcoeNo() {
	return WelcoeNo;
    }

    public void setWelcoeNo(String welcoeNo) {
	WelcoeNo = welcoeNo;
    }

    public String getRemark() {
	return remark;
    }

    public void setRemark(String remark) {
	this.remark = remark;
    }

}
