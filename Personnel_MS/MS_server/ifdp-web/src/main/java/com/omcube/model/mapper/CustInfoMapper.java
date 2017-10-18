package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.CustInfoPO;
@Mapper
public interface CustInfoMapper {
    
    /**
     * 新增员工基本资料
     * @param custInfo
     * @return
     */
    public void insertCustInfo(CustInfoPO custInfo); 
    
    CustInfoPO queryCustInfoByUserNo(@Param(value = "uid") String uid,@Param(value = "userNo") String userNo);
}
