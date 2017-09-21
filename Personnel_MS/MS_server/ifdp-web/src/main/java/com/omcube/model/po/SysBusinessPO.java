package com.omcube.model.po;

import java.util.List;
/**
 * 业务功能表
 * @author jinx
 *
 */
public class SysBusinessPO extends BasicPO {
    private String bsnNo;
    private String interfaceName;//接口名称
    private String bsnURL;
    private String methodName;//请求方法  POST GET PUT DELETE
    private String service;//服务名称
    private String remark;
    private List<SysRolePO> roles;

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

	public String getBsnURL() {
		return bsnURL;
	}

	public void setBsnURL(String bsnURL) {
		this.bsnURL = bsnURL;
	}

	public String getMethodName() {
		return methodName;
	}

	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}

	public List<SysRolePO> getRoles() {
        return roles;
    }

    public void setRoles(List<SysRolePO> roles) {
        this.roles = roles;
    }

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
    
}
