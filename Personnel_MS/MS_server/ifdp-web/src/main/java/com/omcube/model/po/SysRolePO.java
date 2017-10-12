package com.omcube.model.po;

import java.util.List;

/**
 * 角色的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysRolePO extends BasicPO {

	private String roleNo; // 角色编号
	private String roleName; // 角色名称
	private String roleDescr; // 角色描述
	private List<SysUserPO> users; // 一个角色对应多个用户
	private List<SysBsnPO> roleFuncSet ; // 一个角色对应多个业务功能

	public List<SysUserPO> getUsers() {
		return users;
	}

	public List<SysBsnPO> getRoleFuncSet() {
		return roleFuncSet;
	}

	public void setRoleFuncSet(List<SysBsnPO> roleFuncSet) {
		this.roleFuncSet = roleFuncSet;
	}

	public void setUsers(List<SysUserPO> users) {
		this.users = users;
	}

	public String getRoleNo() {
		return roleNo;
	}

	public void setRoleNo(String roleNo) {
		this.roleNo = roleNo;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDescr() {
		return roleDescr;
	}

	public void setRoleDescr(String roleDescr) {
		this.roleDescr = roleDescr;
	}

	@Override
	public String toString() {
		return "SysRolePO [roleNo=" + roleNo + ", roleName=" + roleName + ", roleDescr=" + roleDescr + ", users="
				+ users + ", roleFuncSet=" + roleFuncSet + "]";
	}

	
}
