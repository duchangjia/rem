package com.omcube.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

<<<<<<< HEAD
import com.omcube.model.po.*;

public interface PactService {

	List<PactPO> getPactList(String derpNo, String custName, String pactType);

	Object getPactByPactNo(String pactNo);

	List<PactChange> getPactChangeList(String pactNo);

	Object getPactChangeDetail(String pactNo, String changeId);

	List<PactRenew> getPactRenewList(String pactNo);

	Object getPactRenewDetail(String pactNo, String renewId);

	void addPact(PactPO pactPO);

	void addPactChange(PactChange pactChange);

	void addPactRenew(PactRenew pactRenew);

	void deletePact(String pactNo);

	void deletePactChange(String pactNo, String changeId);

	void deletePactRenew(String pactNo, String renewId);

	void updatePact(PactPO pactPO);

	void updatePactChange(PactChange pactChange);

	void updatePactRenew(PactRenew pactRenew);
=======
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
>>>>>>> e7c17c0817caa7792f108a702b4e93f22520f115

	public void addPact(PactPO pactPO) {
		pactMapper.addPact(pactPO);
	}

}
