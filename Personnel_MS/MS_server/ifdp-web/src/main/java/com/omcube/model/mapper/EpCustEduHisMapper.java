package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.EpCustEduHisPO;

@Mapper
public interface EpCustEduHisMapper {
     //新增员工教育经历信息
    void insertEpCustEduHis(EpCustEduHisPO epCustEduHisPO);
}
