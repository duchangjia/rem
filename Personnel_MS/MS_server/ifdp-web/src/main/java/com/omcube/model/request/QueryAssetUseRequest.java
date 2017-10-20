package com.omcube.model.request;

/**
 * 查询资产使用信息列表的请求参数实体类
 * @author 程龙
 *
 */
public class QueryAssetUseRequest {

	private int pageNum;// 第几页
	private int pageSize;// 每页多少条
	private String uid;// 租户id 从session 中获取
	private String assetName;// 资产名称
	private String assetType;// 资产类型
	private String assetNo;// 资产编号
	private String applyUserNo;// 申请人工号
	private String organNo;// 公司ID
	private String derpNo;// 部门ID

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
	public String getAssetName() {
		return assetName;
	}
	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}
	public String getAssetType() {
		return assetType;
	}
	public void setAssetType(String assetType) {
		this.assetType = assetType;
	}
	public String getAssetNo() {
		return assetNo;
	}
	public void setAssetNo(String assetNo) {
		this.assetNo = assetNo;
	}
	public String getApplyUserNo() {
		return applyUserNo;
	}
	public void setApplyUserNo(String applyUserNo) {
		this.applyUserNo = applyUserNo;
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

}
