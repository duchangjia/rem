package com.omcube.service;

import java.util.List;

import com.omcube.ifdpcore.common.JSONResult;
import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuPO;
import com.omcube.model.po.SysRolePO;

/**
 * 角色管理的service
 * 
 * @author dangjun
 * @version 1.0
 */
public interface RoleService {

	/**
	 * 查询所有的角色
	 * 
	 * @param uId
	 * @return
	 */
	List<SysRolePO> getRoleAll(String uId);

	/**
	 * 角色的添加
	 * 
	 * @param sysRolePO
	 */
	void addRole(SysRolePO sysRolePO);

	/**
	 * 要修改数据的查询
	 * 
	 * @param uId
	 * @param roleNo
	 * @return
	 */
	SysRolePO getRoleByRoleNo(String uId, String roleNo);

	/**
	 * 向角色分配权限的方法
	 * 
	 * @param sysRolePO
	 * @param sysMenuPO
	 * @return
	 */
	void distributionRole(SysRolePO sysRolePO, List<SysMenuPO> menus) throws Exception;

}
