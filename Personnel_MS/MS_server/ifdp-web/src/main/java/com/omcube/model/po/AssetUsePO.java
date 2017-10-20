package com.omcube.model.po;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 资产使用管理
 * 
 * @author 程龙
 *
 */
public class AssetUsePO extends BasicPO {

	// 新增所用到的属性 新增到资产流水表EP_ASSETUSER_FLOW
	private String applyNo;// 申请编号
	private String organNo;// 公司ID
	private String organName;// 公司名称
	private String derpNo;// 部门ID
	private String derpName;// 部门名称
	private String ccc;//
	private String applyUserNo;// 申请人工号
	private String assetNo;// 资产编号
	private String applyType;// 使用类别
	private String applyNum;// 使用数量

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date applyTime;// 发生日期

	private String attachm;// 附件
	private String remark;// 说明

	// 查询反显所用到的属性 用户基础信息表EP_CUST_INFO中的字段
	private String custName;// 用户姓名
	private String mobileNo;// 手机号
	private String custPost;// 岗位
	private String custClass;// 职级

	// 查询反显用到的资产信息表EP_ASSET_INF中的字段
	private String buyUnitPrice;// 购买单价
	private String stockNum;// 剩余库存数量
	private String buyAmount;// 购买金额
	private String mfrs;// 制造商
	private String supplier;// 供应商
	private String assetType;// 资产类别
	private String assetName;// 资产名称
	private String snNo;// SN编号
	private String specType;// 规格型号
	private String factoryTime;// 出厂时间
	private String faxFreeTime;// 免维保截止时间
	private String configInstr;// 配置说明

	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
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
	public String getBuyUnitPrice() {
		return buyUnitPrice;
	}
	public void setBuyUnitPrice(String buyUnitPrice) {
		this.buyUnitPrice = buyUnitPrice;
	}
	public String getStockNum() {
		return stockNum;
	}
	public void setStockNum(String stockNum) {
		this.stockNum = stockNum;
	}
	public String getBuyAmount() {
		return buyAmount;
	}
	public void setBuyAmount(String buyAmount) {
		this.buyAmount = buyAmount;
	}
	public String getMfrs() {
		return mfrs;
	}
	public void setMfrs(String mfrs) {
		this.mfrs = mfrs;
	}
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	public String getAssetType() {
		return assetType;
	}
	public void setAssetType(String assetType) {
		this.assetType = assetType;
	}
	public String getAssetName() {
		return assetName;
	}
	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}
	public String getSnNo() {
		return snNo;
	}
	public void setSnNo(String snNo) {
		this.snNo = snNo;
	}
	public String getSpecType() {
		return specType;
	}
	public void setSpecType(String specType) {
		this.specType = specType;
	}
	public String getFactoryTime() {
		return factoryTime;
	}
	public void setFactoryTime(String factoryTime) {
		this.factoryTime = factoryTime;
	}
	public String getFaxFreeTime() {
		return faxFreeTime;
	}
	public void setFaxFreeTime(String faxFreeTime) {
		this.faxFreeTime = faxFreeTime;
	}
	public String getConfigInstr() {
		return configInstr;
	}
	public void setConfigInstr(String configInstr) {
		this.configInstr = configInstr;
	}
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
	public String getOrganName() {
		return organName;
	}
	public void setOrganName(String organName) {
		this.organName = organName;
	}
	public String getDerpNo() {
		return derpNo;
	}
	public void setDerpNo(String derpNo) {
		this.derpNo = derpNo;
	}
	public String getDerpName() {
		return derpName;
	}
	public void setDerpName(String derpName) {
		this.derpName = derpName;
	}
	public String getCcc() {
		return ccc;
	}
	public void setCcc(String ccc) {
		this.ccc = ccc;
	}
	public String getApplyUserNo() {
		return applyUserNo;
	}
	public void setApplyUserNo(String applyUserNo) {
		this.applyUserNo = applyUserNo;
	}
	public String getAssetNo() {
		return assetNo;
	}
	public void setAssetNo(String assetNo) {
		this.assetNo = assetNo;
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
