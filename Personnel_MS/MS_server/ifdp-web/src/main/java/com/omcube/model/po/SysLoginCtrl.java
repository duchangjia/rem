package com.omcube.model.po;

public class SysLoginCtrl extends BasicPO {
    private String userNo;
    private String userName;
    private String channel;
    private String loginNum;
    private String lastLoginDate;
    private String lastLoginTime;
    private int errNum;
    private String lastErrDate;
    private String lastErrTime;

    public String getUserNo() {
	return userNo;
    }

    public void setUserNo(String userNo) {
	this.userNo = userNo;
    }

    public String getChannel() {
	return channel;
    }

    public void setChannel(String channel) {
	this.channel = channel;
    }

    public String getLoginNum() {
	return loginNum;
    }

    public void setLoginNum(String loginNum) {
	this.loginNum = loginNum;
    }

    public String getLastLoginDate() {
	return lastLoginDate;
    }

    public void setLastLoginDate(String lastLoginDate) {
	this.lastLoginDate = lastLoginDate;
    }

    public String getLastLoginTime() {
	return lastLoginTime;
    }

    public void setLastLoginTime(String lastLoginTime) {
	this.lastLoginTime = lastLoginTime;
    }

    public int getErrNum() {
	return errNum;
    }

    public void setErrNum(int errNum) {
	this.errNum = errNum;
    }

    public String getLastErrDate() {
	return lastErrDate;
    }

    public void setLastErrDate(String lastErrDate) {
	this.lastErrDate = lastErrDate;
    }

    public String getLastErrTime() {
	return lastErrTime;
    }

    public void setLastErrTime(String lastErrTime) {
	this.lastErrTime = lastErrTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

}
