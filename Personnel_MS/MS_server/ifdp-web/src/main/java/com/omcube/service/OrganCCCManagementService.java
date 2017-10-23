package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.model.request.QueryOrganCCCRequest;

public interface OrganCCCManagementService {

	/**
	 * 查询机构CCC列表
	 * @author 程龙
	 * @param queryOrganCCCRequest
	 * @return
	 */
	List<OrganCCCManagemenPO> queryOrgCCCList(QueryOrganCCCRequest queryOrganCCCRequest);

	// 根据机构名称获取机构号
	String getOrganNoByName(String uid ,String organName);

	/**
	 * 新增机构CCC
	 * @author 程龙
	 * @param organCCCManagemenPO
	 * @throws Exception
	 */
	void addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) throws Exception ;
	
	/**
	 * 修改机构CCC的查询反显
	 * @param uid
	 * @param organNo
	 * @return
	 */
	OrganCCCManagemenPO queryOrganCCCManagementByOrganName(String uid ,String organNo);

	/**
	 * 修改机构CCC
	 * @author 程龙
	 * @param organCCCManagemenPO
	 * @throws Exception
	 */
	void updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO)
			throws Exception;

	// 删除
	Object deleteOrganCCC(String organNo);

	/**
	 * 校验机构CCC是否存在 根据机构号
	 * @param uid
	 * @param organNo
	 * @return
	 */
	OrganCCCManagemenPO queryOrganCCCManagementByOrganNo(String uid,
			String organNo);

}
