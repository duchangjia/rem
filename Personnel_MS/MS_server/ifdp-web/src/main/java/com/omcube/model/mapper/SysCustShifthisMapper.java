package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.CustShifthis;
@Mapper
public interface SysCustShifthisMapper {

	List<CustShifthis> getCustShifthisList(Map<String, String> params);

	Object getCustShifthisDetail(Map<String, String> params);

	void addCustShifthis(CustShifthis custShifthis);

	void updateCustShifthis(CustShifthis custShifthis);

}
