package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.CustInfoPO;
@Mapper
public interface CustInfoMapper {
    
    /**
     * 新增员工基本资料
     * @param custInfo
     * @return
     */
    public void insertCustInfo(CustInfoPO custInfo); 
}
