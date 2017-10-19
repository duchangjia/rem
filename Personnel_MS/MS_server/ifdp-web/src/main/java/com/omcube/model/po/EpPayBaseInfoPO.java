package com.omcube.model.po;

/**
 * 薪酬基本信息表
 * 别更改字段顺序
 */
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.omcube.parameter.verification.Money;
import com.omcube.parameter.verification.Scale;

public class EpPayBaseInfoPO extends BasicPO {

    @NotBlank(message = "工号不能为空")
    @Length(max = 16, message = "工号最大长度16")
    private String userNo;
    
    @Money(allowZero = false,message = "基础工资精确到小数点后2位，且不能为0")
    private double wagesBase; //基础工资

    @Money(message = "绩效工资精确到小数点后2位")
    private double wagesPerf;//绩效工资

    @Money(message = "岗位补贴精确到小数点后2位")
    private double postPension;//岗位补贴

    @Money(message = "其他补贴精确到小数点后2位")
    private double otherPension;//其他补贴

    @Money(message = "养老保险基数精确到小数点后2位")
    private double endmBase;//养老保险基数

    @Money(message = "医疗保险基数精确到小数点后2位")
    private double mediBase;//医疗保险基数

    @Money(message = "失业保险基数精确到小数点后2位")
    private double unemBase;//失业保险基数

    @Money(message = "工伤保险基数精确到小数点后2位")
    private double emplBase;//工伤保险基数

    @Money(message = "生育保险基数精确到小数点后2位")
    private double mateBase;//生育保险基数

    @Money(message = "公积金基数精确到小数点后2位")
    private double houseBase;//公积金基数
    
    @Scale(message = "试用期比例精确到小数点后2位，且大于0，小于等于1")
    private double probRatio;//试用期比例

    @NotBlank(message = "保险缴纳标准不能为空")
    @Length(max = 15, message = "保险缴纳标准最大长度15")
    private String welcoeNo;//保险缴纳标准模板Id

    @Length(max = 2000, message = "薪酬福利信息备注最大长度2000")
    private String remark;//基本工资超职级限制必须填备注

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

    public double getProbRatio() {
        return probRatio;
    }

    public void setProbRatio(double probRatio) {
        this.probRatio = probRatio;
    }

    public String getWelcoeNo() {
        return welcoeNo;
    }

    public void setWelcoeNo(String welcoeNo) {
        this.welcoeNo = welcoeNo;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
    
}
