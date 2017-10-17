package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.EpCustWorkHisPO;

@Mapper
public interface EpCustWorkHisMapper {
    
     //新增员工工作经历信息
    void insertEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO);
    
    //根据主键（用户编号，序号）删除员工工作经历信息
    void deleteEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO);
}
