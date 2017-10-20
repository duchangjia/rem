package com.omcube.service;

import java.util.List;

import com.omcube.model.response.EpPayChageInfResponse;

public interface EpPayChageInfService {

	//列表查询调薪信息
	public List<EpPayChageInfResponse> selectListEpPayChageInf(String startTime,String endTime);
}
