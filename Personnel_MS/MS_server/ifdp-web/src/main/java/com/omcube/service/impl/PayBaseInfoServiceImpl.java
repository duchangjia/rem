package com.omcube.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.PayBaseInfoMapper;
import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.service.PayBaseInfoService;

@Service
public class PayBaseInfoServiceImpl implements PayBaseInfoService {

    @Autowired
    private PayBaseInfoMapper payBaseInfoMapper;

    @Override
    public void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo) {

	payBaseInfoMapper.addPayBaseInfo(epPayBaseInfo);

    }

}
