package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganBillInfoPO;

public interface OrganBillInfoService {
	/**
	 * 新增公司开票信息
	 * 
	 * @param epOrganBillInfoPO
	 */
	public void addOrganBillInfo(OrganBillInfoPO billInfoPO);

	/**
	 * 修改公司开票信息
	 * 
	 * @param billInfoPO
	 */
	public void updateOrganBillInfo(OrganBillInfoPO billInfoPO);

	/**
	 * 查询公司开票列表
	 * 
	 * @return
	 */
	public List<OrganBillInfoPO> queryBillInfoList(String uId);

	/**
	 * 通过公司名称查询公司开票信息列表
	 * 
	 * @param organName
	 * @return
	 */
	public List<OrganBillInfoPO> queryBillInfoByName(OrganBillInfoPO billInfoPO);
	
	/**
	 * 查询公司开票信息
	 * 
	 * @param organNO
	 * @return
	 */
	public OrganBillInfoPO queryBillInfo(String organNo);
	
}
