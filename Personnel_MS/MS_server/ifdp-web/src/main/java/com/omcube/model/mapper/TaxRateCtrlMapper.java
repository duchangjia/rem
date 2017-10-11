package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.TaxRateCtrlPO;

@Mapper
public interface TaxRateCtrlMapper {
	// 新增个人所得税税率
	void addTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

	// 查询所有个人所得税税率
	List<TaxRateCtrlPO> findTaxRateCtrl(String uId);

	// 根据主键（组ID，编号）删除个人所得税税率
	void deleteTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

	// 根据主键（组ID，编号）修改个人所得税税率
	void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO);

}
