package com.omcube.model.po;

import java.util.List;

/**
 * 业务功能的实体类
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysBsnPO extends BasicPO {

	private String bsnNo; // 功能编号
	private String interfaceName; // 接口名称
	private String methodName; // 方法名称
	private String serviceName; // 服务名称
	private String remark; // 备注
	private String bsnUrl; // 访问路径
	private List<SysMenuPO> menus; // 一个业务功能对应多个按钮

	public List<SysMenuPO> getMenus() {
		return menus;
	}

	public void setMenus(List<SysMenuPO> menus) {
		this.menus = menus;
	}

	public String getBsnNo() {
		return bsnNo;
	}

	public void setBsnNo(String bsnNo) {
		this.bsnNo = bsnNo;
	}

	public String getInterfaceName() {
		return interfaceName;
	}

	public void setInterfaceName(String interfaceName) {
		this.interfaceName = interfaceName;
	}

	public String getMethodName() {
		return methodName;
	}

	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getBsnUrl() {
		return bsnUrl;
	}

	public void setBsnUrl(String bsnUrl) {
		this.bsnUrl = bsnUrl;
	}

}
