package com.omcube.service;

import java.util.List;

import com.omcube.model.po.EpAssetInfPO;

public interface EpAssetInfService {

    /**
     * 1.添加资产信息
     * @param epAssetInf
     */
    void addEpAssetInf(EpAssetInfPO epAssetInf);

    /**
     * 2.根据uid和资产编号assetNo查询资产的详细信息
     * @param uid
     * @param assetNo
     * @return
     */
    Object queryEpAssetInf(String uid, String assetNo);

    /**
     * 3.修改资产信息
     * @param epAssetInf
     */
    void updateEpAssetInf(EpAssetInfPO epAssetInf);

    /**
     * 4.高级查询资产列表
     * @param epAssetInf
     * @param userNo
     * @return
     */
    List<EpAssetInfPO> queryEpAssetInfs(EpAssetInfPO epAssetInf);

    /**
     * 5.删除资产信息
     * @param assetNo
     * @param uid
     * @param updatedBy
     */
    void deleteEpAssetInf(String assetNo, String uid, String updatedBy);

}
