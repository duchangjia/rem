package com.omcube.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.TaxRateGroupPO;
import com.omcube.service.TaxRateGroupService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value="/taxRateGroup")
@CacheConfig(cacheNames = "taxRateGroupes")
public class TaxRateGroupController {

	@Autowired
	private TaxRateGroupService taxRateGroupService;
	//增加
	@RequestMapping(value="/addtaxRateGroup"/*,method = RequestMethod.GET*/,method=RequestMethod.GET)
	@Cacheable
	public void saveTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		TaxRateGroupPO taxRateGroup=new TaxRateGroupPO();
		taxRateGroup.setuId("001");
		taxRateGroup.setGroupId("001001");
		taxRateGroup.setGroupNo("君实");
		taxRateGroupService.addTaxRateGroup(taxRateGroup);	
	}
	//查询
	@RequestMapping(value="/findtaxRateGroup",method = RequestMethod.GET)
	@Cacheable
	public Object findTaxRateGroup(@RequestParam String uId){
		return JSONResultUtil.setSuccess(taxRateGroupService.findTaxRateGroup(uId));
	}
	
}
