package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.omcube.model.po.*;

@Mapper
public interface SysPactMapper {
	
	//查询合同    通过部门去查询     c查询语句
	@Select("select * FROM EP_PACT_INFO WHERE 1=1 and DERP_NO = {derpNo} and CUST_NAME like #{custName} and PACT_TYPE = #{pactType}")
	@Results({
			@Result( id = true, column = "derp_no", property = "derpNo"),
			@Result( column = "pact_no", property = "pactNo"),
			@Result( column = "paper_pact_no", property = "paperPactNo"),
			@Result( column = "pact_name", property = "pactName"),
			@Result( column = "organ_no", property = "organNo"),
			@Result( column = "user_no", property = "userNo"),
			@Result( column = "cust_name", property = "custName"),
			@Result( column = "sex", property = "sex"),
			@Result( column = "cert", property = "cert"),
			@Result( column = "pact_type", property = "pactType"),
			@Result( column = "sign_time", property = "signTime"),
			@Result( column = "pact_start_time", property = "pactStartTime"),
			@Result( column = "pact_end_time", property = "pactEndTime"),
			@Result( column = "pact_status", property = "pactStatus"),
			@Result( column = "pact_expires", property = "pactExpires"),
			@Result( column = "pact_stop_time", property = "pactStopTime"),
			@Result( column = "stop_reason",  property = "stopReason"),
			@Result( column = "autoud_flag", property = "autoudFlag"),
			@Result( column = "attachm", property = "attachm"),
			@Result( column = "remark", property = "remark"),
			@Result( column = "greated_by", property = "greatedBy"),
			@Result( column = "greated_date", property = "greatedDate"),
			@Result( column = "updated_by", property = "updatedBy"),
			@Result( column = "updated_date", property = "updateDate")
	})
	List<PactPO> getPact(String derpNo,String custName,String pactType);
	
	//合同基本信息
	@Select("select * from EP_PACT_INFO where PACT_NO = #{pactNo}")
	@Results({
			@Result( id = true, column = "pact_no", property = "pactNo"),
			@Result( column = "paper_pact_no", property = "paperPactNo"),
			@Result( column = "pact_name", property = "pactName"),
			@Result( column = "organ_no", property = "organNo"),
			@Result( column = "derp_no", property = "derpNo"),
			@Result( column = "user_no", property = "userNo"),
			@Result( column = "cust_name", property = "custName"),
			@Result( column = "sex", property = "sex"),
			@Result( column = "cert", property = "cert"),
			@Result( column = "pact_type", property = "pactType"),
			@Result( column = "sign_time", property = "signTime"),
			@Result( column = "pact_start_time", property = "pactStartTime"),
			@Result( column = "pact_end_time", property = "pactEndTime"),
			@Result( column = "pact_status", property = "pactStatus"),
			@Result( column = "pact_expires", property = "pactExpires"),
			@Result( column = "pact_stop_time", property = "pactStopTime"),
			@Result( column = "stop_reason",  property = "stopReason"),
			@Result( column = "autoud_flag", property = "autoudFlag"),
			@Result( column = "attachm", property = "attachm"),
			@Result( column = "remark", property = "remark"),
			@Result( column = "greated_by", property = "greatedBy"),
			@Result( column = "greated_date", property = "greatedDate"),
			@Result( column = "updated_by", property = "updatedBy"),
			@Result( column = "updated_date", property = "updatedDate")
	})
	PactPO getPactByPactNo(String pactNo);
	
	//合同变更情况
	@Select("select * from EP_PACT_CHANGE where PACT_NO = #{pactNo}")
	@Results({
			@Result( id = true, column = "pact_no", property = "pactNo"),
			@Result( column = "change_id", property = "changeId"),
			@Result( column = "change_time", property = "changeTime"),
			@Result( column = "change_type", property = "changeType"),
			@Result( column = "change_content", property = "changeContent"),
			@Result( column = "attachm", property = "attachm"),
			@Result( column = "remark", property = "remark"),
			@Result( column = "created_by", property = "createdBy"),
			@Result( column = "created_date", property = "createdDate"),
			@Result( column = "update_by", property = "updateBy"),
			@Result( column = "update_date", property = "updateDate")
	})
	PactChange getPactChangeByPactNo(String pactNo);
	
	//合同续签情况
	@Select("select * from EP_PACT_RENEW where PACT_NO = #{pactId}")
	@Results({
			@Result( id = true, column = "pact_no", property = "pactNo"),
			@Result( column = "renew_id", property = "renewId"),
			@Result( column = "renew_time", property = "renewTime"),
			@Result( column = "renew_type", property = "renewType"),
			@Result( column = "renew_came_time", property = "renewCameTime"),
			@Result( column = "renew_lost_time", property = "renewLostTime"),
			@Result( column = "renew_content", property = "renewContent"),
			@Result( column = "attachm", property = "attachm"),
			@Result( column = "remark", property = "remark"),
			@Result( column = "created_by", property = "createdBy"),
			@Result( column = "created_date", property = "createDate"),
			@Result( column = "updated_by",property = "updatedBy"),
			@Result( column = "updated_date", property = "updatedDate")
	})
	PactRenew getPactRenewByPactNo(String pactNo);

}
