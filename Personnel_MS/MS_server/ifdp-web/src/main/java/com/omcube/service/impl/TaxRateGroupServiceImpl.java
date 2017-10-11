package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.TaxRateGroupMapper;
import com.omcube.model.po.TaxRateGroupPO;
import com.omcube.service.TaxRateGroupService;

@Service
@Transactional
public class TaxRateGroupServiceImpl implements TaxRateGroupService{
	
	@Autowired
	private TaxRateGroupMapper taxRateGroupMapper;
	
	//增加
	@Override
	public void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		taxRateGroupMapper.addTaxRateGroup(taxRateGroupPO);
	}
	
	//查询
	@Override
	public List<TaxRateGroupPO> findTaxRateGroup(String uId){
		return taxRateGroupMapper.findTaxRateGroup(uId);
		
	}
		
	//删除
	@Override
	public void deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		taxRateGroupMapper.deleteTaxRateGroup(taxRateGroupPO);
	}
}
