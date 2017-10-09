package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.TaxRateCtrlPO;



@Mapper
public interface TaxRateCtrlMapper {
   //增加
/*	 @Insert("insert into EP_TAXRATE_CTRL values(#{uId},#{groupId},#{applyNo},#{groupLimit},#{groupLowerLimit},#{percentRate},#{quickCal},#{remark},#{createdBy},date_format(now(),'%y-%m-%d'),#{updatedBy},date_format(now(),'%y-%m-%d'),#{isDelete})")
*/	 
	void addTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);
  
   //查询
	 /*@Select("select UID,GROUP_ID,APPLY_NO,GROUP_LIMIT,GROUP_LOWER_LIMIT,PERCENT_RATE,QUICK_CAL,REMARK,CREATED_BY,CREATED_DATE,UPDATED_BY,UPDATED_DATE,ISDELETE from EP_TAXRATE_CTRL where UID=#{uId}")
	 @Results({
		   @Result(id = true, column = "UID", property = "uId"),
		   @Result(id = true, column = "GROUP_ID", property = "groupId"),
		   @Result(id = true, column = "APPLY_NO", property = "applyNo"),
		   @Result(column = "GROUP_LIMIT", property = "groupLimit"),
		   @Result(column = "GROUP_LOWER_LIMIT", property = "groupLowerLimit"),
		   @Result(column = "PERCENT_RATE", property = "percentRate"),
		   @Result(column = "QUICK_CAL", property = "quickCal"),
		   @Result(column = "REMARK", property = "remark"),
		   @Result(column = "CREATED_BY", property = "createdBy"),
		   @Result(column = "CREATED_DATE", property = "createdDate"),
		   @Result(column = "UPDATED_BY", property = "updatedBy"),
		   @Result(column = "UPDATED_DATE", property = "updatedDate"),
		   @Result(column = "ISDELETE", property = "isDelete")
	   })*/
       List<TaxRateCtrlPO> findTaxRateCtrl(String uId);

       //删除
/*	  @Update("update EP_TAXRATE_CTRL set ISDELETE=#{isDelete} where UID=#{arg0} and GROUP_ID=#{arg1} and APPLY_NO=#{arg2}")
*/	    void deleteTaxRateCtrl(String uId,String groupId,String applyNo);

       //修改
	 /* @Update("update EP_TAXRATE_CTRL set "
	  		+ "UID=#{uId},GROUP_ID=#{groupId},APPLY_NO=#{applyNo},GROUP_LIMIT=#{groupLimit},"
	  		+ "GROUP_LOWER_LIMIT=#{groupLowerLimit},PERCENT_RATE=#{percentRate},"
	  		+ "QUICK_CAL=#{quickCal},REMARK=#{remark},UPDATED_DATE=#{updatedBy},"
	  		+ "UPDATED_DATE=date_format(now(),'%y-%m-%d'),ISDELETE=#{isDelete} "
	  		+ "where UID=#{uId} and GROUP_ID=#{groupId} and APPLY_NO=#{applyNo}")*/
	  void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

}
