package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.SysRoleBsnPO;
import com.omcube.model.po.SysRolePO;

/**
 * 角色功能中间表的dao
 * 
 * @author dangjun
 * @version 1.0
 */
@Mapper
public interface SysRoleBsnMapper {

	/**
	 * 插入角色功能的中间表
	 * 
	 * @param sysRoleBsn
	 */
	void addRoleBsn(SysRoleBsnPO sysRoleBsn);

	/**
	 * 角色详情的查询
	 * 
	 * @param sysRoleBsn
	 */
	Object queryRoleDetail(SysRolePO sysRolePO);

	/**
	 * 关联角色和业务功能
	 * 
	 * @param sysRoleBsn
	 */
	void addRoleBsnInfo(SysRoleBsnPO sysRoleBsn);
}
