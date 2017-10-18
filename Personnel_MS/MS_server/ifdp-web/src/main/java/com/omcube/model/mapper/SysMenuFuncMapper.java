package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuFuncPO;
import com.omcube.model.po.SysMenuPO;
import com.omcube.model.request.QueryFuncRequest;
import com.omcube.model.response.FuncResponse;

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
	
	/**
	 * 获取查询条件
	 * 
	 * @param queryFuncRequest
	 */
	
	List<SysBsnPO> getFuncQueryConditions();
	List<SysMenuPO> getMenuQueryConditions();
	
	/**
	 * 功能查询
	 * 
	 * @param queryFuncRequest
	 */
	
	List<FuncResponse> queryFuncList(QueryFuncRequest queryFuncRequest);
	
	
	
	
	
}
