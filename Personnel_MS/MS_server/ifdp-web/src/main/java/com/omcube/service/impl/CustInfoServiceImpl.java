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
    public void modCustInf(CustInfoPO custInfo) {
	custInfoMapper.modCustInf(custInfo);
    }

    @Override
    public CustInfoPO queryCustInf(String uId,String userNo) {
	return custInfoMapper.queryCustInf(uId,userNo);
    }

    @Override
    public void delCustInf(String uId, String userNo) {
	custInfoMapper.delCustInf(uId, userNo);
    }
    
}
