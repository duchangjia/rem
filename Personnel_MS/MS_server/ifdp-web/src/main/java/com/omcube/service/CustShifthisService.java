package com.omcube.service;

import java.util.List;

import com.omcube.model.po.CustShifthis;


public interface CustShifthisService {

	List<CustShifthis> getCustShifthisList(String userNo, String workhisId, String startTime, String endTime);

	Object getCustShifthisDetail(String userNo, String workhisId);

	void addCustShifthis(CustShifthis custShifthis);

	void updateShifthis(CustShifthis custShifthis);

}
