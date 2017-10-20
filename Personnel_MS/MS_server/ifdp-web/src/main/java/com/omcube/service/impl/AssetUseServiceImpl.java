package com.omcube.service.impl;

import java.text.SimpleDateFormat;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.AssetUseMapper;
import com.omcube.model.po.AssetUsePO;
import com.omcube.model.request.QueryAssetUseRequest;
import com.omcube.model.response.AssetUseResponse;
import com.omcube.service.AssetUseService;
/**
 * 资产使用管理
 * 
 * @author 程龙
 *
 */
@Service
public class AssetUseServiceImpl implements AssetUseService {

	private final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private AssetUseMapper assetUseMapper;

	/**
	 * 根据申请使用人(用户编号)applyUserNo查询反显姓名,手机号,岗位,职级
	 * 
	 * @author 程龙
	 * @param applyUserNo,organNo,derpNo,ccc
	 * @return AssetUsePO
	 */
	@Override
	public AssetUsePO queryAssetUserByApplyUserNo(String uid,
			String applyUserNo, String organNo, String derpNo, String ccc) {

		return assetUseMapper.queryAssetUserByApplyUserNo(uid, applyUserNo,
				organNo, derpNo, ccc);
	}

	/**
	 * 根据资产编号assetNo查询反显所需要的信息
	 * 
	 * @author 程龙
	 * @param uid,assetNo
	 * @return AssetUsePO
	 */
	@Override
	public AssetUsePO queryAssetUserByAssetNo(String uid, String assetNo) {

		return assetUseMapper.queryAssetUserByAssetNo(uid, assetNo);
	}

	/**
	 * 添加资产使用信息
	 * 
	 * @author 程龙
	 * @param assetUsePO
	 * 
	 */
	@Override
	public void addAssetUseINF(AssetUsePO assetUsePO) throws Exception {

		// 判断输入参数的合法性
		if (StringUtils.isBlank(assetUsePO.getApplyUserNo())
				|| StringUtils.isBlank(assetUsePO.getAssetNo())
				|| StringUtils.isBlank(assetUsePO.getApplyType())
				|| StringUtils.isBlank(assetUsePO.getApplyNum())
				|| StringUtils.isBlank(new SimpleDateFormat("yyyy-MM-dd")
						.format(assetUsePO.getApplyTime()))
				|| StringUtils.isBlank(assetUsePO.getApplyType())
				|| StringUtils.isBlank(assetUsePO.getStatus())
				|| StringUtils.isBlank(assetUsePO.getRemark())
				|| StringUtils.isBlank(assetUsePO.getOrganNo())
				|| StringUtils.isBlank(assetUsePO.getDerpNo())
				|| StringUtils.isBlank(assetUsePO.getCcc())) {
			logger.error("the roleName,roleDescr,status is null");
			throw new RuntimeException("输入新增的资产使用信息非法!!");
		}

		assetUseMapper.addAssetUseINF(assetUsePO);
	}

	/**
	 * 资产使用信息修改
	 * 
	 * @author 程龙
	 * @param AssetUsePO
	 */
	@Override
	public void modAssUse(AssetUsePO assetUsePO) throws Exception {

		// 判断输入参数的合法性
		if (StringUtils.isBlank(assetUsePO.getApplyUserNo())
				|| StringUtils.isBlank(assetUsePO.getAssetNo())
				|| StringUtils.isBlank(assetUsePO.getApplyType())
				|| StringUtils.isBlank(assetUsePO.getApplyNum())
				|| StringUtils.isBlank(new SimpleDateFormat("yyyy-MM-dd")
						.format(assetUsePO.getApplyTime()))
				|| StringUtils.isBlank(assetUsePO.getApplyType())
				|| StringUtils.isBlank(assetUsePO.getStatus())
				|| StringUtils.isBlank(assetUsePO.getRemark())
				|| StringUtils.isBlank(assetUsePO.getOrganNo())
				|| StringUtils.isBlank(assetUsePO.getDerpNo())
				|| StringUtils.isBlank(assetUsePO.getCcc())) {
			logger.error("the roleName,roleDescr,status is null");
			throw new RuntimeException("输入修改的资产使用信息非法!!");
		}
		assetUseMapper.modAssUse(assetUsePO);

	}

	/**
	 * 逻辑删除资产使用信息
	 * 
	 * @author 程龙
	 * @param applyNo,uid
	 */
	@Override
	public void delAssUse(String uid, String applyNo) {
		assetUseMapper.delAssUse(uid, applyNo);
	}

	/**
	 * 查询资产使用列表
	 * @author 程龙
	 * @param QueryAssetUseRequest
	 * @return List<AssetUseResponse>
	 */
	@Override
	public List<AssetUseResponse> queryAssUseList(
			QueryAssetUseRequest queryAssetUseRequest) {
		
		return assetUseMapper.queryAssUseList(queryAssetUseRequest);
		
	}

	/**
	 * 校验资产使用信息添加或修改时查询数据库记录的方法
	 * 
	 * @author 程龙
	 * @param uid,applyUserNo,assetNo
	 * @return AssetUsePO
	 */
}
