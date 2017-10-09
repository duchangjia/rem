package com.omcube.model.po;

/**
 * 角色功能中间表
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysRoleBsnPO extends BasicPO {

	private SysRolePO sysRolePO;
	
	private SysBsnPO sysBsn;
	
	private String remark;

	public SysRolePO getSysRolePO() {
		return sysRolePO;
	}

	public void setSysRolePO(SysRolePO sysRolePO) {
		this.sysRolePO = sysRolePO;
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
