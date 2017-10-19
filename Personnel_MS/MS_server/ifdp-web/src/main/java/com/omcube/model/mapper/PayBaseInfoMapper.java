package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

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

    EpPayBaseInfoPO queryPayBaseInfoDetail(@Param(value = "uid") String uid, @Param(value = "userNo") String userNo);

    void updatePayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);

    void deletePayBaseInfo(Map<String, String> params);

    long queryPayBaseInfoCount(String uid);

    List<EpPayBaseInfoPO> queryPayBaseInfoLimit(@Param(value = "startNum") long startNum,
	    @Param(value = "size") long size, @Param(value = "uid") String uid);

    void addPayBaseInfoList(@Param(value = "payBaseInfoList") List<EpPayBaseInfoPO> payBaseInfoList);
}
