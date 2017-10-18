package com.omcube.service;

import com.omcube.model.po.CustInfoPO;

public interface CustInfoService {
    /**
     * 新增员工基本信息
     * @param custInfo
     * @return
     */
    public void insertCustInfo(CustInfoPO custInfo);
    
    CustInfoPO queryCustInfoByUserNo(String uid, String userNo);
}
