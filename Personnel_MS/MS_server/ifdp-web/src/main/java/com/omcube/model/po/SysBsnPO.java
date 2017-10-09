package com.omcube.model.po;

import java.util.List;

/**
 * 业务功能表
 * 
 * @author dangjun
 * @version 1.0
 */
public class SysBsnPO extends BasicPO {

	private String bsnNo; // NOT NULL功能编号
	private String interfaceName; // NOT NULL接口名称
	private String methodName; // NOT NULL方法名称
	private String serviceName; // NOT NULL服务名称
	private String remark; // NULL备注
	private String bsnUrl; // NOT NULL访问路径
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
