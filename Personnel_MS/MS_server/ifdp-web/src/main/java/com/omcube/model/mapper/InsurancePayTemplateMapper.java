package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.omcube.model.po.InsurancePayTemplatePO;

@Mapper
public interface InsurancePayTemplateMapper {
	//添加保险纳税模板
	@Insert("INSERT INTO  EP_WELCOE_CTRL(UID,APPLY_NO,APPLY_NAME,PER_ENDM_RATE,PER_ENDM_FIXED,COM_ENDM_RATE,COM_ENDM_FIXED,PER_MEDI_RATE,PER_MEDI_FIXED,COM_MEDI_RATE,COM_MEDI_FIXED,PER_UNEM_RATE,PER_UNEM_FIXED,COM_UNEM_RATE,COM_UNEM_FIXED,PER_EMPL_RATE,PER_EMPL_FIXED,COM_EMPL_RATE,COM_EMPL_FIXED,PER_MATE_RATE,PER_MATE_FIXED,COM_MATE_RATE,COM_MATE_FIXED,PER_HOUS_RATE,PER_HOUS_FIXED,COM_HOUS_RATE,COM_HOUS_FIXED,REMARK,CREATED_BY,CREATED_DATE)VALUES"
			+ "(#{insurancePayTemplate.uId},#{insurancePayTemplate.applyNo},#{insurancePayTemplate.applyName},#{insurancePayTemplate.perEndmRate},#{insurancePayTemplate.perEndmFixed},#{insurancePayTemplate.comEndmRate},#{insurancePayTemplate.comEndmFixed},#{insurancePayTemplate.perMediRate},#{insurancePayTemplate.perMediFixed},#{insurancePayTemplate.comMediRate},#{insurancePayTemplate.comMediFixed},"
			+ "#{insurancePayTemplate.perUnemRate},#{insurancePayTemplate.perUnemFixed},#{insurancePayTemplate.comUnemRate},#{insurancePayTemplate.comUnemFixed},#{insurancePayTemplate.perEmplRate},#{insurancePayTemplate.perEmplFixed},#{insurancePayTemplate.comEmplRate},#{insurancePayTemplate.comEmplFixed},#{insurancePayTemplate.perMateRate},#{insurancePayTemplate.perMateFixed},#{insurancePayTemplate.comMateRate},"
			+ "#{insurancePayTemplate.comMateFixed},#{insurancePayTemplate.perHousRate},#{insurancePayTemplate.perHousFixed},#{insurancePayTemplate.comHousRate},#{insurancePayTemplate.comHousFixed},#{insurancePayTemplate.remark},#{insurancePayTemplate.createdBy},DATE_FORMAT(NOW(),'%y-%m-%d'))")
	void addInsurancePayTemplate(@Param(value = "insurancePayTemplate") InsurancePayTemplatePO insurancePayTemplate);
	
