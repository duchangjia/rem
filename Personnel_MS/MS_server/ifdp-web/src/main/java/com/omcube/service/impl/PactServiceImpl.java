package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.SysPactMapper;
import com.omcube.model.po.*;
import com.omcube.service.PactService;

@Service // 泛指组件
public class PactServiceImpl implements PactService{
	@Autowired // 它可以对类成员变量、方法及构造函数进行标注，
	private SysPactMapper pactMapper;
	
	private final String isDelete = "0";
	//uid租户ID
	private final String auid = "0001";
	
	@Override
	public List<PactPO> getPactList(String derpNo, String custName, String pactType) {
		String uid = auid;
		custName = "%" + custName + "%";
		if (pactType == null) {
			pactType = "%";
		}
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("derpNo", derpNo);
		params.put("custName", custName);
		params.put("pactType", pactType);
		return pactMapper.queryPactList(params);
	}

	@Override
	public Object getPactByPactNo(String pactNo) {
		String uid = auid;
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		return pactMapper.getPactByPactNo(params);
	}
	
	@Override
	public List<PactChange> getPactChangeList(String pactNo) {
		String uid = auid;
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		return pactMapper.getPactChangeList(params);
	}
	
	@Override
	public Object getPactChangeDetail(String pactNo, String changeId) {
		String uid = auid;
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		params.put("changeId", changeId);
		return pactMapper.getPactChangeDetail(params);
	}
	
	@Override
	public List<PactRenew> getPactRenewList(String pactNo) {
		String uid = auid;
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		return pactMapper.getPactRenewList(params);
	}
	
	@Override
	public Object getPactRenewDetail(String pactNo, String renewId) {
		String uid = auid;
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		params.put("renewId", renewId);
		return pactMapper.getPactRenewDetail(params);
	}
	
	@Override
	public void addPact(PactPO pactPO) {
		pactPO.setUid(auid);
		pactMapper.addPact(pactPO);
	}

	@Override
	public void addPactChange(PactChange pactChange) {
		pactChange.setUid(auid);
		pactMapper.addPactChange(pactChange);
	}

	@Override
	public void addPactRenew(PactRenew pactRenew) {
		pactRenew.setUid(auid);
		pactMapper.addPactRenew(pactRenew);
	}

	@Override
	public void deletePact(String pactNo) {
		String uid = auid;
		String isDelete = "0";
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		params.put("isDelete", isDelete);
		pactMapper.deletePact(params);
	}

	@Override
	public void deletePactChange(String pactNo, String changeId) {
		String uid = auid;
		String isDelete = "0";
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		params.put("changeId", changeId);
		params.put("isDelete", isDelete);
		pactMapper.deletePactChange(params);
	}

	@Override
	public void deletePactRenew(String pactNo, String renewId) {
		String uid = auid;
		String isDelete = "0";
		Map<String, String> params = new HashMap<String, String>();
		params.put("uid", uid);
		params.put("pactNo", pactNo);
		params.put("renewId", renewId);
		params.put("isDelete", isDelete);
		pactMapper.deletePactRenew(params);
	}

	@Override
	public void updatePact(PactPO pactPO) {
		pactPO.setUid(auid);
		pactMapper.updatePact(pactPO);
	}

	@Override
	public void updatePactChange(PactChange pactChange) {
		pactChange.setUid(auid);
		pactMapper.updatePactChange(pactChange);
	}

	@Override
	public void updatePactRenew(PactRenew pactRenew) {
		pactRenew.setUid(auid);
		pactMapper.updatePactRenew(pactRenew);
	}
	
}
