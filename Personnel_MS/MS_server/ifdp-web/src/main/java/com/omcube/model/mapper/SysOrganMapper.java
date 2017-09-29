package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;

@Mapper
public interface SysOrganMapper {

	List<OrganTree> queryOrganTreeList(String organ_no);
	
	SysOrganPO queryParentOrgan(String organ_no);
	
	List<SysOrganPO> queryChildOrgan(String organ_no);

	List<SysUserPO> queryOrganUser(String organ_no);

	void deleteOrgan(String organ_no);

	void addOrganUser(SysUserPO sysUserPO);

	void deleteOrganUser(String userNo);

	void updateOrgan(SysOrganPO sysOrganPO);
	
	void updateOrganDetail(SysOrganPO sysOrganPO);

	void addOrgan(SysOrganPO sysOrganPO);

	void addOrganDetail(SysOrganPO sysOrganPO);
	
	
}
