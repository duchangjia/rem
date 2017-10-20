package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.response.EpPayChageInfResponse;

@Mapper
public interface EpPayChageInfMapper {

	// 列表查询调薪信息
	List<EpPayChageInfResponse> selectListEpPayChageInf(
			@Param("startTime") String startTime,
			@Param("endTime") String endTime);

}
