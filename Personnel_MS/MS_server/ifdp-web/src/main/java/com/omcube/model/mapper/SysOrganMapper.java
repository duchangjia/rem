package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;

@Mapper
public interface SysOrganMapper {

	List<OrganTree> queryOrganList(String organNo);
	
	SysOrganPO queryParentOrgan(String organNo);
	
	List<SysOrganPO> queryChildOrgan(String organNo);

	List<SysUserPO> queryOrganMember(String organNo);

	void deleteOrganInfo(String organNo);

	void addOrganMember(SysUserPO sysUserPO);

	void deleteOrganMember(String userNo);

	List<String> queryAllChildrenOrganNoes(String organNo);
	
	void modifyOrgan(SysOrganPO sysOrganPO);
	
	void modifyOrganDetail(SysOrganPO sysOrganPO);

	void addOrgan(SysOrganPO sysOrganPO);

	void addOrganDetail(SysOrganPO sysOrganPO);
	
}
