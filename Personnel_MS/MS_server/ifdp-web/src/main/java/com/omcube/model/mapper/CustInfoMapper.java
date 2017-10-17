package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.CustInfoPO;
@Mapper
public interface CustInfoMapper {
    
    /**
     * 员工基本资料新增
     * @param custInfo
     */
    public void insertCustInfo(CustInfoPO custInfo); 
    
    /**
     * 员工基本资料修改
     * @param custInfo
     */
    public void modCustInf(CustInfoPO custInfo);

    /**
     * 员工基本信息查询
     * @param userNo
     */
    public CustInfoPO queryCustInf(@Param("uId") String uId,@Param("userNo") String userNo);
    
    /**
     * 员工基本信息删除
     * @param uId
     * @param userNo
     */
    public void delCustInf(@Param("uId") String uId,@Param("userNo") String userNo);
}
