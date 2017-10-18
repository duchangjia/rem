package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
<<<<<<< HEAD
=======

import org.apache.ibatis.annotations.*;
>>>>>>> e7c17c0817caa7792f108a702b4e93f22520f115

import com.omcube.model.po.*;

@Mapper
public interface SysPactMapper {
	
	
<<<<<<< HEAD
	//查询合同    通过部门去查询
	List<PactPO> queryPactList(Map<String, String> params);
	
	//查询合同基本信息
	PactPO getPactByPactNo(Map<String, String> params);
	
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
=======
	/**
	 * 查询合同    通过部门去查询
	 * @param params
	 * @return
	 */
	List<PactPO> getPact(Map<String, String> params);
	
	/**
	 * 查询合同基本信息
	 * @param pactNo
	 * @return
	 */
	PactPO getPactByPactNo(String pactNo);
	
	/**
	 * 查询合同变更情况
	 * @param pactNo
	 * @return
	 */
	PactChange getPactChangeByPactNo(String pactNo);
	
	/**
	 * 查询合同续签情况
	 * @param pactNo
	 * @return
	 */
	PactRenew getPactRenewByPactNo(String pactNo);
	
	//添加合同
	@Insert("INSERT ALL INTO EP_PACT_INFO VALUES(#{uId}, #{pactNo},"
			+ "#{paperPactNo},#{pactName},#{organNo},#{derpNo},#{userNo},#{custName}"
			+ ",#{sex},#{cert},#{pactType},#{signTime},#{pactStartTime},#{pactEndTime}"
			+ ",#{pactStutus},#{pactExpires},#{pactStopTime},#{stop_Reason}"
			+ ",#{autoudFlag},#{attachm},#{remark},#{creadBy},#{creadDate},#{updatedBy},#{updatedDate}) ")
	void addPact(PactPO pactPO);
>>>>>>> e7c17c0817caa7792f108a702b4e93f22520f115

}
