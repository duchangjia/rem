package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.OrganBillInfoPO;

@Mapper
public interface OrganBillInfoMapper {
	
	/**
	 * 开票信息新增
	 * 
	 * @param billInfoPO
	 */
	public void addBillInf(OrganBillInfoPO billInfoPO);

	/**
	 * 开票信息修改
	 * 
	 * @param billInfoPO
	 */
	public void modBillInf(OrganBillInfoPO billInfoPO);

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
	 * 开票信息详细信息查询
	 * 
	 * @param organNo
	 * @return
	 */
	public OrganBillInfoPO queryBillInfDtl(@Param("uId") String uId,@Param("organNo") String organNo);
	
}
