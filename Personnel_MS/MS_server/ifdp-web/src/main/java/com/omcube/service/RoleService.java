package com.omcube.service;

import java.util.List;

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
	List<SysRolePO> queryRoleList(String uId);

	/**
	 * 角色的添加
	 * 
	 * @param sysRolePO
	 * @throws Exception 
	 */
	void addRoleInfo(SysRolePO sysRolePO) throws Exception;

	/**
	 * 要修改数据的查询
	 * 
	 * @param uId
	 * @param roleNo
	 * @return
	 */
	SysRolePO queryRoleByRoleNo(String uId, String roleNo);
	
	/**
	 * 角色的修改
	 * 
	 * @param sysRolePO
	 */
	void updateRoleInfo(SysRolePO sysRolePO) throws Exception;

	/**
	 * 权限分配时角色查询
	 * 
	 * @param sysRolePO
	 * @return
	 */
	Object queryRoleByRoleName(SysRolePO sysRolePO);

	/**
	 * 向角色分配权限的方法
	 * 
	 * @param sysRolePO
	 * @param sysMenuPO
	 * @return
	 */
	void distributionRole(SysRolePO sysRolePO, List<SysMenuPO> menus, List<SysBsnPO> bsns) throws Exception;



}
