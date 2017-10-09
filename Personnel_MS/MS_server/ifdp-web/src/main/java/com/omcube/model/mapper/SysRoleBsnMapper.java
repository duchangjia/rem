package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuFuncPO;
import com.omcube.model.po.SysRoleBsnPO;

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
}
