package com.omcube.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.po.SysOrganPO;
import com.omcube.service.OrganService;
import com.omcube.util.SpringUtil;

@Service
public class OrganServiceImpl implements OrganService{
	
	@Autowired
    private SysOrganMapper sysOrganMapper;
	
	
	@Transactional
	@Override
	public void updateOrgan(SysOrganPO sysOrganPO) {
		
		if (sysOrganMapper == null)
    	{
    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
    	} 
		
		sysOrganMapper.updateOrgan(sysOrganPO);
		
		sysOrganMapper.updateOrganDetail(sysOrganPO);
		
		
	}

	
	@Transactional
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
