package com.omcube.service.tx;

import com.omcube.model.po.OrganCCCManagemenPO;

public interface OrganCCCManagementService {
	
	//新增
	void insertOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO);
	
	//修改
	Integer updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO);
}
