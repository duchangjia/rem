package com.omcube.service.impl;

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
    public CustInfoPO queryCustInfoByUserNo(String uid, String userNo) {
	return custInfoMapper.queryCustInfoByUserNo(uid, userNo);
    }

}
