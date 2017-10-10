package com.omcube.service;

import java.util.List;

import com.omcube.model.po.EpOrganBillInfoPO;

public interface OrganBillInfoService {
	/**
	 * 新增公司开票信息
	 * 
	 * @param epOrganBillInfoPO
	 */
	public void addOrganBillInfo(EpOrganBillInfoPO billInfoPO);

	/**
	 * 修改公司开票信息
	 * 
	 * @param billInfoPO
	 */
	public void updateOrganBillInfo(EpOrganBillInfoPO billInfoPO);

	/**
	 * 查询公司开票列表
	 * 
	 * @return
	 */
	public List<EpOrganBillInfoPO> queryBillInfoList(String uId);

	/**
	 * 通过公司名称查询公司开票信息列表
	 * 
	 * @param organName
	 * @return
	 */
	public List<EpOrganBillInfoPO> queryBillInfoByName(EpOrganBillInfoPO billInfoPO);
	
}
