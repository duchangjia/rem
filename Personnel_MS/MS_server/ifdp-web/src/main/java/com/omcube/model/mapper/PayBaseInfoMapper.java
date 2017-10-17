package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.EpPayBaseInfoPO;

@Mapper
public interface PayBaseInfoMapper {

    void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);

    double querySalaryTopByUserNo(@Param(value = "uid") String uid, @Param(value = "userNo") String userNo);
}
