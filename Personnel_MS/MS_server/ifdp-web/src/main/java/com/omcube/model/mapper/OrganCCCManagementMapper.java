package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.omcube.model.po.OrganCCCManagemenPO;

@Mapper
public interface OrganCCCManagementMapper {
	
	List<OrganCCCManagemenPO> queryOrganCCCManagementList(String uId);
	
	//同时向两张表中添加数据
	//@Insert("insert into IFDP_SYS_ORGAN_BASE (UID,ORGAN_NO,ORGAN_NAME,ORGAN_TYPE,ORGAN_STATUS,ORGAN_LEVEL,CREATED_BY,CREATED_DATE,UPDATED_BY,UPDATED_DATE) values(uid,organNo,organName,organType,status,organLevel,createBy,createDate,updateBy,updateDate)")
	void insertOrganCCCManagementISOB(OrganCCCManagemenPO organCCCManagemenPO);
	//@Insert("insert into EP_DEPT_CCC (UID,ORGAN_NO,COST_TYPE,COST_CODE,DESCR)values (uid,#{organNo},#{costType},#{costCode},#{descr})")
	void insertOrganCCCManagementEDC(OrganCCCManagemenPO organCCCManagemenPO);
	
	//修改之前的查询返显
	@Select("select sob.organ_name,edc.cost_type,edc.cost_code,edc.descr where organ_no =#{organNo}")
	OrganCCCManagemenPO queryOrganCCCManagementByOrganNo(String organNo);
	
	//同时向两张表中修改数据
	//@Update("update sys_organ_base set organ_name=#{organName where organ_no=#{organNo}}")
	Integer updateOrganCCCManagementISOB(OrganCCCManagemenPO organCCCManagemenPO);
	//@Update("update ep_dept_ccc set cost_type=#{costType},cost_code=#{costCode},descr=#{descr} where organ_no=#{organNo}")
	Integer updateOrganCCCManagementEDC(OrganCCCManagemenPO organCCCManagemenPO);

	//新增之前先判断数据表中是否存在将要添加的数据 只查询机构号即可
	@Select("select organ_no from sys_organ_base")
	List<String> queryOrganCCCManagementNo();
	
	//删除机构CCC
	void deleteOrganCCC(String organNo);

	

	
}
