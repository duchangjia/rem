package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.OrganBillInfoPO;

@Mapper
public interface OrganBillInfoMapper {
	
	/**
	 * 新增公司开票信息
	 * 
	 * @param billInfoPO
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
	 * 通过公司名称模糊查询公司开票信息列表
	 * 
	 * @param organName
	 * @return
	 */
	public List<OrganBillInfoPO> queryBillInfoByName(@Param("uId") String uId,@Param("organName") String organName);
	
	/**
	 * 查询公司开票信息
	 * 
	 * @param organNo
	 * @return
	 */
	public OrganBillInfoPO queryBillInfo(@Param("uId") String uId,@Param("organNo") String organNo);
	
}
