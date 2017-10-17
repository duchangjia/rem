package com.omcube.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.EpCustWorkHisMapper;
import com.omcube.model.po.EpCustWorkHisPO;
import com.omcube.service.EpCustWorkHisService;

@Service
@Transactional
public class EpCustWorkHisServiceImpl implements EpCustWorkHisService{

    @Autowired
    private EpCustWorkHisMapper epCustWorkHisMapper;
    
    //新增员工工作信息
    @Override
    public void insertEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO){
	epCustWorkHisMapper.insertEpCustWorkHis(epCustWorkHisPO);
    }
    
    //根据主键（用户编号，序号）删除员工工作经历信息
    public void deleteEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO){
	epCustWorkHisMapper.deleteEpCustWorkHis(epCustWorkHisPO);
    }
}
