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
    public void addBillInf(OrganBillInfoPO billInfoPO) {
	billiInfoMapper.addBillInf(billInfoPO);
    }

    @Override
    public void modBillInf(OrganBillInfoPO billInfoPO) {
	billiInfoMapper.modBillInf(billInfoPO);
    }

    @Override
    public List<OrganBillInfoPO> queryBillInfoList(String uId) {
	return billiInfoMapper.queryBillInfoList(uId);
    }

    @Override
    public List<OrganBillInfoPO> queryBillInfoByName(String uId,String organName) {
	return billiInfoMapper.queryBillInfoByName(uId,organName);
    }

    @Override
    public OrganBillInfoPO queryBillInfDtl(String uId, String organNo) {
	return billiInfoMapper.queryBillInfDtl(uId, organNo);
    }

}
