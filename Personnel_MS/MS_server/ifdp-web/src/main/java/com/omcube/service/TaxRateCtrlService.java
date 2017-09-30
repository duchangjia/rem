package com.omcube.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omcube.model.mapper.TaxRateCtrlMapper;
import com.omcube.model.po.TaxRateCtrlPO;

@Component
public class TaxRateCtrlService {

	@Autowired
	private TaxRateCtrlMapper taxRateCtrlMapper;
	//增加
	public void addTaxRateGroup(TaxRateCtrlPO taxRateCtrlPO){
		taxRateCtrlMapper.addTaxRateCtrl(taxRateCtrlPO);
	}
	
	//查询
	public List<TaxRateCtrlPO> findTaxRateCtrl(String uId){
		return taxRateCtrlMapper.findTaxRateCtrl(uId);
	}
	
	//删除
	public void deleteTaxRateCtrl(String uId,String groupId,String applyNo){
		taxRateCtrlMapper.deleteTaxRateCtrl(uId, groupId,applyNo);
	}
	
	//修改
	public void updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO){
		taxRateCtrlMapper.updateTaxRateCtrl(taxRateCtrlPO);	
	}
}
