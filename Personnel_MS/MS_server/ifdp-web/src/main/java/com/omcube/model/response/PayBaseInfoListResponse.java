package com.omcube.model.response;

import java.util.Date;

public class PayBaseInfoListResponse {

    private String userNo;
    private String userName;
    private double wagesBase; //基础工资
    private double wagesPerf;//绩效工资
    private double otherPension;//其他补贴
    private double endmBase;//养老保险基数
    private double probRatio;//试用期比例
    private Date createdDate;
    
    public String getUserNo() {
        return userNo;
    }
    public void setUserNo(String userNo) {
        this.userNo = userNo;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
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
    public double getProbRatio() {
        return probRatio;
    }
    public void setProbRatio(double probRatio) {
        this.probRatio = probRatio;
    }
    public Date getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    } 
    
}
