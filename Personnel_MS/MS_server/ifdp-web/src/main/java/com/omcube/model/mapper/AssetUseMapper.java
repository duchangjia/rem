package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.AssetUsePO;
import com.omcube.model.request.QueryAssetUseRequest;
import com.omcube.model.response.AssetUseResponse;
/**
 * 资产使用管理
 * @author 程龙
 *
 */
@Mapper
public interface AssetUseMapper {
	
	/**
	 * 根据申请使用人工号查询反显姓名,手机号,岗位,职级
	 * @param uid,applyUserNo,organNo,derpNo,ccc
	 * @author 程龙
	 * @return AssetUsePO
	 */
	AssetUsePO queryAssetUserByApplyUserNo(@Param(value = "uid") String uid , @Param(value = "applyUserNo")String applyUserNo,
			@Param(value = "organNo")String organNo,@Param(value = "derpNo")String derpNo,@Param(value = "ccc")String ccc);
	
	/**
	 * 根据资产编号assetNo查询反显所需要的信息
	 * @author 程龙
	 * @param uid,assetNo
	 * @return AssetUsePO
	 */
	AssetUsePO queryAssetUserByAssetNo(@Param(value = "uid") String uid , @Param(value = "assetNo")String assetNo);
	
	/**
	 * 添加资产使用信息
	 * @author 程龙
	 * @param AssetUsePO
	 */
	void addAssetUseINF(AssetUsePO assetUsePO);
	
	/**
	 * 资产使用信息修改
	 * @author 程龙
	 * @param AssetUsePO
	 * 
	 */
	void modAssUse(AssetUsePO assetUsePO);
	
	/**
	 * 逻辑删除资产使用信息 0无效 1有效
	 * @author 程龙
	 * @param applyNo,uid
	 * 
	 */
	void delAssUse(@Param(value = "uid") String uid,@Param(value = "applyNo") String applyNo);
	
	/**
	 * 查询资产使用列表
	 * @author 程龙
	 * @param QueryAssetUseRequest
	 * @return List<AssetUseResponse>
	 */
	List<AssetUseResponse> queryAssUseList(QueryAssetUseRequest queryAssetUseRequest);
}
