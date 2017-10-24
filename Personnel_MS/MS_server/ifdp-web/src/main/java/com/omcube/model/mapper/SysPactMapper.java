package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;


import com.omcube.model.po.*;

@Mapper
public interface SysPactMapper {
	
	
	//查询合同    通过部门去查询
	List<PactPO> getPactList(Map<String, String> params);
	
	//查询合同基本信息
	PactPO getPactDetail(Map<String, String> params);
	
	//查询合同变更情况
	List<PactChange> getPactChangeList(Map<String, String> params);
	
	//查询合同变更详情
	Object getPactChangeDetail(Map<String, String> params);
	
	//查询合同续签情况
	List<PactRenew> getPactRenewList(Map<String, String> params);
	
	//查询合同续签详情
	Object getPactRenewDetail(Map<String, String> params);
	
	//添加合同
	void addPact(PactPO pactPO);
	
	//添加合同变更信息
	void addPactChange(PactChange pactChange);
	
	//添加合同续约信息
	void addPactRenew(PactRenew pactRenew);

	//删除合同
	void deletePact(Map<String, String> params);
	
	//删除合同变更信息
	void deletePactChange(Map<String, String> params);
	
	//删除合同续约信息
	void deletePactRenew(Map<String, String> params);
	
	//修改合同信息
	void updatePact(PactPO pactPO);
	
	//修改合同变更信息
	void updatePactChange(PactChange pactChange);
	
	//修改合同续签信息
	void updatePactRenew(PactRenew pactRenew);

}
