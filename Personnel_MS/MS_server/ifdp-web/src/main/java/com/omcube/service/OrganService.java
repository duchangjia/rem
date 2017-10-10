package com.omcube.service;

import java.util.List;

import com.omcube.model.po.SysOrganPO;

public interface OrganService {
	

	public void modifyOrganInfo(SysOrganPO sysOrganPO);

	public void addOrgan(SysOrganPO sysOrganPO);
	
	List<String> queryAllChildrenOrganNoes(String organNo);

}
