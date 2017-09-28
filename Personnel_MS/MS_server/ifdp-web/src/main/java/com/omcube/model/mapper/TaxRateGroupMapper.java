package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.omcube.model.po.TaxRateGroupPO;

@Mapper
public interface TaxRateGroupMapper {
	//增加的方法
   @Insert("insert into EP_TAXRATE_GROUP values(#{uId},#{groupId},#{groupNo},#{startTime},#{endTime},#{remark},#{createdBy},#{createdDate},#{updatedBy},#{updatedDate})")
    public void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO);
	
   //查询的方法
   @Select("select UID,GROUP_ID,GROUP_NO,START_TIME,END_TIME,REMARK,CREATED_BY,CREATED_DATE,UPDATED_BY,UPDATED_DATE from EP_TAXRATE_GROUP where UID=#{uId}")
   @Results({
	   @Result(id = true, column = "UID", property = "uId"),
	   @Result(id = true, column = "GROUP_ID", property = "groupId"),
	   @Result(column = "GROUP_NO", property = "groupNo"),
	   @Result(column = "START_TIME", property = "startTime"),
	   @Result(column = "END_TIME", property = "endTime"),
	   @Result(column = "REMARK", property = "remark"),
	   @Result(column = "CREATED_BY", property = "createdBy"),
	   @Result(column = "CREATED_DATE", property = "createdDate"),
	   @Result(column = "UPDATED_BY", property = "updatedBy"),
	   @Result(column = "UPDATED_DATE", property = "updatedDate")
   })
    List<TaxRateGroupPO> findTaxRateGroup(String uId);
   
}
