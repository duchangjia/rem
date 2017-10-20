package com.omcube.service;

import java.util.List;
import com.omcube.model.po.TaxRateCtrlPO;

public interface TaxRateCtrlService {

	// 新增个人所得税税率
	void addTaxRateGroup(TaxRateCtrlPO taxRateCtrlPO);

	// 查询所有个人所得税税率
	List<TaxRateCtrlPO> findTaxRateCtrl(String uid);

	// 根据主键（组ID，编号）删除个人所得税税率
	void deleteTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

	// 根据主键（组ID，编号）修改个人所得税税率
	void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

}
