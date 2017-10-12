package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.service.OrganCCCManagementService;

@Service
public class OrganCCCManagementServiceImpl
		implements
			OrganCCCManagementService {
	@Autowired
	private OrganCCCManagementMapper organCCCManagementMapper;
	
	@Override
	public List<OrganCCCManagemenPO> queryOrganCCCManagementList(String uId) {
		return organCCCManagementMapper.queryOrganCCCManagementList(uId);
	}

	@Transactional
	@Override
	public void insertOrganCCCManagement(
			OrganCCCManagemenPO organCCCManagemenPO) {

		organCCCManagementMapper
				.insertOrganCCCManagementISOB(organCCCManagemenPO);
		organCCCManagementMapper
				.insertOrganCCCManagementEDC(organCCCManagemenPO);

	}

	@Transactional
	@Override
	public Integer updateOrganCCCManagement(
			OrganCCCManagemenPO organCCCManagemenPO) {
		Integer i;
		i = organCCCManagementMapper
				.updateOrganCCCManagementISOB(organCCCManagemenPO);
		i = organCCCManagementMapper
				.updateOrganCCCManagementEDC(organCCCManagemenPO);
		return i;
	}

	@Transactional
	@Override
	public void deleteOrganCCC(String organNo) {
		organCCCManagementMapper.deleteOrganCCC(organNo);
	}


}
