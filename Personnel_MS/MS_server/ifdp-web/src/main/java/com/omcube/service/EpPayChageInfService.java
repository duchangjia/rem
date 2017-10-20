package com.omcube.service;

import java.util.List;

import com.omcube.model.response.EpPayChageInfResponse;

public interface EpPayChageInfService {

	// 调薪信息列表查询
	public List<EpPayChageInfResponse> selectListEpPayChageInf(String startTime,
			String endTime);

	// 调薪管理详情查询
	public EpPayChageInfResponse selectDetailEpPayChageInf(
			EpPayChageInfResponse epPayChageInfResponse);
}
