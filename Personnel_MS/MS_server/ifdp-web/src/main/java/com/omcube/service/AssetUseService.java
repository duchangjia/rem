package com.omcube.service;


import java.util.List;

import com.omcube.model.po.AssetUsePO;
import com.omcube.model.request.QueryAssetUseRequest;
import com.omcube.model.response.AssetUseResponse;
/**
 * 资产使用管理
 * @author 程龙
 *
 */

public interface AssetUseService {
	
	/**
	 * 根据用户编号applyUserNo查询反显姓名,手机号,岗位,职级
	 * @author 程龙
	 * @param applyUserNo,organNo,derpNo,ccc
	 * @return AssetUsePO
	 */
	AssetUsePO queryAssetUserByApplyUserNo(String uid , String applyUserNo,
			String organNo,String derpNo,String ccc);
	
	/**
	 * 根据资产编号assetNo查询反显所需要的信息
	 * @author 程龙
	 * @param uid,assetNo
	 * @return AssetUserPO
	 */
	AssetUsePO queryAssetUserByAssetNo(String uid,String assetNo);
	
	/**
	 * 添加资产使用信息
	 * @author 程龙
	 * @param assetUsePO
	 * 
	 */
	void addAssetUseINF(AssetUsePO assetUsePO)throws Exception;
	
	/**
	 * 资产使用信息修改
	 * @author 程龙
	 * @param AssetUsePO
	 */
	void modAssUse(AssetUsePO assetUsePO) throws Exception;
	
	/**
	 * 逻辑删除资产使用信息
	 * @author 程龙
	 * @param applyNo,uid
	 * 
	 */
	void delAssUse(String uid,String applyNo);
	
	/**
	 * 查询资产使用列表
	 * @author 程龙
	 * @param QueryAssetUseRequest
	 * @return List<AssetUseResponse>
	 */
	List<AssetUseResponse> queryAssUseList(QueryAssetUseRequest queryAssetUseRequest);
}
