package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.request.QueryPayBaseInfoRequest;
import com.omcube.model.response.PayBaseInfoListResponse;

@Mapper
public interface PayBaseInfoMapper {

    void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);

    double querySalaryTopByUserNo(@Param(value = "uid") String uid, @Param(value = "userNo") String userNo);
    
    List<PayBaseInfoListResponse> queryPayBaseInfoList(QueryPayBaseInfoRequest queryPayBaseInfoReq);
}
