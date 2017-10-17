package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.PayBaseInfoMapper;
import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.request.QueryPayBaseInfoRequest;
import com.omcube.model.response.PayBaseInfoListResponse;
import com.omcube.service.PayBaseInfoService;

@Service
public class PayBaseInfoServiceImpl implements PayBaseInfoService {

    @Autowired
    private PayBaseInfoMapper payBaseInfoMapper;

    @Override
    public void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo) {

	payBaseInfoMapper.addPayBaseInfo(epPayBaseInfo);

    }

    @Override
    public double querySalaryTopByUserNo(String uid, String userNo) {

	return payBaseInfoMapper.querySalaryTopByUserNo(uid, userNo);

    }

    @Override
    public List<PayBaseInfoListResponse> queryPayBaseInfoList(QueryPayBaseInfoRequest queryPayBaseInfoReq) {

	return payBaseInfoMapper.queryPayBaseInfoList(queryPayBaseInfoReq);

    }

    @Override
    public EpPayBaseInfoPO queryPayBaseInfoDetail(String uid, String userNo) {
	
	return payBaseInfoMapper.queryPayBaseInfoDetail(uid, userNo);
    }

}
