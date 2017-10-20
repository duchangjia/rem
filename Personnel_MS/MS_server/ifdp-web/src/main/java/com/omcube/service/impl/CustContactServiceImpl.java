package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.CustContactMapper;
import com.omcube.model.po.CustContactPO;
import com.omcube.service.CustContcatService;

@Component
public class CustContactServiceImpl implements CustContcatService {
    @Autowired
    private CustContactMapper custContactMapper;

    /**
     * 1.添加员工社会关系
     */
    public void addCustContact(CustContactPO custContact) {
	custContactMapper.addCustContact(custContact);
    }

    /**
     * 2.更新员工关系
     */
    public void updateCustContact(CustContactPO custContact) {
	custContactMapper.updateCustContact(custContact);
    }

    /**
     * 3.多条关系数据的插入
     */
    @Transactional
    public void addCustContacts(List<CustContactPO> list) {
	for (CustContactPO custContactPO : list) {
	    custContactMapper.addCustContact(custContactPO);
	}
    }

    /**
     * 4.查询一个员工所有的关系
     */
    public Object queryCustContacts(String uid, String userNo) {
	return custContactMapper.queryCustContacts(uid, userNo);
    }

    /**
     * 5.删除员工关系
     */
    public void deleteCustContact(String uid, String userNo, String contactId) {
	custContactMapper.deleteCustContact(uid, userNo, contactId);
    }

    /**
     * 6.查询一个员工的一个关系
     */
    public Object queryCustContact(String uid, String userNo, String contactId) {
	return custContactMapper.queryCustContact(uid, userNo, contactId);
    }

}
