package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.CustInfoMapper;
import com.omcube.model.po.CustInfoPO;
import com.omcube.service.CustInfoService;

@Service
public class CustInfoServiceImpl implements CustInfoService {

    @Autowired
    private CustInfoMapper custInfoMapper;

    @Override
    public void insertCustInfo(CustInfoPO custInfo) {
	custInfoMapper.insertCustInfo(custInfo);
    }

    @Override
    public void modCustInf(CustInfoPO custInfo) {
	custInfoMapper.modCustInf(custInfo);
    }

    @Override
    public void delCustInf(String uid, String userNo) {
	custInfoMapper.delCustInf(uid, userNo);
    }

    public CustInfoPO queryCustInfoByUserNo(String uid, String userNo) {
	return custInfoMapper.queryCustInfoByUserNo(uid, userNo);
    }

    @Override
    public List<CustInfoPO> queryCustInfList(String uid) {
	return custInfoMapper.queryCustInfList(uid);
    }

    @Override
    public String queryLineManager(String uid, String userNo) {
	return custInfoMapper.queryLineManager(uid, userNo);
    }

    @Override
    public List<CustInfoPO> queryCustInfBySelf(String uid, String userNo) {
	List<CustInfoPO> custInfoList = custInfoMapper.queryCustInfBySelf(uid, userNo);
	return custInfoList;
    }

    @Override
    public List<CustInfoPO> queryCustInfByNameAndNo(CustInfoPO custInfo) {
	List<CustInfoPO> custInfoList = custInfoMapper.queryCustInfByNameAndNo(custInfo);
	return custInfoList;
    }

}
