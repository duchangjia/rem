package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.SysMenuPO;

@Mapper
public interface SysMenuMapper {

	/**
	 * 根据菜单查询对应的功能
	 * 
	 * @param sysMenuPO
	 * @return
	 */
	SysMenuPO queryBsnByMenu(SysMenuPO menu);
}
