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
     * @param uId
     * @param assetNo
     * @return
     */
    Object queryEpAssetInf(String uId, String assetNo);
    
    /**
     * 3.修改资产信息
     * @param epAssetInf
     */
    void updateEpAssetInf(EpAssetInfPO epAssetInf);

    List<EpAssetInfPO>  queryEpAssetInfs(EpAssetInfPO epAssetInf);
    

}
