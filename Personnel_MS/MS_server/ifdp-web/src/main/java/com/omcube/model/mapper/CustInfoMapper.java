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
    CustInfoPO queryCustInfoByUserNo(@Param(value = "uid") String uid, @Param(value = "userNo") String userNo);

    /**
     * 员工基本信息删除
     * @param uid
     * @param userNo
     */
    public void delCustInf(@Param("uid") String uid, @Param("userNo") String userNo);

    /**
     * 人事档案列表查询
     * @return
     */
    public List<CustInfoPO> queryCustInfList(String uid);

    /**
     * 直线经理查询
     * @param uid
     * @param userNo
     * @return
     */
    public String queryLineManager(@Param("uid") String uid, @Param("userNo") String userNo);

    /**
     * 员工自助_员工信息查询
     * @param uid
     * @param userNo
     * @return
     */
    public List<CustInfoPO> queryCustInfBySelf(@Param("uid") String uid, @Param("userNo") String userNo);

    /**
     * 员工自助_员工便捷查询
     * @return
     */
    public List<CustInfoPO> queryCustInfByNameAndNo(CustInfoPO custInfo);

}
