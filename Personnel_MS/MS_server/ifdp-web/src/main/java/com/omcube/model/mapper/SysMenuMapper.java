package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.SysMenuPO;

@Mapper
public interface SysMenuMapper {

	/**
	 * 根据uid,系统编号sysNo,菜单编号menuNo查询这个菜单
	 * 
	 * @param sysMenuPO
	 * @return
	 */
	SysMenuPO queryMenuByUidAndSysNoAndMenuNo(SysMenuPO sysMenuPO);
}
