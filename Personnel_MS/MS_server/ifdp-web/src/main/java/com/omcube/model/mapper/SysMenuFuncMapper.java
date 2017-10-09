package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.SysMenuFuncPO;

/**
 * 菜单和业务功能中间表的dao类
 * 
 * @author dangjun
 * @version 1.0
 */
@Mapper
public interface SysMenuFuncMapper {

	/**
	 * 插入一条业务表和菜单表的映射.
	 * 
	 * @param sysMenuFunc
	 */
	void addMenuFunc(SysMenuFuncPO sysMenuFunc);
}
