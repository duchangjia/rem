package com.omcube.model.mapper;

import java.util.List;

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
    CustInfoPO queryCustInfoByUserNo(@Param(value = "uId") String uId,@Param(value = "userNo") String userNo);
    
    /**
     * 员工基本信息删除
     * @param uId
     * @param userNo
     */
    public void delCustInf(@Param("uId") String uId,@Param("userNo") String userNo);
    
    /**
     * 人事档案列表查询
     * @return
     */
    public List<CustInfoPO> queryCustInfList(String uId);
    
    /**
     * 直线经理查询
     * @param uId
     * @param userNo
     * @return
     */
    public String queryLineManager(@Param("uId") String uId,@Param("userNo") String userNo);
}
