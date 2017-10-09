package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.SysMenuPO;

@Mapper
public interface SysMenuMapper {

	/**
	 * 根据租户id,系统编号,菜单编号查询菜单.
	 * 
	 * @param sysMenuPO
	 * @return
	 */
	SysMenuPO findMenuByUidAndSysNoAndMenuNo(SysMenuPO sysMenuPO);
}
