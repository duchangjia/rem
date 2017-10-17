package com.omcube.service;

import java.util.List;
import java.util.Map;

import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.request.QueryPayBaseInfoRequest;
import com.omcube.model.response.PayBaseInfoListResponse;

public interface PayBaseInfoService {

    void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);

    double querySalaryTopByUserNo(String uid, String userNo);

    List<PayBaseInfoListResponse> queryPayBaseInfoList(QueryPayBaseInfoRequest queryPayBaseInfoReq);

    EpPayBaseInfoPO queryPayBaseInfoDetail(String uid, String userNo);
    
    void updatePayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);
    
    void deletePayBaseInfo(Map<String, String> params);
}
