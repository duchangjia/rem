package com.omcube.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.po.SysOrganPO;
import com.omcube.service.OrganService;
import com.omcube.util.SpringUtil;

@Transactional
public class OrganServiceImpl implements OrganService{
	
	@Autowired
    private SysOrganMapper sysOrganMapper;

	@Override
	public void updateOrgan(SysOrganPO sysOrganPO) {
		
		if (sysOrganMapper == null)
    	{
    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
    	} 
		
		sysOrganMapper.updateOrgan(sysOrganPO);
		
		sysOrganMapper.updateOrganDetail(sysOrganPO);
		
		
	}

	@Override
	public void addOrgan(SysOrganPO sysOrganPO) {
		
		if (sysOrganMapper == null)
    	{
    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
    	} 
		
		sysOrganMapper.addOrgan(sysOrganPO);
		
		sysOrganMapper.addOrganDetail(sysOrganPO);
		
	}
	
	
	
	

}
