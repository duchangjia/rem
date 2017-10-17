package com.omcube.model.po;

/**
 * 菜单和业务功能中间表对应的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysMenuFuncPO extends BasicPO {

	private SysMenuPO sysMenu; // 菜单
	private SysBsnPO sysBsn; // 业务功能
	private String remark; // 备注

	public SysMenuPO getSysMenu() {
		return sysMenu;
	}

	public void setSysMenu(SysMenuPO sysMenu) {
		this.sysMenu = sysMenu;
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
