package com.omcube.web.controller;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
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
public class TaxRateGroupController {

	@Autowired
	private TaxRateGroupService taxRateGroupService;
	//增加
	@RequestMapping(value="/addtaxRateGroup",method=RequestMethod.GET)
	@Cacheable
	public Object saveTaxRateGroup(TaxRateGroupPO taxRateGroupPO){
		TaxRateGroupPO taxRateGroup=new TaxRateGroupPO();
		taxRateGroup.setuId("001");
		taxRateGroup.setGroupId("001012");
		taxRateGroup.setGroupNo("小红");
		taxRateGroup.setIsDelete("1");
		taxRateGroup.setStartTime("2017-08-03");
		taxRateGroupService.addTaxRateGroup(taxRateGroup);	
		return  JSONResultUtil.setSuccess();
	}
	//查询
			
	@RequestMapping(value="/findtaxRateGroup",method = RequestMethod.GET)
	@Cacheable
	public Object findTaxRateGroup(HttpServletRequest request, Integer pageNum, Integer pageSize ,String uId){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
        PageHelper.startPage(pageNum, pageSize,true);
		List<TaxRateGroupPO> list = taxRateGroupService.findTaxRateGroup(uId);
		PageInfo<TaxRateGroupPO> pageInfo = new PageInfo<TaxRateGroupPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}	
	
	//删除
	@RequestMapping(value="/deletetaxRateGroup",method = RequestMethod.GET)
	@Cacheable
	public Object deleteTaxRateGroup(String uId,String groupId){
		taxRateGroupService.deleteTaxRateGroup(uId, groupId);
		return JSONResultUtil.setSuccess();
	}
}
