package com.omcube.service;

import java.util.List;

import com.omcube.model.po.CustContactPO;

public interface CustContcatService {

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
     * 3.多条关系数据的插入
     * @param list
     */
    void addCustContacts(List<CustContactPO> list);
    
    /**
     * 4.查询一个员工所有的关系
     * @param uId
     * @param userNo
     * @return
     */
    Object queryCustContacts(String uId, String userNo);

    /**
     * 5.删除员工关系
     * @param uId
     * @param userNo
     * @param contactId
     */
    void deleteCustContact(String uId, String userNo, String contactId);
    
    /**
     * 6.查询一个员工的一个关系
     * @param uId
     * @param userNo
     * @param contactId
     * @return
     */
    Object queryCustContact(String uId, String userNo, String contactId);
}
