package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.OrganBillInfoMapper;
import com.omcube.model.po.OrganBillInfoPO;
import com.omcube.service.OrganBillInfoService;

@Service
public class OrganBillInfoServiceImpl implements OrganBillInfoService {

    @Autowired
    private OrganBillInfoMapper billiInfoMapper;

    @Override
    public void addOrganBillInfo(OrganBillInfoPO billInfoPO)
    {
	billiInfoMapper.addOrganBillInfo(billInfoPO);
    }

    @Override
    public void updateOrganBillInfo(OrganBillInfoPO billInfoPO)
    {
	billiInfoMapper.updateOrganBillInfo(billInfoPO);
    }

    @Override
    public List<OrganBillInfoPO> queryBillInfoList(String uId)
    {
	return billiInfoMapper.queryBillInfoList(uId);
    }

    @Override
    public List<OrganBillInfoPO> queryBillInfoByName(OrganBillInfoPO billInfoPO)
    {
	return billiInfoMapper.queryBillInfoByName(billInfoPO);
    }

    @Override
    public OrganBillInfoPO queryBillInfo(String organNo)
    {
	return billiInfoMapper.queryBillInfo(organNo);
    }

}
