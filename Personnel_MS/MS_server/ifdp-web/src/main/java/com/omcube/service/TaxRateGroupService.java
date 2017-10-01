package com.omcube.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.TaxRateGroupMapper;
import com.omcube.model.po.TaxRateGroupPO;

@Component
public class TaxRateGroupService {

	@Autowired
	private TaxRateGroupMapper taxRateGroupMapper;
	//增加
	public void addTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		taxRateGroupMapper.addTaxRateGroup(taxRateGroupPO);
	}
	
	//查询	
	public List<TaxRateGroupPO> findTaxRateGroup(String uId){
		return taxRateGroupMapper.findTaxRateGroup(uId);
		
	}
		
	//删除
	public void deleteTaxRateGroup(String uId,String groupId){
		taxRateGroupMapper.deleteTaxRateGroup(uId, groupId);
	}
		
	
}
