package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.*;

import com.omcube.model.po.*;

@Mapper
public interface SysPactMapper {
	
	
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

}
