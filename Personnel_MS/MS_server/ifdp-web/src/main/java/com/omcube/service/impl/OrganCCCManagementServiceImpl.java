package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.mapper.SysRoleMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.service.OrganCCCManagementService;
import com.omcube.util.SpringUtil;

@Service
public class OrganCCCManagementServiceImpl
		implements
			OrganCCCManagementService {
	@Autowired
	private OrganCCCManagementMapper organCCCManagementMapper;

	// 查询机构CCC所有列表
	@Override
	public List<OrganCCCManagemenPO> queryOrgCCCList(String uId) {
		return organCCCManagementMapper.queryOrgCCCList(uId);
	}

	// 新增机构CCC的校验查询
	@Override
	public Object queryOrgCCCByName(String organName) {
		return organCCCManagementMapper.queryOrgCCCByName(organName);
	}

	@Override
	public void addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) {

		// 向EP_DEPT_CCC表插入机构CCC
		organCCCManagementMapper
				.insertOrganCCCManagementEDC(organCCCManagemenPO);

	}

	// 修改之前的查询回显机构CCC
	@Override
	public OrganCCCManagemenPO queryOrganCCCManagementByOrganName(
			String organName) {

		if (organCCCManagementMapper == null) {
			organCCCManagementMapper = SpringUtil
					.getBean(OrganCCCManagementMapper.class);
		}

		return organCCCManagementMapper
				.queryOrganCCCManagementByOrganName(organName);
	}

	// 修改
	@Override
	public void updateOrganCCCManagement(
			OrganCCCManagemenPO organCCCManagemenPO) throws Exception {

		if (organCCCManagementMapper == null) {
			organCCCManagementMapper = SpringUtil
					.getBean(OrganCCCManagementMapper.class);
		}

		organCCCManagementMapper
				.updateOrganCCCManagementEDC(organCCCManagemenPO);
	}

	// 物理删除
	@Transactional
	@Override
	public void deleteOrganCCC(String organNo) {
		organCCCManagementMapper.deleteOrganCCC(organNo);
	}

}
