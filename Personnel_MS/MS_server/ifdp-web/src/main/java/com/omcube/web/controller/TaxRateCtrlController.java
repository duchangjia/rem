package com.omcube.web.controller;

import java.math.BigDecimal;
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
import com.omcube.model.po.TaxRateCtrlPO;
import com.omcube.service.TaxRateCtrlService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value="/taxRateCtrl")
@CacheConfig(cacheNames = "taxRateCtrles")
public class TaxRateCtrlController {
	
	@Autowired
    private TaxRateCtrlService taxRateCtrlService;  
	//增加
	@RequestMapping(value="/addtaxRateCtrl",method=RequestMethod.GET)
	@Cacheable
	public Object saveTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO){
		TaxRateCtrlPO taxRateCtrl = new TaxRateCtrlPO();
		BigDecimal GroupLimit = new BigDecimal("5000.00"); 
		BigDecimal GroupLowerLimit = new BigDecimal("3000.00"); 
		taxRateCtrl.setuId("001");
		taxRateCtrl.setGroupId("001001");
		taxRateCtrl.setApplyNo("001001003");
		taxRateCtrl.setGroupLimit(GroupLimit);
		taxRateCtrl.setGroupLowerLimit(GroupLowerLimit);
		taxRateCtrl.setIsDelete("1");
		taxRateCtrlService.addTaxRateGroup(taxRateCtrl);
		return JSONResultUtil.setSuccess();
	}
	
	//查询
	@RequestMapping(value="/findtaxRateCtrl",method = RequestMethod.GET)
	@Cacheable
	public Object findTaxRateCtrl(HttpServletRequest request, Integer pageNum, Integer pageSize ,String uId){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
        PageHelper.startPage(pageNum, pageSize,true);
		List<TaxRateCtrlPO> list = taxRateCtrlService.findTaxRateCtrl(uId);
		PageInfo<TaxRateCtrlPO> pageInfo = new PageInfo<TaxRateCtrlPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}	
	
	//删除
	@RequestMapping(value="/deletetaxRateCtrl",method = RequestMethod.GET)
	@Cacheable
	public Object deleteTaxRateCtrl(String uId,String groupId,String applyNo){
		taxRateCtrlService.deleteTaxRateCtrl(uId,groupId,applyNo);
		return JSONResultUtil.setSuccess();
	}
	
	//修改
	@RequestMapping(value="/updatetaxRateCtrl",method = RequestMethod.GET)
	@Cacheable
	public Object updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO){
		TaxRateCtrlPO taxRateCtrl = new TaxRateCtrlPO();
		BigDecimal GroupLimit = new BigDecimal("5000.00"); 
		BigDecimal GroupLowerLimit = new BigDecimal("3000.00"); 
		taxRateCtrl.setuId("001");
		taxRateCtrl.setGroupId("001001");
		taxRateCtrl.setApplyNo("001001003");
		taxRateCtrl.setRemark("第二次修改");
		taxRateCtrl.setGroupLimit(GroupLimit);
		taxRateCtrl.setGroupLowerLimit(GroupLowerLimit);
		taxRateCtrl.setIsDelete("1");
		taxRateCtrlService.updateTaxRateCtrl(taxRateCtrl);
		return JSONResultUtil.setSuccess();
	}
	
	
	
	
	
	
	
	
}
