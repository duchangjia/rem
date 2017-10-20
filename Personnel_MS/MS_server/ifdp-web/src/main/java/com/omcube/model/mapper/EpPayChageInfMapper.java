package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.response.EpPayChageInfResponse;

@Mapper
public interface EpPayChageInfMapper {

	// 调薪信息列表查询
	List<EpPayChageInfResponse> selectListEpPayChageInf(
			@Param("startTime") String startTime,
			@Param("endTime") String endTime);

	// 调薪管理详情查询
	EpPayChageInfResponse selectDetailEpPayChageInf(
			EpPayChageInfResponse epPayChageInfResponse);

}
