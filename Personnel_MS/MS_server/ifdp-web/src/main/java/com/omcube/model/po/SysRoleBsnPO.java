package com.omcube.model.po;

/**
 * 角色功能中间表对应的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysRoleBsnPO extends BasicPO {

	private SysRolePO sysRole; // 角色
	private SysBsnPO sysBsn; // 业务功能
	private String remark; // 备注
	
	public SysRolePO getSysRole() {
		return sysRole;
	}
	public void setSysRole(SysRolePO sysRole) {
		this.sysRole = sysRole;
	}
	public SysBsnPO getSysBsn() {
		return sysBsn;
	}
	public void setSysBsn(SysBsnPO sysBsn) {
		this.sysBsn = sysBsn;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

}
