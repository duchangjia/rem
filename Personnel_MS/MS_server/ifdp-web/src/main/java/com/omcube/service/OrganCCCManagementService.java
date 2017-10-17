package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganCCCManagemenPO;

public interface OrganCCCManagementService {

	// 查询所有列表
	List<OrganCCCManagemenPO> queryOrgCCCList(String uId);

	// 新增的校验查询
	Object queryOrgCCCByName(String organName);

	// 新增
	void addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO);

	// 修改之前的查询回显机构CCC
	OrganCCCManagemenPO queryOrganCCCManagementByOrganName(String organName);

	// 修改
	void updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO)
			throws Exception;

	// 删除
	void deleteOrganCCC(String organNo);

}
