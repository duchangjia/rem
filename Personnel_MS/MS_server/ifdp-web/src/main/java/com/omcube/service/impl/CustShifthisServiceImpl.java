package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.SysCustShifthisMapper;
import com.omcube.model.po.CustShifthis;
import com.omcube.service.CustShifthisService;

@Service
public class CustShifthisServiceImpl implements CustShifthisService {
	@Autowired
	private SysCustShifthisMapper custShifthisMapper;
	
	private final String auid = "0001";
	
	@Override
	public List<CustShifthis> getCustShifthisList(String userNo, String workhisId, String startTime, String endTime) {
		Map<String, String> params = new HashMap<String, String>();
		String uid = auid;
		params.put("uid", uid);
		params.put("userNo", userNo);
		params.put("workhisId", workhisId);
		params.put("startTime", startTime);
		params.put("endTime", endTime);
		return custShifthisMapper.getCustShifthisList(params);
	}

	@Override
	public Object getCustShifthisDetail(String userNo, String workhisId) {
		Map<String, String> params = new HashMap<String, String>();
		String uid = auid;
		params.put("uid", uid);
		params.put("userNo", userNo);
		params.put("workhisId", workhisId);
		return custShifthisMapper.getCustShifthisDetail(params);
	}

	@Override
	public void addCustShifthis(CustShifthis custShifthis) {
		custShifthis.setUid(auid);
		custShifthisMapper.addCustShifthis(custShifthis);
	}

	@Override
	public void updateShifthis(CustShifthis custShifthis) {
		custShifthis.setUid(auid);
		custShifthisMapper.updateCustShifthis(custShifthis);
	}

}
