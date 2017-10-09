package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuFuncPO;

/**
 * 业务功能表的dao
 * 
 * @author dangjun
 * @version 1.0
 */
@Mapper
public interface SysBsnMapper {

	/**
	 * 插入一条业务功能数据
	 * 
	 * @param sysMenuFunc
	 */
	void addBsn(SysBsnPO sysBsn);
}
