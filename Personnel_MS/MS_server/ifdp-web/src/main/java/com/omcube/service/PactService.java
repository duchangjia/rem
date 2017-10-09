package com.omcube.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.SysPactMapper;
import com.omcube.model.po.PactPO;

@Component // 泛指组件
public class PactService {
	@Autowired // 它可以对类成员变量、方法及构造函数进行标注，
	private SysPactMapper pactMapper;

	public List<PactPO> getPactList(String derpNo, String custName, String pactType) {
		custName = "%" + custName + "%";
		if (pactType == null) {
			pactType = "%";
		}
		Map<String, String> params = new HashMap<String, String>();
		params.put("derpNo", derpNo);
		params.put("custName", custName);
		params.put("pactType", pactType);
		return pactMapper.getPact(params);
	}

	public Object getPactByPactNo(String pactNo) {
		return pactMapper.getPactByPactNo(pactNo);
	}

	public Object getPactChangeByPactNo(String pactNo) {
		return pactMapper.getPactChangeByPactNo(pactNo);
	}

	public Object getPactRenewByPactNo(String pactNo) {
		return pactMapper.getPactRenewByPactNo(pactNo);
	}

	public void addPact(PactPO pactPO) {
		pactMapper.addPact(pactPO);
	}

}
