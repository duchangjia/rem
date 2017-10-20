package com.omcube.web.controller;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.CustContactPO;
import com.omcube.model.po.SysLoginCtrl;
//import com.omcube.model.request.AddCustContactsRequest;
import com.omcube.service.CustContcatService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/CustContact")
public class CustContactController {
    @Autowired
    private CustContcatService custContactService;

    /**
     * 1.添加员工社会关系
     * @param custContact
     * @return
     */
    @PostMapping(value = "/addCustContact")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addCustContact(CustContactPO custContact) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String createdBy = sysLoginCtrl.getCreatedBy();
	custContact.setUid(uid);
	custContact.setCreatedBy(createdBy);
	//校验
	if (StringUtils.isEmpty(custContact)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}

	if (StringUtils.isEmpty(custContact.getUid()) || StringUtils.isEmpty(custContact.getUserNo())
		|| StringUtils.isEmpty(custContact.getContactId())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid,userNo or contactId is null");
	}
	if (!custContact.getTelphone().matches(ConstantUtil.PHONE_REG)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    stringErrorFormat(custContact.getTelphone()));
	}
	if (!custContact.getContactName().matches(ConstantUtil.NAME_REG)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    stringErrorFormat(custContact.getContactName()));
	}
	//查询插入的数据是否已存在
	if (custContactService.queryCustContact(custContact.getUid(), custContact.getUserNo(),
		custContact.getContactId()) != null) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "Some data already exists!");
	}
	//执行添加操作
	custContactService.addCustContact(custContact);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 2.更新员工关系
     * @param custContact
     * @return
     */
    @PutMapping(value = "/updateCustContact")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object updateCustContact(CustContactPO custContact) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	custContact.setUid(uid);
	custContact.setUpdatedBy(updatedBy);
	//校验
	if (StringUtils.isEmpty(custContact)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	if (StringUtils.isEmpty(custContact.getUid()) || StringUtils.isEmpty(custContact.getUserNo())
		|| StringUtils.isEmpty(custContact.getContactId())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid,userNo or contactId is null");
	}
	if (!custContact.getTelphone().matches(ConstantUtil.PHONE_REG)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    stringErrorFormat(custContact.getTelphone()));
	}
	if (!custContact.getContactName().matches(ConstantUtil.NAME_REG)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    stringErrorFormat(custContact.getContactName()));
	}
	//查询更新的数据是否存在
	if (custContactService.queryCustContact(custContact.getUid(), custContact.getUserNo(),
		custContact.getContactId()) == null) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "Data needed to be updated does not exist!");
	}
	//执行更新操作
	custContactService.updateCustContact(custContact);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 3.多条关系数据的插入
     * @param addCustContactsRequest
     * @return
     */
    /*@PostMapping(value="/addCustContacts")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addCustContacts(AddCustContactsRequest addCustContactsRequest){
    List<CustContactPO> list =addCustContactsRequest.getCustContacts();
    //从session 获取uid createdBy
    SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
    String uid = sysLoginCtrl.getUid();
    String createdBy = sysLoginCtrl.getCreatedBy();
    //遍历每一条数据
    for (CustContactPO custContactPO : list) {
        custContactPO.setUid(uid);
        custContactPO.setCreatedBy(createdBy);
        //校验
      //校验
    	if(StringUtils.isEmpty(custContactPO)){
    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
    		    "the request body is null");
    	}
    	if (StringUtils.isEmpty(custContactPO.getUid()) || StringUtils.isEmpty(custContactPO.getUserNo()) || StringUtils.isEmpty(custContactPO.getContactId())) {
    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
    		    "the param uid,userNo or contactId is null");
    	}
    	if (!custContactPO.getTelphone().matches(ConstantUtil.PHONE_REG)) {
    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
    		    stringErrorFormat(custContactPO.getTelphone()));
    	}
    	if (!custContactPO.getContactName().matches(ConstantUtil.NAME_REG)) {
    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
    		    stringErrorFormat(custContactPO.getContactName()));
    	}
    
    	//查询更新的数据是否存在
    	if(custContactService.queryCustContact(custContactPO.getUid(), custContactPO.getUserNo(), custContactPO.getContactId()) !=null){
    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
    		    "Some data already exists!");
    	}
    }
    //执行更新操作
    custContactService.addCustContacts(list);
    return JSONResultUtil.setSuccess();
    }*/
    /**
     * 4.查询一个员工所有的关系
     * @param userNo
     * @return
     */
    @GetMapping(value = "/queryCustContacts/{userNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCustContacts(@PathVariable String userNo) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(userNo)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid or userNo is null");
	}
	return JSONResultUtil.setSuccess(custContactService.queryCustContacts(uid, userNo));
    }

    /**
     * 5.删除员工关系
     * @param userNo
     * @param contactId
     * @return
     */
    @DeleteMapping(value = "/deleteCustContact/{userNo}/{contactId}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deleteCustContact(@PathVariable String userNo, @PathVariable String contactId) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(userNo) || StringUtils.isEmpty(contactId)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid,userNo or contactId is null");
	}
	custContactService.deleteCustContact(uid, userNo, contactId);
	return JSONResultUtil.setSuccess();

    }

    private String stringErrorFormat(String param) {
	return String.format("the request param %s is invalid", param);
    }

}
