package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.EpAssetInfMapper;
import com.omcube.model.po.EpAssetInfPO;
import com.omcube.service.EpAssetInfService;

@Component
public class EpAssetInfServiceImpl implements EpAssetInfService {
    @Autowired
    private EpAssetInfMapper epAssetInfMapper;

    /**
     * 1.添加资产信息
     */
    public void addEpAssetInf(EpAssetInfPO epAssetInf) {
	epAssetInfMapper.addEpAssetInf(epAssetInf);

    }

    /**
     * 2.根据uid和资产编号assetNo查询资产的详细信息
     */
    public Object queryEpAssetInf(String uid, String assetNo) {
	return epAssetInfMapper.queryEpAssetInf(uid, assetNo);

    }

    /**
     * 3.修改资产信息
     */
    public void updateEpAssetInf(EpAssetInfPO epAssetInf) {
	epAssetInfMapper.updateEpAssetInf(epAssetInf);

    }

    /**
     * 4.高级查询资产列表
     */
    public List<EpAssetInfPO> queryEpAssetInfs(EpAssetInfPO epAssetInf) {
	return epAssetInfMapper.queryEpAssetInfs(epAssetInf);
    }

    /**
     * 5.删除资产信息
     */
    public void deleteEpAssetInf(String assetNo, String uid, String updatedBy) {
	epAssetInfMapper.deleteEpAssetInf(assetNo, uid, updatedBy);

    }
}
