package com.omcube.service;

import java.util.List;
import com.omcube.model.po.TaxRateGroupPO;

public interface TaxRateGroupService {

	// 新增个人所得税税率组
	public void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO);

	// 查询所有个人所得税税率组
	public List<TaxRateGroupPO> findTaxRateGroup(String uId);

	// 根据主键（组ID）删除个人所得税税率组
	public void deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO);

}
