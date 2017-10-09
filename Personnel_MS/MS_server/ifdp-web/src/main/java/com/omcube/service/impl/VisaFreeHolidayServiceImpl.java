//package com.omcube.service.impl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.omcube.model.mapper.VisaFreeHolidayMapper;
//import com.omcube.service.tx.VisaFreeHolidayService;
//
//@Service
//public class VisaFreeHolidayServiceImpl implements VisaFreeHolidayService {
//	@Autowired
//	private VisaFreeHolidayMapper visaFreeHolidayMapper;
//	
//	@Transactional
//	@Override
//	public Integer insertVisaFreeHoliday(String day,String dayFlag,String remark) {
//		// TODO Auto-generated method stub
//		Integer i;
//		 i=visaFreeHolidayMapper.insertVisaFreeHoliday(day,dayFlag);
//		 i=visaFreeHolidayMapper.insertVisaFreeHoliday1(remark);
//		 return i;
//		
//		 
//	}
//
//}
