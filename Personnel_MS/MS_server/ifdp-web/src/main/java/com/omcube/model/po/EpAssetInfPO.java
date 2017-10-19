package com.omcube.model.po;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class EpAssetInfPO extends BasicPO {
    private String assetNo;//资产编号
    private String organNo;//公司ID
    private String derpNo;//部门ID
    private String applyUserNo;//申请员工ID
    private String buyApplyNo;//采购订单号
    private Double buyUnitPrice;//购买单价
    private Integer buyNum;//购买数量
    private Integer stockNum;//剩余库存数量
    private Double buyAmount;//购买金额
    private String mfrs;//制造商
    private String supplier;//供应商
    private String assetType;//资产类别
    private String assetName;//资产名称
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date faxfreeTime;//免维保截止时间
    private String snNo;//SN编号
    private String derpLimit;//折旧年限
    private String specType;//规格型号
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date factoryTime;//出厂时间
    private String attachm;//附件   
    private String remark;//备注
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
    public String getApplyUserNo() {
        return applyUserNo;
    }
    public void setApplyUserNo(String applyUserNo) {
        this.applyUserNo = applyUserNo;
    }
    public String getBuyApplyNo() {
        return buyApplyNo;
    }
    public void setBuyApplyNo(String buyApplyNo) {
        this.buyApplyNo = buyApplyNo;
    }
    public Double getBuyUnitPrice() {
        return buyUnitPrice;
    }
    public void setBuyUnitPrice(Double buyUnitPrice) {
        this.buyUnitPrice = buyUnitPrice;
    }
    public Integer getBuyNum() {
        return buyNum;
    }
    public void setBuyNum(Integer buyNum) {
        this.buyNum = buyNum;
    }
    public Integer getStockNum() {
        return stockNum;
    }
    public void setStockNum(Integer stockNum) {
        this.stockNum = stockNum;
    }
    public Double getBuyAmount() {
        return buyAmount;
    }
    public void setBuyAmount(Double buyAmount) {
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
    public Date getFaxfreeTime() {
        return faxfreeTime;
    }
    public void setFaxfreeTime(Date faxfreeTime) {
        this.faxfreeTime = faxfreeTime;
    }
    public String getSnNo() {
        return snNo;
    }
    public void setSnNo(String snNo) {
        this.snNo = snNo;
    }
    public String getDerpLimit() {
        return derpLimit;
    }
    public void setDerpLimit(String derpLimit) {
        this.derpLimit = derpLimit;
    }
    public String getSpecType() {
        return specType;
    }
    public void setSpecType(String specType) {
        this.specType = specType;
    }
    public Date getFactoryTime() {
        return factoryTime;
    }
    public void setFactoryTime(Date factoryTime) {
        this.factoryTime = factoryTime;
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
