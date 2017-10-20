package com.omcube.service;

import java.util.List;

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
    CustInfoPO queryCustInfoByUserNo(String uid, String userNo);

    /**
     * 员工基本信息删除
     * @param uid
     * @param userNo
     */
    public void delCustInf(String uid, String userNo);

    /**
     * 人事档案列表查询
     * @return
     */
    public List<CustInfoPO> queryCustInfList(String uid);

    /**
     * 直线经理查询
     * @param uid
     * @param userNo
     * @return
     */
    public String queryLineManager(String uid, String userNo);

    /**
     * 员工自助_员工信息查询
     * @param uid
     * @param userNo
     * @return
     */
    public List<CustInfoPO> queryCustInfBySelf(String uid, String userNo);

    /**
     * 员工自助_员工便捷查询
     * @param custInfo
     * @return
     */
    public List<CustInfoPO> queryCustInfByNameAndNo(CustInfoPO custInfo);
}
