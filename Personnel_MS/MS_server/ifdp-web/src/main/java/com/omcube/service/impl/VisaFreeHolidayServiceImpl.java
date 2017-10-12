package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.VisaFreeHolidayMapper;
import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;
import com.omcube.service.VisaFreeHolidayService;

@Service
public class VisaFreeHolidayServiceImpl implements VisaFreeHolidayService {

	@Autowired
	private VisaFreeHolidayMapper visaFreeHolidayMapper;

	// 查询所有列表
	@Override
	public List<VisaFreeHolidayPo> queryVisaFreeHolidayList(String uId) {

		return visaFreeHolidayMapper.queryVisaFreeHolidayList(uId);
	}

	// 新增
	@Override
	public void insertVisaFreeHoliday(VisaFreeHolidayPo visaFreeHolidayPo) {
		visaFreeHolidayMapper.insertVisaFreeHoliday(visaFreeHolidayPo);
	}

	// 条件组合查询
	@Override
	public List<VisaFreeHolidayPo> queryVisaFreeHolidaysByCondition(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest) {
		return visaFreeHolidayMapper
				.queryVisaFreeHolidaysByCondition(queryVisaFreeHolidayRequest);
	}

	@Override
	public void deleteVisaFreeHoliday(String day) {
		visaFreeHolidayMapper.deleteVisaFreeHoliday(day);
	}

}
