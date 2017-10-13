package com.omcube.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.EpCustEduHisMapper;
import com.omcube.model.po.EpCustEduHisPO;
import com.omcube.service.EpCustEduHisService;
@Service
@Transactional
public class EpCustEduHisServiceImpl implements EpCustEduHisService{
    
    @Autowired
    private EpCustEduHisMapper epCustEduHisMapper;
    
    //新增员工教育经历信息
    @Override
    public void insertEpCustEduHis(EpCustEduHisPO epCustEduHisPO){
	epCustEduHisMapper.insertEpCustEduHis(epCustEduHisPO);
    }
    

}
