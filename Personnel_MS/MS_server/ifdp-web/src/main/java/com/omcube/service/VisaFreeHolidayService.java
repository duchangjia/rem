package com.omcube.service;

import java.util.List;

import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;

public interface VisaFreeHolidayService {

	// 查询所有列表
	List<VisaFreeHolidayPo> queryVisaFreeHolidays(String uid);

	// 新增
	void insertVisaFreeHoliday(VisaFreeHolidayPo visaFreeHolidayPo);

	// 条件组合查询
	List<VisaFreeHolidayPo> queryVisaFreeHolidaysByCondition(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest);

}
