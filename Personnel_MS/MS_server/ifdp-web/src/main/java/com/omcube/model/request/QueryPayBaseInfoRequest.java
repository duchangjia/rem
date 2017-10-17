package com.omcube.model.request;

import org.hibernate.validator.constraints.Length;

public class QueryPayBaseInfoRequest {

    private int pageNum;//第几页
    private int pageSize;//每页多少条
    private String uid;//租户id  从session 中获取
    
    @Length(max = 16, message = "工号最大长度16")
    private String userNo;
    
    @Length(max = 32, message = "姓名最大长度32")
    private String userName;
    
    public int getPageNum() {
        return pageNum;
    }
    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }
    public int getPageSize() {
        return pageSize;
    }
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
    public String getUid() {
        return uid;
    }
    public void setUid(String uid) {
        this.uid = uid;
    }
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
    
    @Override
    public String toString() {
	return "QueryPayBaseInfoRequest [pageNum=" + pageNum + ", pageSize=" + pageSize + ", uid=" + uid + ", userNo="
		+ userNo + ", userName=" + userName + "]";
    }
    
}
