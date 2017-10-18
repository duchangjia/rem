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
    public void delCustInf(String uId, String userNo) {
	custInfoMapper.delCustInf(uId, userNo);
    }
    
    public CustInfoPO queryCustInfoByUserNo(String uId, String userNo) {
	return custInfoMapper.queryCustInfoByUserNo(uId, userNo);
    }

    @Override
    public List<CustInfoPO> queryCustInfList(String uId) {
	return custInfoMapper.queryCustInfList(uId);
    }

    @Override
    public String queryLineManager(String uId, String userNo) {
	return custInfoMapper.queryLineManager(uId, userNo);
    }

}
