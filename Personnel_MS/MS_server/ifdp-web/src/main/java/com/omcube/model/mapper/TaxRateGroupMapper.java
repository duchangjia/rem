package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.TaxRateGroupPO;

@Mapper
public interface TaxRateGroupMapper {
	// 新增个人所得税税率组
	void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO);

	// 查询所有个人所得税税率组
	List<TaxRateGroupPO> findTaxRateGroup(String uId);

	// 根据主键（组ID）删除个人所得税税率组
	void deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO);
}
