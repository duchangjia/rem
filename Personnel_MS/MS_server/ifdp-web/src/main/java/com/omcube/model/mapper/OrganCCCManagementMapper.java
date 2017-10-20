package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.model.request.QueryOrganCCCRequest;

@Mapper
public interface OrganCCCManagementMapper {
	
	/**
	 * 查询机构CCC列表
	 * @author 程龙
	 * @param uid
	 * @return
	 */
	List<OrganCCCManagemenPO> queryOrgCCCList(QueryOrganCCCRequest queryOrganCCCRequest);

	// @Insert("insert into IFDP_SYS_ORGAN_BASE
	// (UID,ORGAN_NO,ORGAN_NAME,ORGAN_TYPE,ORGAN_STATUS,ORGAN_LEVEL,CREATED_BY,CREATED_DATE,UPDATED_BY,UPDATED_DATE)
	// values(uid,organNo,organName,organType,status,organLevel,createBy,createDate,updateBy,updateDate)")
	// void insertOrganCCCManagementISOB(OrganCCCManagemenPO
	// organCCCManagemenPO);
	// @Insert("insert into EP_DEPT_CCC
	// (UID,ORGAN_NO,COST_TYPE,COST_CODE,DESCR)values
	// (uid,#{organNo},#{costType},#{costCode},#{descr})")

	/**
	 * 新增机构CCC的时候校验是否存在 
	 * @author 程龙
	 * @param organName
	 * @return
	 */
	String getOrganNoByName(@Param(value = "uid") String uid,@Param(value = "organName") String organName);
	
	/**
	 * 新增机构CCC功能  向EP_DEPT_CCC表插入机构CCC
	 * @author 程龙
	 * @param organCCCManagemenPO
	 */
	void insertOrganCCCManagementEDC(OrganCCCManagemenPO organCCCManagemenPO);

	/**
	 * 修改之前的查询反显功能
	 * @author 程龙
	 * @param organName
	 * @return
	 */
	OrganCCCManagemenPO queryOrganCCCManagementByOrganName(@Param(value = "uid") String uid,@Param(value = "organName")String organName);

	// @Update("update sys_organ_base set organ_name=#{organName where
	// organ_no=#{organNo}}")
	// Integer updateOrganCCCManagementISOB(OrganCCCManagemenPO
	// organCCCManagemenPO);

	// @Update("update ep_dept_ccc set
	// cost_type=#{costType},cost_code=#{costCode},descr=#{descr} where
	// organ_no=#{organNo}")
	
	
	/**
	 * 修改机构CCC功能
	 * @author 程龙
	 * @param organCCCManagemenPO
	 * 
	 */
	void updateOrganCCCManagementEDC(OrganCCCManagemenPO organCCCManagemenPO);


	/**
	 * 逻辑删除机构CCC
	 * @author 程龙
	 * @param organNo
	 * @return
	 */
	Object deleteOrganCCC(String organNo);
	
	/**
	 * 校验机构CCC是否存在 根据机构号
	 * @param uid
	 * @param organNo
	 * @return
	 */
	OrganCCCManagemenPO queryOrganCCCManagementByOrganNo(@Param(value = "uid") String uid,@Param(value = "organNo")String organNo);

}
