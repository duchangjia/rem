package com.omcube.service;

import java.util.List;
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
	 * @return
	 */
	List<SysRolePO> queryRoleList();

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
	 * @param roleNo
	 * @return
	 */
	SysRolePO queryRoleByRoleNo(String roleNo);

	/**
	 * 角色的修改
	 * 
	 * @param sysRolePO
	 */
	void modifyRoleInfo(SysRolePO sysRolePO) throws Exception;

	/**
	 * 向角色分配权限的方法
	 * 
	 * @param sysRolePO
	 * @return
	 */
	void setRoleFunc(SysRolePO sysRolePO) throws Exception;

	/**
	 * 角色的删除
	 * 
	 * @param sysRolePO
	 */
	void deleteRoleInfo(SysRolePO sysRolePO);

	/**
	 * 角色详情的查询
	 * 
	 * @param sysRolePO
	 * @return
	 */
	Object queryRoleDetail(SysRolePO sysRolePO);

}
