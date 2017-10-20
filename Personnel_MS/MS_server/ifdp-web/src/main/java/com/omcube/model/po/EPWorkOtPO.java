package com.omcube.model.po;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

/**
 * 加班管理的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class EPWorkOtPO extends BasicPO {

	private String applyNo; // 加班编号
	private CustInfoPO custInfoPO; // 用户
	private Date workotStartTime; // 加班开始时间
	private Date workotEndTime; // 加班结束时间
	private String workotType; // 加班的类型,参数:01有薪加班02调休加班
	private double timeSheet; // 加班工时
	private String authFlow; // 审批流水号
	private String authStatus; // 审批状态,参数表:01审批中02审批通过03审批不通过
	private String authView; // 审批意见
	private String attachm; // 附件
	private String remark; // 备注
	private MultipartFile file; // 文件的上传
	private Integer pageNum; // 当前页
	private Integer pageSize; // 每页显示的页数

	public Integer getPageNum() {
		return pageNum;
	}

	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public String getApplyNo() {
		return applyNo;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}

	public CustInfoPO getCustInfoPO() {
		return custInfoPO;
	}

	public void setCustInfoPO(CustInfoPO custInfoPO) {
		this.custInfoPO = custInfoPO;
	}

	public Date getWorkotStartTime() {
		return workotStartTime;
	}

	public void setWorkotStartTime(Date workotStartTime) {
		this.workotStartTime = workotStartTime;
	}

	public Date getWorkotEndTime() {
		return workotEndTime;
	}

	public void setWorkotEndTime(Date workotEndTime) {
		this.workotEndTime = workotEndTime;
	}

	public String getWorkotType() {
		return workotType;
	}

	public void setWorkotType(String workotType) {
		this.workotType = workotType;
	}

	public double getTimeSheet() {
		return timeSheet;
	}

	public void setTimeSheet(double timeSheet) {
		this.timeSheet = timeSheet;
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

	public String getAuthView() {
		return authView;
	}

	public void setAuthView(String authView) {
		this.authView = authView;
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

}
