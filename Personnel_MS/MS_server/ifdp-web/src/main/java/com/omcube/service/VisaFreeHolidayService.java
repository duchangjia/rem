package com.omcube.service;

import java.util.List;

import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;

public interface VisaFreeHolidayService {

	// 查询所有列表
	List<VisaFreeHolidayPo> queryVisaFreeHolidayList(String uId);
	
	//校验新增的免签节假日是否存在
	Object queryVisaFreeHoliayByuId(String uId);
	
	// 新增
	void insertVisaFreeHoliday(VisaFreeHolidayPo visaFreeHolidayPo);

	//条件组合查询
	List<VisaFreeHolidayPo> queryVisaFreeHoliayList(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayparam);
	
	//删除
	void deleteVisaFreeHoliday(String day);



}
