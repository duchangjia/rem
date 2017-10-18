package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.CustContactPO;

@Mapper
public interface CustContactMapper {
    
    /**
     * 1.添加员工社会关系
     * @param custContact
     */
    void addCustContact(CustContactPO custContact);

    /**
     * 2.更新员工关系
     * @param custContact
     */
    void updateCustContact(CustContactPO custContact);
    
    /**
     * 4.查询一个员工所有的关系
     * @param uId
     * @param userNo
     * @return
     */
    List<CustContactPO> queryCustContacts(@Param("uId") String uId,@Param("userNo") String userNo);

    /**
     * 5.删除员工关系
     */
    void deleteCustContact(@Param("uId") String uId,@Param("userNo") String userNo,@Param("contactId") String contactId);
    
    /**
     * 6.查询一个员工的一个关系
     * @param uId
     * @param userNo
     * @param contactId
     * @return
     */
    Object queryCustContact(@Param("uId") String uId,@Param("userNo") String userNo,@Param("contactId") String contactId);

}
