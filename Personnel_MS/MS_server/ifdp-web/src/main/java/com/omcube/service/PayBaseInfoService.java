package com.omcube.service;

import com.omcube.model.po.EpPayBaseInfoPO;

public interface PayBaseInfoService {

    void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);

    double querySalaryTopByUserNo(String uid, String userNo);
}
