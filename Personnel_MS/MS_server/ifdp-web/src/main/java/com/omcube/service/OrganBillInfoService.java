package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganBillInfoPO;

public interface OrganBillInfoService {
    /**
     * 开票信息新增
     * 
     * @param epOrganBillInfoPO
     */
    public void addBillInf(OrganBillInfoPO billInfoPO);

    /**
     * 开票信息修改
     * 
     * @param billInfoPO
     */
    public void modBillInf(OrganBillInfoPO billInfoPO);

    /**
     * 查询公司开票列表
     * 
     * @return
     */
    public List<OrganBillInfoPO> queryBillInfoList(String uid);

    /**
     * 通过公司名称模糊查询
     * 
     * @param organName
     * @return
     */
    public List<OrganBillInfoPO> queryBillInfoByName(String uid, String organName);

    /**
     * 开票信息详细信息查询
     * 
     * @param organNO
     * @return
     */
    public OrganBillInfoPO queryBillInfDtl(String uid, String organNo);

}
