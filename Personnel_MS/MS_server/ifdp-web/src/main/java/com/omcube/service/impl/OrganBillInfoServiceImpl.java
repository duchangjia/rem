package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.EpOrganBillInfoMapper;
import com.omcube.model.po.EpOrganBillInfoPO;
import com.omcube.service.OrganBillInfoService;

@Service
public class OrganBillInfoServiceImpl implements OrganBillInfoService {

	@Autowired
	private EpOrganBillInfoMapper billiInfoMapper;

	@Override
	public void addOrganBillInfo(EpOrganBillInfoPO billInfoPO) {
		billiInfoMapper.addOrganBillInfo(billInfoPO);
	}

	@Override
	public void updateOrganBillInfo(EpOrganBillInfoPO billInfoPO) {
		billiInfoMapper.updateOrganBillInfo(billInfoPO);
	}

	@Override
	public List<EpOrganBillInfoPO> queryBillInfoList(String uId) {
		return billiInfoMapper.queryBillInfoList(uId);
	}

	@Override
	public List<EpOrganBillInfoPO> queryBillInfoByName(EpOrganBillInfoPO billInfoPO) {
		return billiInfoMapper.queryBillInfoByName(billInfoPO);
	}

}
