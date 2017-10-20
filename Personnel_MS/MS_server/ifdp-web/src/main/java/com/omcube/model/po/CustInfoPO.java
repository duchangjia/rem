package com.omcube.model.po;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class CustInfoPO extends BasicPO {

    private String userNo;
    private String custName; //用户姓名
    private String organNo;
    private String derpNo; //部门ID
    private String ownerCCC; //所属CCC
    private String certType;
    private String certNo;
    private String sex;
    private String birthday;
    private String nation;
    private String marital;//婚姻状况
    private String politial;//政治面貌
    private String education; //学历
    private String degree; //学位
    private String gradSchool; //毕业学校
    private String gradTime; //毕业时间
    private String major; //专业
    private String lineManager;//直线经理
    private String origo;//籍贯
    private String homeAddr;//家庭地址
    private String liveAddr;//居住地址
    private String permAddr;//户口地址
    private String mobileNo;//手机号
    private String teleph;//电话
    private String homeTeleph;
    private String perEmail;
    private String comEmail;
    private String atten;//紧急联系人
    private String attenTeleph;
    private String qqAcct;
    private String oneInch;//免冠照片
    private String custType;//员工类型
    private String custPost;//岗位
    private String custClass;//职级
    private String custStatus; //
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date entryTime;//入职时间
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date leftJobTime;//上岗时间
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date workTime;//工作日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date profTitleTime;//职称日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date compactStartTime;//合同开始
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date compactEndTime;//合同终止
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date probStartTime;//试用开始
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date probEndTime;//试用结束
    private String recruitQuarry;//招聘来源
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date lateLeaveTime;//最近离职时间
    private String openBank;//开户银行
    private String bankCardNo;//银行卡号
    private String endmAcct;//养老账号
    private String mediAcct;//医保账号
    private String mateAcct;//生育账号
    private String housAcct;//公积金账号
    private String attachm;//附件
    private String remark;
    //一对多
    private List<AssetUsePO> assetInfList;

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

    public String getOrganNo() {
	return organNo;
    }

    public void setOrganNo(String organNo) {
	this.organNo = organNo;
    }

    public String getDerpNo() {
	return derpNo;
    }

    public void setDerpNo(String derpNo) {
	this.derpNo = derpNo;
    }

    public String getOwnerCCC() {
	return ownerCCC;
    }

    public void setOwnerCCC(String ownerCCC) {
	this.ownerCCC = ownerCCC;
    }

    public String getCertType() {
	return certType;
    }

    public void setCertType(String certType) {
	this.certType = certType;
    }

    public String getCertNo() {
	return certNo;
    }

    public void setCertNo(String certNo) {
	this.certNo = certNo;
    }

    public String getSex() {
	return sex;
    }

    public void setSex(String sex) {
	this.sex = sex;
    }

    public String getBirthday() {
	return birthday;
    }

    public void setBirthday(String birthday) {
	this.birthday = birthday;
    }

    public String getNation() {
	return nation;
    }

    public void setNation(String nation) {
	this.nation = nation;
    }

    public String getMarital() {
	return marital;
    }

    public void setMarital(String marital) {
	this.marital = marital;
    }

    public String getPolitial() {
	return politial;
    }

    public void setPolitial(String politial) {
	this.politial = politial;
    }

    public String getEducation() {
	return education;
    }

    public void setEducation(String education) {
	this.education = education;
    }

    public String getDegree() {
	return degree;
    }

    public void setDegree(String degree) {
	this.degree = degree;
    }

    public String getGradSchool() {
	return gradSchool;
    }

    public void setGradSchool(String gradSchool) {
	this.gradSchool = gradSchool;
    }

    public String getGradTime() {
	return gradTime;
    }

    public void setGradTime(String gradTime) {
	this.gradTime = gradTime;
    }

    public String getMajor() {
	return major;
    }

    public void setMajor(String major) {
	this.major = major;
    }

    public String getLineManager() {
	return lineManager;
    }

    public void setLineManager(String lineManager) {
	this.lineManager = lineManager;
    }

    public String getOrigo() {
	return origo;
    }

    public void setOrigo(String origo) {
	this.origo = origo;
    }

    public String getHomeAddr() {
	return homeAddr;
    }

    public void setHomeAddr(String homeAddr) {
	this.homeAddr = homeAddr;
    }

    public String getLiveAddr() {
	return liveAddr;
    }

    public void setLiveAddr(String liveAddr) {
	this.liveAddr = liveAddr;
    }

    public String getPermAddr() {
	return permAddr;
    }

    public void setPermAddr(String permAddr) {
	this.permAddr = permAddr;
    }

    public String getMobileNo() {
	return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
	this.mobileNo = mobileNo;
    }

    public String getTeleph() {
	return teleph;
    }

    public void setTeleph(String teleph) {
	this.teleph = teleph;
    }

    public String getHomeTeleph() {
	return homeTeleph;
    }

    public void setHomeTeleph(String homeTeleph) {
	this.homeTeleph = homeTeleph;
    }

    public String getPerEmail() {
	return perEmail;
    }

    public void setPerEmail(String perEmail) {
	this.perEmail = perEmail;
    }

    public String getComEmail() {
	return comEmail;
    }

    public void setComEmail(String comEmail) {
	this.comEmail = comEmail;
    }

    public String getAtten() {
	return atten;
    }

    public void setAtten(String atten) {
	this.atten = atten;
    }

    public String getAttenTeleph() {
	return attenTeleph;
    }

    public void setAttenTeleph(String attenTeleph) {
	this.attenTeleph = attenTeleph;
    }

    public String getQqAcct() {
	return qqAcct;
    }

    public void setQqAcct(String qqAcct) {
	this.qqAcct = qqAcct;
    }

    public String getOneInch() {
	return oneInch;
    }

    public void setOneInch(String oneInch) {
	this.oneInch = oneInch;
    }

    public String getCustType() {
	return custType;
    }

    public void setCustType(String custType) {
	this.custType = custType;
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

    public String getCustStatus() {
	return custStatus;
    }

    public void setCustStatus(String custStatus) {
	this.custStatus = custStatus;
    }

    public Date getEntryTime() {
	return entryTime;
    }

    public void setEntryTime(Date entryTime) {
	this.entryTime = entryTime;
    }

    public Date getLeftJobTime() {
	return leftJobTime;
    }

    public void setLeftJobTime(Date leftJobTime) {
	this.leftJobTime = leftJobTime;
    }

    public Date getWorkTime() {
	return workTime;
    }

    public void setWorkTime(Date workTime) {
	this.workTime = workTime;
    }

    public Date getProfTitleTime() {
	return profTitleTime;
    }

    public void setProfTitleTime(Date profTitleTime) {
	this.profTitleTime = profTitleTime;
    }

    public Date getCompactStartTime() {
	return compactStartTime;
    }

    public void setCompactStartTime(Date compactStartTime) {
	this.compactStartTime = compactStartTime;
    }

    public Date getCompactEndTime() {
	return compactEndTime;
    }

    public void setCompactEndTime(Date compactEndTime) {
	this.compactEndTime = compactEndTime;
    }

    public Date getProbStartTime() {
	return probStartTime;
    }

    public void setProbStartTime(Date probStartTime) {
	this.probStartTime = probStartTime;
    }

    public Date getProbEndTime() {
	return probEndTime;
    }

    public void setProbEndTime(Date probEndTime) {
	this.probEndTime = probEndTime;
    }

    public String getPecruitQuarry() {
	return recruitQuarry;
    }

    public void setPecruitQuarry(String recruitQuarry) {
	this.recruitQuarry = recruitQuarry;
    }

    public Date getLateLeaveTime() {
	return lateLeaveTime;
    }

    public void setLateLeaveTime(Date lateLeaveTime) {
	this.lateLeaveTime = lateLeaveTime;
    }

    public String getOpenBank() {
	return openBank;
    }

    public void setOpenBank(String openBank) {
	this.openBank = openBank;
    }

    public String getBankCardNo() {
	return bankCardNo;
    }

    public void setBankCardNo(String bankCardNo) {
	this.bankCardNo = bankCardNo;
    }

    public String getEndmAcct() {
	return endmAcct;
    }

    public void setEndmAcct(String endmAcct) {
	this.endmAcct = endmAcct;
    }

    public String getMediAcct() {
	return mediAcct;
    }

    public void setMediAcct(String mediAcct) {
	this.mediAcct = mediAcct;
    }

    public String getMateAcct() {
	return mateAcct;
    }

    public void setMateAcct(String mateAcct) {
	this.mateAcct = mateAcct;
    }

    public String getHousAcct() {
	return housAcct;
    }

    public void setHousAcct(String housAcct) {
	this.housAcct = housAcct;
    }

    public String getAttachm() {
	return attachm;
    }

    public void setAttachm(String attachm) {
	this.attachm = attachm;
    }

    public String getRemark() {
	return remark;
    }

    public void setRemark(String remark) {
	this.remark = remark;
    }

    public String getRecruitQuarry() {
	return recruitQuarry;
    }

    public void setRecruitQuarry(String recruitQuarry) {
	this.recruitQuarry = recruitQuarry;
    }

    public List<AssetUsePO> getAssetInfList() {
	return assetInfList;
    }

    public void setAssetInfList(List<AssetUsePO> assetInfList) {
	this.assetInfList = assetInfList;
    }

}