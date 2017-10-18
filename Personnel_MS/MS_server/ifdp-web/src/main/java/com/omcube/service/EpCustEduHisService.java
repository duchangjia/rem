package com.omcube.service;

import com.omcube.model.po.EpCustEduHisPO;

public interface EpCustEduHisService {
    
    //新增员工教育经历信息
    public void insertEpCustEduHis(EpCustEduHisPO epCustEduHisPO);
    
    //根据主键(用户编号，序号)删除员工教育经历信息
    public void deleteEpCustEduHis(EpCustEduHisPO epCustEduHisPO);

}
