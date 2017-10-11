package com.omcube.service;

import java.util.List;
import com.omcube.model.po.TaxRateGroupPO;

public interface TaxRateGroupService {

	// 增加
	public void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO);

	// 查询
	public List<TaxRateGroupPO> findTaxRateGroup(String uId);

	// 删除
	public void deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO);

}
