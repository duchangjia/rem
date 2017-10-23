package com.omcube.service;

import java.util.List;

import com.omcube.model.po.CustInfoPO;
import com.omcube.model.po.EpCustPayFlowPO;
import com.omcube.model.po.EpPayChageInfPO;
import com.omcube.model.response.EpPayChageInfResponse;

public interface EpPayChageInfService {

	// 调薪管理列表查询
	public List<EpPayChageInfResponse> selectListEpPayChageInf(String startTime,
			String endTime);

	// 调薪管理详情查询
	public EpPayChageInfResponse selectDetailEpPayChageInf(
			EpPayChageInfResponse epPayChageInfResponse);
	
	//调薪管理新增用户信息
	public void insertEpPayChageInf(EpPayChageInfPO epPayChageInfPO,CustInfoPO custInfo,EpCustPayFlowPO epCustPayFlowPO);
	
	//调薪管理删除用户调薪信息
	public void deleteEpPayChageInf(EpPayChageInfPO epPayChageInfPO);
	
	//调薪管理修改用户调薪信息
	public void updateEpPayChageInf(EpPayChageInfPO epPayChageInfPO);
}