	//修改保险缴纳模板
	@Update("update EP_WELCOE_CTRL set "
			+ "APPLY_NAME=#{applyName},PER_ENDM_RATE=#{perEndmRate},PER_ENDM_FIXED=#{perEndmFixed},COM_ENDM_RATE=#{comEndmRate},COM_ENDM_FIXED=#{comEndmFixed},PER_MEDI_RATE=#{perMediRate},PER_MEDI_FIXED=#{perMediFixed},COM_MEDI_RATE=#{comMediRate},COM_MEDI_FIXED=#{comMediFixed},PER_UNEM_RATE=#{perUnemRate},PER_UNEM_FIXED=#{perUnemFixed},COM_UNEM_RATE=#{comUnemRate},COM_UNEM_FIXED=#{comUnemFixed},PER_EMPL_RATE=#{perEmplRate},PER_EMPL_FIXED=#{perEmplFixed},COM_EMPL_RATE=#{comEmplRate},COM_EMPL_FIXED=#{comEmplFixed},PER_MATE_RATE=#{perMateRate},PER_MATE_FIXED=#{perMateFixed},COM_MATE_RATE=#{comMateRate},"
			+ "COM_MATE_FIXED=#{comMateFixed},PER_HOUS_RATE=#{perHousRate},PER_HOUS_FIXED=#{perHousFixed},COM_HOUS_RATE=#{comHousRate},COM_HOUS_FIXED=#{comHousFixed},REMARK=#{remark},UPDATED_BY=#{updatedBy},UPDATED_DATE=DATE_FORMAT(NOW(),'%y-%m-%d')"
			+ " where UID = #{uId} and APPLY_NO = #{applyNo} ")
	void updateInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate);
	
	//查询单个模板的详细信息
	@Select("SELECT "
			+ "UID,APPLY_NO,APPLY_NAME,PER_ENDM_RATE,PER_ENDM_FIXED,COM_ENDM_RATE,COM_ENDM_FIXED,PER_MEDI_RATE,PER_MEDI_FIXED,COM_MEDI_RATE,COM_MEDI_FIXED,PER_UNEM_RATE,PER_UNEM_FIXED,COM_UNEM_RATE,COM_UNEM_FIXED,"
			+ "PER_EMPL_RATE,PER_EMPL_FIXED,COM_EMPL_RATE,COM_EMPL_FIXED,PER_MATE_RATE,PER_MATE_FIXED,COM_MATE_RATE,COM_MATE_FIXED,PER_HOUS_RATE,PER_HOUS_FIXED,COM_HOUS_RATE,COM_HOUS_FIXED,REMARK,CREATED_BY,CREATED_DATE,UPDATED_BY,UPDATED_DATE"
			+ " FROM EP_WELCOE_CTRL"
			+ " WHERE UID=#{arg0} AND APPLY_NO= #{arg1}")
	@Results({
		@Result(id = true ,column = "UID",property = "uId"),
		@Result(id = true ,column = "APPLY_NO",property = "applyNo"),
		@Result(column = "APPLY_NAME",property = "applyName"),
		@Result(column = "PER_ENDM_RATE",property = "perEndmRate"),
		@Result(column = "PER_ENDM_FIXED",property = "perEndmFixed"),
		@Result(column = "COM_ENDM_RATE",property = "comEndmRate"),
		@Result(column = "COM_ENDM_FIXED",property = "comEndmFixed"),
		@Result(column = "PER_MEDI_RATE",property = "perMediRate"),
		@Result(column = "PER_MEDI_FIXED",property = "perMediFixed"),
		@Result(column = "COM_MEDI_RATE",property = "comMediRate"),
		@Result(column = "COM_MEDI_FIXED",property = "comMediFixed"),
		@Result(column = "PER_UNEM_RATE",property = "perUnemRate"),
		@Result(column = "PER_UNEM_FIXED",property = "perUnemFixed"),
		@Result(column = "COM_UNEM_RATE",property = "comUnemRate"),
		@Result(column = "COM_UNEM_FIXED",property = "comUnemFixed"),
		@Result(column = "PER_EMPL_RATE",property = "perEmplRate"),
		@Result(column = "PER_EMPL_FIXED",property = "perEmplFixed"),
		@Result(column = "COM_EMPL_RATE",property = "comEmplRate"),
		@Result(column = "COM_EMPL_FIXED",property = "comEmplFixed"),
		@Result(column = "PER_MATE_RATE",property = "perMateRate"),
		@Result(column = "PER_MATE_FIXED",property = "perMateFixed"),
		@Result(column = "COM_MATE_RATE",property = "comMateRate"),
		@Result(column = "COM_MATE_FIXED",property = "comMateFixed"),
		@Result(column = "PER_HOUS_RATE",property = "perHousRate"),
		@Result(column = "PER_HOUS_FIXED",property = "perHousFixed"),
		@Result(column = "COM_HOUS_RATE",property = "comHousRate"),
		@Result(column = "COM_HOUS_FIXED",property = "comHousFixed"),
		@Result(column = "REMARK",property = "remark"),
		@Result(column = "CREATED_BY",property = "createdBy"),
		@Result(column = "CREATED_DATE",property = "createdDate"),
		@Result(column = "UPDATED_BY",property = "updatedBy"),
		@Result(column = "UPDATED_DATE",property = "updatedDate")
	})
	public InsurancePayTemplatePO queryInsurancePayTemplate(String uId, String applyNo);
	
	
	//通过uid查询所有的保险缴纳模板列表
	@Select("SELECT UID,APPLY_NO,APPLY_NAME,REMARK,CREATED_BY,CREATED_DATE FROM EP_WELCOE_CTRL WHERE UID = #{uId}")
	@Results({
		@Result(id = true ,column = "UID",property = "uId"),
		@Result(id = true ,column = "APPLY_NO",property = "applyNo"),
		@Result(column = "APPLY_NAME",property = "applyName"),
		@Result(column = "REMARK",property = "remark"),
		@Result(column = "CREATED_BY",property = "createdBy"),
		@Result(column = "CREATED_DATE",property = "createdDate")
	})
	public List<InsurancePayTemplatePO> queryInsurancePayTemplates(String uId);
	
	//获取最大的模板编号
	@Select("SELECT APPLY_NO FROM EP_WELCOE_CTRL WHERE UID = #{uId} ORDER BY APPLY_NO DESC  LIMIT 1;")
	@Results({
		@Result(column = "APPLY_NO")
	})
	public String queryMaxApplyNo(String uId);
}
