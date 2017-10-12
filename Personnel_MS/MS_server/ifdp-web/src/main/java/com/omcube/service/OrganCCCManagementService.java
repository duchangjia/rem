package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganCCCManagemenPO;

public interface OrganCCCManagementService {
	
	//查询所有列表
	List<OrganCCCManagemenPO> queryOrganCCCManagementList(String uId);

    //新增
    void insertOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO);

    //修改
    Integer updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO);

    //删除
	void deleteOrganCCC(String organNo);

}
