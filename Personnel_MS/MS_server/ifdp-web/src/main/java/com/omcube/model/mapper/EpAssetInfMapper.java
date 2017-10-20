package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.EpAssetInfPO;

@Mapper
public interface EpAssetInfMapper {

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
    Object queryEpAssetInf(@Param("uid") String uid, @Param("assetNo") String assetNo);

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
    void deleteEpAssetInf(@Param("assetNo") String assetNo, @Param("uid") String uid,
	    @Param("updatedBy") String updatedBy);

}
