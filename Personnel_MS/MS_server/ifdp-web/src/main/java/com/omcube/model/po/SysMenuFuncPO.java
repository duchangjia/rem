package com.omcube.model.po;

/**
 * 菜单和业务功能中间表
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysMenuFuncPO extends BasicPO{
	
	private SysMenuPO sysMenuPO;     // 菜单的po类
	
	private SysBsnPO sysBsn; 			// 业务功能表的po类
	
	private String  remark; // NULL备注

	public SysMenuPO getSysMenuPO() {
		return sysMenuPO;
	}

	public void setSysMenuPO(SysMenuPO sysMenuPO) {
		this.sysMenuPO = sysMenuPO;
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
