package com.omcube.web.controller;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.TaxRateGroupPO;
import com.omcube.service.TaxRateGroupService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value="/taxRateGroup")
@CacheConfig(cacheNames = "taxRateGroupes")
@Cacheable
public class TaxRateGroupController {

	@Autowired
	private TaxRateGroupService taxRateGroupService;
	//增加
	/*@RequestMapping(value="/saveTaxRateGroup",method=RequestMethod.GET)*/
	@PostMapping(value="/saveTaxRateGroup")
	public Object saveTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		taxRateGroupPO.setuId("001");
		taxRateGroupPO.setGroupId("001013");
		taxRateGroupPO.setGroupNo("小灰");
		taxRateGroupPO.setIsDelete("1");
		taxRateGroupPO.setStartTime("2017-08-05");
		taxRateGroupService.addTaxRateGroup(taxRateGroupPO);	
		return  JSONResultUtil.setSuccess();
	}
	//查询
			
	//@RequestMapping(value="/findtaxRateGroup",method = RequestMethod.GET)
	@GetMapping(value="/findTaxRateGroup")
	public Object findTaxRateGroup(HttpServletRequest request, Integer pageNum, Integer pageSize ,String uId){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
        PageHelper.startPage(pageNum, pageSize,true);
		List<TaxRateGroupPO> list = taxRateGroupService.findTaxRateGroup(uId);
		PageInfo<TaxRateGroupPO> pageInfo = new PageInfo<TaxRateGroupPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}	
	
	//删除
	/*@RequestMapping(value="/deleteTaxRateGroup",method = RequestMethod.GET)*/
	@DeleteMapping(value="/deleteTaxRateGroup")
	public Object deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
	        taxRateGroupPO.setuId("001");
	        taxRateGroupPO.setGroupId("001005");
		taxRateGroupService.deleteTaxRateGroup(taxRateGroupPO);
		return JSONResultUtil.setSuccess();
	}
}
