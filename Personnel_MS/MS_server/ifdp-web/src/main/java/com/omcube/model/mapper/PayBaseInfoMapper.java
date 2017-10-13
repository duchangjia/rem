package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.EpPayBaseInfoPO;

@Mapper
public interface PayBaseInfoMapper {

    void addPayBaseInfo(EpPayBaseInfoPO epPayBaseInfo);
}
