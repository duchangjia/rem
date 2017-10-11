package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.TaxRateCtrlMapper;
import com.omcube.model.po.TaxRateCtrlPO;
import com.omcube.service.TaxRateCtrlService;

@Service
@Transactional
public class TaxRateCtrlServiceImpl implements TaxRateCtrlService{

	@Autowired
	private TaxRateCtrlMapper taxRateCtrlMapper;
	
	// 新增个人所得税税率
	@Override
	public void addTaxRateGroup(TaxRateCtrlPO taxRateCtrlPO){
		taxRateCtrlMapper.addTaxRateCtrl(taxRateCtrlPO);
	}
	
	// 查询所有个人所得税税率
	@Override
	public List<TaxRateCtrlPO> findTaxRateCtrl(String uId){
		return taxRateCtrlMapper.findTaxRateCtrl(uId);
	}
	
	// 根据主键（组ID，编号）删除个人所得税税率
	@Override
	public void deleteTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO){
		taxRateCtrlMapper.deleteTaxRateCtrl(taxRateCtrlPO);
	}
	
	// 根据主键（组ID，编号）修改个人所得税税率
	@Override
	public void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO){
		taxRateCtrlMapper.updateTaxRateCtrl(taxRateCtrlPO);	
	}
}
