package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.EpCustEduHisPO;

@Mapper
public interface EpCustEduHisMapper {
    
     //新增员工教育经历信息
    void insertEpCustEduHis(EpCustEduHisPO epCustEduHisPO);
    
    //根据主键(用户编号，序号)删除员工教育经历信息
    void deleteEpCustEduHis(EpCustEduHisPO epCustEduHisPO);
}
