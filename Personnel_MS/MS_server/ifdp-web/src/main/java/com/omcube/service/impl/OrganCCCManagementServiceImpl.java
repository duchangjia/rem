package com.omcube.service.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.model.request.QueryOrganCCCRequest;
import com.omcube.service.OrganCCCManagementService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@Service
public class OrganCCCManagementServiceImpl
		implements
			OrganCCCManagementService {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private OrganCCCManagementMapper organCCCManagementMapper;

	/**
	 * 查询机构CCC列表
	 * @author 程龙
	 * @param queryOrganCCCRequest
	 * @return
	 */
	@Override
	public List<OrganCCCManagemenPO> queryOrgCCCList(QueryOrganCCCRequest queryOrganCCCRequest) {
		
		if (organCCCManagementMapper == null) {
			organCCCManagementMapper = SpringUtil
					.getBean(OrganCCCManagementMapper.class);
		}

		return organCCCManagementMapper.queryOrgCCCList(queryOrganCCCRequest);
	}

	/**
	 * 新增机构CCC的时候校验是否存在
	 * @author 程龙
	 * @param organName
	 * @return
	 */
	@Override
	public String getOrganNoByName(String uid ,String organName) {
		
		return organCCCManagementMapper.getOrganNoByName(uid,organName);
	}
	
	/**
	 * 新增机构CCC功能
	 * @author 程龙
	 * @param organCCCManagemenPO
	 * @return
	 */
	@Override
	public void addOrgCCC(OrganCCCManagemenPO organCCCManagemenPO) {
		
		// 向EP_DEPT_CCC表插入机构CCC
		organCCCManagementMapper
				.insertOrganCCCManagementEDC(organCCCManagemenPO);

	}
	
	
	/**
	 * 修改之前的查询回显机构CCC
	 * @author 程龙
	 * @param organName
	 * @return
	 */
	@Override
	public OrganCCCManagemenPO queryOrganCCCManagementByOrganName(String uid,
			String organName) {

		return organCCCManagementMapper
				.queryOrganCCCManagementByOrganName(uid,organName);
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


	/**
	 * 物理删除
	 * @author 程龙
	 * @param organNo
	 * @return
	 */
	@Transactional
	@Override
	public Object deleteOrganCCC(String organNo) {
		
		if (StringUtils.isEmpty(organNo)) {
			logger.error("the request params organName is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params organNo is null");
		}
		return organCCCManagementMapper.deleteOrganCCC(organNo);
	}
	
	/**
	 * 校验机构CCC是否存在 根据机构号
	 * @param uid
	 * @param organNo
	 * @return
	 */
	@Override
	public OrganCCCManagemenPO queryOrganCCCManagementByOrganNo(String uid,
			String organNo) {
		
		return organCCCManagementMapper.queryOrganCCCManagementByOrganNo(uid,organNo);
	}

}
