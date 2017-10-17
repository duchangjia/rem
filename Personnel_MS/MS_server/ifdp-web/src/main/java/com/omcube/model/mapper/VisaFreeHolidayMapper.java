package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;

@Mapper
public interface VisaFreeHolidayMapper {

	// 查询所有列表
	List<VisaFreeHolidayPo> queryVisaFreeHolidayList(String uId);

	// 校验新增的免签节假日是否存在
	Object queryVisaFreeHoliayByDate(String dayDate);

	// 新增
	void insertVisaFreeHoliday(VisaFreeHolidayPo visaFreeHolidayPo);

	// 条件组合查询
	List<VisaFreeHolidayPo> queryVisaFreeHoliayList(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayparam);

	// 删除
	void deleteVisaFreeHoliday(String dayDate);

}
