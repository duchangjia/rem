package com.omcube.model.po;

import java.util.List;

/**
 * 菜单的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysMenuPO extends BasicPO {

	private String sysNo; // 系统编号
	private String menuNo; // 菜单编码
	private String menuName; // 菜单名称
	private String upMenuNo; // 上级菜单编码
	private String menuLevel; // 菜单级别
	private String menuOrder; // 菜单顺序
	private String menuUrl; // 菜单功能链接
	private String menuDescr; // 菜单描述
	private String menuImg; // 菜单图标
	private List<SysBsnPO> bsns; // 业务功能

	public List<SysBsnPO> getBsns() {
		return bsns;
	}

	public void setBsns(List<SysBsnPO> bsns) {
		this.bsns = bsns;
	}

	public String getSysNo() {
		return sysNo;
	}

	public void setSysNo(String sysNo) {
		this.sysNo = sysNo;
	}

	public String getMenuNo() {
		return menuNo;
	}

	public void setMenuNo(String menuNo) {
		this.menuNo = menuNo;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getUpMenuNo() {
		return upMenuNo;
	}

	public void setUpMenuNo(String upMenuNo) {
		this.upMenuNo = upMenuNo;
	}

	public String getMenuLevel() {
		return menuLevel;
	}

	public void setMenuLevel(String menuLevel) {
		this.menuLevel = menuLevel;
	}

	public String getMenuOrder() {
		return menuOrder;
	}

	public void setMenuOrder(String menuOrder) {
		this.menuOrder = menuOrder;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getMenuDescr() {
		return menuDescr;
	}

	public void setMenuDescr(String menuDescr) {
		this.menuDescr = menuDescr;
	}

	public String getMenuImg() {
		return menuImg;
	}

	public void setMenuImg(String menuImg) {
		this.menuImg = menuImg;
	}

}
