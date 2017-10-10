package com.omcube.service.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;
import com.omcube.service.OrganService;
import com.omcube.util.SpringUtil;
@Service
public class OrganServiceImpl implements OrganService{
	
	@Autowired
    private SysOrganMapper sysOrganMapper;
	
	@Override
	public List<OrganTree> queryOrganList(String organNo) {
		
		return sysOrganMapper.queryOrganList(organNo);
	}


	@Override
	public SysOrganPO queryOrganAndParentOrganDetail(String organNo) {
		
		return sysOrganMapper.queryOrganAndParentOrganDetail(organNo);
	}


	@Override
	public List<SysOrganPO> queryChildOrganDetail(String organNo) {
		
		return sysOrganMapper.queryChildOrganDetail(organNo);
	}


	@Override
	public List<SysUserPO> queryOrganMember(String organNo) {
		
		return sysOrganMapper.queryOrganMember(organNo);
	}

	@Transactional
	@Override
	public void deleteOrganInfo(String organNo) {
		
		sysOrganMapper.deleteOrganInfo(organNo);
		
	}

	@Transactional
	@Override
	public void addOrganMember(SysUserPO sysUserPO) {
		
		sysOrganMapper.addOrganMember(sysUserPO);
	}

	@Transactional
	@Override
	public void deleteOrganMember(String userNo) {
		
		sysOrganMapper.deleteOrganMember(userNo);
		
	}
	
	@Transactional
	@Override
	public void modifyOrganInfo(SysOrganPO sysOrganPO) {
		
		sysOrganMapper.modifyOrgan(sysOrganPO);
		
		sysOrganMapper.modifyOrganDetail(sysOrganPO);
		
		
	}

	
	@Transactional
	@Override
	public void addOrgan(SysOrganPO sysOrganPO) {
		
		sysOrganMapper.addOrgan(sysOrganPO);
		
		sysOrganMapper.addOrganDetail(sysOrganPO);
		
	}


	@Override
	public SysOrganPO queryCurrentOrgan(String organNo) {
		
		return sysOrganMapper.queryCurrentOrgan(organNo);
	}
	
	

}
