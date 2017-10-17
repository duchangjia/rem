package com.omcube.service;

import java.util.List;

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

}
