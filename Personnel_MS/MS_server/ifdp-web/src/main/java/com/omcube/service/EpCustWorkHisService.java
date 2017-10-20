package com.omcube.service;

import com.omcube.model.po.EpCustWorkHisPO;

public interface EpCustWorkHisService {

	// 新增员工工作经历信息
	public void insertEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO);

	// 根据主键（用户编号，序号）删除员工工作经历信息
	public void deleteEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO);

}
