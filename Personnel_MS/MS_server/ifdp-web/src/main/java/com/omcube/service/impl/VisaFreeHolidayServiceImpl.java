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
	public List<VisaFreeHolidayPo> queryVisaFreeHolidayList(String uid) {

		return visaFreeHolidayMapper.queryVisaFreeHolidayList(uid);
	}

	//校验新增的免签节假日是否存在
	@Override
	public Object queryVisaFreeHoliayByDate(String dayDate) {
		return visaFreeHolidayMapper.queryVisaFreeHoliayByDate(dayDate);
	}
	
	// 新增
	@Override
	public void insertVisaFreeHoliday(VisaFreeHolidayPo visaFreeHolidayPo) {
		visaFreeHolidayMapper.insertVisaFreeHoliday(visaFreeHolidayPo);
	}

	// 条件组合查询
	@Override
	public List<VisaFreeHolidayPo> queryVisaFreeHoliayList(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayparam) {
		
		return visaFreeHolidayMapper.queryVisaFreeHoliayList(queryVisaFreeHolidayparam);
	}
	

	@Override
	public void deleteVisaFreeHoliday(String dayDate) {
		visaFreeHolidayMapper.deleteVisaFreeHoliday(dayDate);
	}



}
