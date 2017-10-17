package com.omcube.service;

import com.omcube.model.po.CustInfoPO;

public interface CustInfoService {
    /**
     * 员工基本信息新增
     * @param custInfo
     */
    public void insertCustInfo(CustInfoPO custInfo);
    
    /**
     * 员工基本信息修改
     * @param custInfo
     */
    public void modCustInf(CustInfoPO custInfo);
    
    /**
     * 员工基本信息查询
     * @param userNo
     * @return
     */
    public CustInfoPO queryCustInf(String uId,String userNo);
    
    /**
     * 员工基本信息删除
     * @param uId
     * @param userNo
     */
    public void delCustInf(String uId,String userNo);
}
