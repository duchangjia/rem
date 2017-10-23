package com.omcube.model.response;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.omcube.model.po.BasicPO;

/**
 * 查询资产使用信息列表的实体类
 * @author 程龙
 *
 */
public class AssetUseResponse extends BasicPO {

	private String applyNo;// 使用编号
	private String assetNo;// 资产编号
	private String organNo;// 公司ID
	private String derpNo;// 部门ID
	private String ccc;//
	private String organName;// 公司名称
	private String derpName;// 部门名称
	private String applyUserNo;// 申请人工号
	private String applyType;// 使用类别
	private String applyNum;// 使用数量
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date applyTime;// 发生日期
	private String remark;// 说明
	private String attachm;// 附件
	public String getApplyNo() {
		return applyNo;
	}
	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}
	public String getAssetNo() {
		return assetNo;
	}
	public void setAssetNo(String assetNo) {
		this.assetNo = assetNo;
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
	public String getCcc() {
		return ccc;
	}
	public void setCcc(String ccc) {
		this.ccc = ccc;
	}
	public String getOrganName() {
		return organName;
	}
	public void setOrganName(String organName) {
		this.organName = organName;
	}
	public String getDerpName() {
		return derpName;
	}
	public void setDerpName(String derpName) {
		this.derpName = derpName;
	}
	public String getApplyUserNo() {
		return applyUserNo;
	}
	public void setApplyUserNo(String applyUserNo) {
		this.applyUserNo = applyUserNo;
	}
	public String getApplyType() {
		return applyType;
	}
	public void setApplyType(String applyType) {
		this.applyType = applyType;
	}
	public String getApplyNum() {
		return applyNum;
	}
	public void setApplyNum(String applyNum) {
		this.applyNum = applyNum;
	}
	public Date getApplyTime() {
		return applyTime;
	}
	public void setApplyTime(Date applyTime) {
		this.applyTime = applyTime;
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
