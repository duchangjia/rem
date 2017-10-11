package com.omcube.service;

import java.util.List;
import com.omcube.model.po.TaxRateCtrlPO;

public interface TaxRateCtrlService {

	//增加
	 void addTaxRateGroup(TaxRateCtrlPO taxRateCtrlPO);
	
	
	//查询
	 List<TaxRateCtrlPO> findTaxRateCtrl(String uId);
	
	
	//删除
	void deleteTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);
	
	
	//修改
	 void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);
	
}
