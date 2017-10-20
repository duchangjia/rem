package com.omcube.model.response;

import java.math.BigDecimal;
import java.util.Date;
import com.omcube.model.po.BasicPO;

public class TravelResponse extends BasicPO {

    private String applyNo; //出差编号
    private String organNo;//公司编号
    private String deptNo;//部门编号
    private String companyName;//公司名称
    private String deptName;//部门名称
    private String userNo;//工号
    private String custName;//姓名
    private String custPost;//岗位
    private String custClass;//职级
    private String travelType;//出差类型
    private Date travelStartTime;//出差开始时间	
    private Date travelEndTime; //出差结束时间
    private String travelStartCity;//出差开始城市	
    private String travelArrivalCity;//出差到达城市
    private String travelDays; //出差天数  
    private BigDecimal travelSTD;//差补标准
    private String remark;//备注
    private String attachm;//附件	

    public String getApplyNo() {
	return applyNo;
    }

    public void setApplyNo(String applyNo) {
	this.applyNo = applyNo;
    }

    public String getOrganNo() {
	return organNo;
    }

    public void setOrganNo(String organNo) {
	this.organNo = organNo;
    }

    public String getDeptNo() {
	return deptNo;
    }

    public void setDeptNo(String deptNo) {
	this.deptNo = deptNo;
    }

    public String getCompanyName() {
	return companyName;
    }

    public void setCompanyName(String companyName) {
	this.companyName = companyName;
    }

    public String getDeptName() {
	return deptName;
    }

    public void setDeptName(String deptName) {
	this.deptName = deptName;
    }

    public String getUserNo() {
	return userNo;
    }

    public void setUserNo(String userNo) {
	this.userNo = userNo;
    }

    public String getCustName() {
	return custName;
    }

    public void setCustName(String custName) {
	this.custName = custName;
    }

    public String getCustPost() {
	return custPost;
    }

    public void setCustPost(String custPost) {
	this.custPost = custPost;
    }

    public String getCustClass() {
	return custClass;
    }

    public void setCustClass(String custClass) {
	this.custClass = custClass;
    }

    public String getTravelType() {
	return travelType;
    }

    public void setTravelType(String travelType) {
	this.travelType = travelType;
    }

    public Date getTravelStartTime() {
	return travelStartTime;
    }

    public void setTravelStartTime(Date travelStartTime) {
	this.travelStartTime = travelStartTime;
    }

    public Date getTravelEndTime() {
	return travelEndTime;
    }

    public void setTravelEndTime(Date travelEndTime) {
	this.travelEndTime = travelEndTime;
    }

    public String getTravelStartCity() {
	return travelStartCity;
    }

    public void setTravelStartCity(String travelStartCity) {
	this.travelStartCity = travelStartCity;
    }

    public String getTravelArrivalCity() {
	return travelArrivalCity;
    }

    public void setTravelArrivalCity(String travelArrivalCity) {
	this.travelArrivalCity = travelArrivalCity;
    }

    public String getTravelDays() {
	return travelDays;
    }

    public void setTravelDays(String travelDays) {
	this.travelDays = travelDays;
    }

    public BigDecimal getTravelSTD() {
	return travelSTD;
    }

    public void setTravelSTD(BigDecimal travelSTD) {
	this.travelSTD = travelSTD;
    }

    public String getRemark() {
	return remark;
    }

    public void setRemark(String remark) {
	this.remark = remark;
    }

    public String getAttachm() {
	return attachm;
    }

    public void setAttachm(String attachm) {
	this.attachm = attachm;
    }

}
