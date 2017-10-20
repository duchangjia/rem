package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.EpPayChageInfMapper;
import com.omcube.model.response.EpPayChageInfResponse;
import com.omcube.service.EpPayChageInfService;
@Service
@Transactional
public class EpPayChageInfServiceImpl implements EpPayChageInfService {

	@Autowired
	private EpPayChageInfMapper epPayChageInfMapper;

	// 列表查询调薪信息
	@Override
	public List<EpPayChageInfResponse> selectListEpPayChageInf(String startTime,
			String endTime) {
		return epPayChageInfMapper.selectListEpPayChageInf(startTime, endTime);
	}
}
