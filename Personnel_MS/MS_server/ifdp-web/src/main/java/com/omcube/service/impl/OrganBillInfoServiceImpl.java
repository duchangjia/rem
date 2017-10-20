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
    public List<OrganBillInfoPO> queryBillInfoList(String uid) {
	return billiInfoMapper.queryBillInfoList(uid);
    }

    @Override
    public List<OrganBillInfoPO> queryBillInfoByName(String uid, String organName) {
	return billiInfoMapper.queryBillInfoByName(uid, organName);
    }

    @Override
    public OrganBillInfoPO queryBillInfDtl(String uid, String organNo) {
	return billiInfoMapper.queryBillInfDtl(uid, organNo);
    }

}
