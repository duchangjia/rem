package com.omcube.model.response;

import com.omcube.model.po.BasicPO;

public class FuncResponse extends BasicPO{
   
    private String sysNo; // 系统编号
    private String bsnNo; // 功能编号
    private String methodName; // 方法(功能)名称
    private String interfaceName; // 接口方法
    private String bsnUrl; // 访问路径
    private String remark; // 备注
    
    public String getSysNo()
    {
        return sysNo;
    }
    public void setSysNo(String sysNo)
    {
        this.sysNo = sysNo;
    }
    public String getBsnNo()
    {
        return bsnNo;
    }
    public void setBsnNo(String bsnNo)
    {
        this.bsnNo = bsnNo;
    }
    public String getMethodName()
    {
        return methodName;
    }
    public void setMethodName(String methodName)
    {
        this.methodName = methodName;
    }
    public String getInterfaceName()
    {
        return interfaceName;
    }
    public void setInterfaceName(String interfaceName)
    {
        this.interfaceName = interfaceName;
    }
    public String getBsnUrl()
    {
        return bsnUrl;
    }
    public void setBsnUrl(String bsnUrl)
    {
        this.bsnUrl = bsnUrl;
    }
    public String getRemark()
    {
        return remark;
    }
    public void setRemark(String remark)
    {
        this.remark = remark;
    }
  
  
    
    

}
