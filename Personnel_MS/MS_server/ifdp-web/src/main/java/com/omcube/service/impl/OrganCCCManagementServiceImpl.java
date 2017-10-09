package com.omcube.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.service.tx.OrganCCCManagementService;

@Service
public class OrganCCCManagementServiceImpl implements OrganCCCManagementService {
	@Autowired
	private OrganCCCManagementMapper organCCCManagementMapper;
	
	@Transactional
	@Override
	public void insertOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO) {
		
		organCCCManagementMapper.insertOrganCCCManagement(organCCCManagemenPO);
		organCCCManagementMapper.insertOrganCCCManagement1(organCCCManagemenPO);
		
	}
	
	@Transactional
	@Override
	public Integer updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO) {
		Integer i;
		i=organCCCManagementMapper.updateOrganCCCManagement(organCCCManagemenPO);
		i=organCCCManagementMapper.updateOrganCCCManagement1(organCCCManagemenPO);
		return i;
	}

}
