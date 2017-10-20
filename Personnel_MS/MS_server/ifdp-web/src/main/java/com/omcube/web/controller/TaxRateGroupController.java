package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.TaxRateGroupPO;
import com.omcube.service.TaxRateGroupService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/taxRateGroup")
public class TaxRateGroupController {

	@Autowired
	private TaxRateGroupService taxRateGroupService;

	// 新增个人所得税税率组
	@PostMapping(value = "/insertTaxRateGroup")
	public Object saveTaxRateGroup(TaxRateGroupPO taxRateGroupPO) {
		taxRateGroupService.addTaxRateGroup(taxRateGroupPO);
		return JSONResultUtil.setSuccess();
	}

	// 查询所有个人所得税税率组
	@GetMapping(value = "/selectTaxRateGroup")
	@Cacheable(value = "queryCache")
	public Object findTaxRateGroup(HttpServletRequest request, Integer pageNum,
			Integer pageSize, String uid) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<TaxRateGroupPO> list = taxRateGroupService.findTaxRateGroup(
				SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		PageInfo<TaxRateGroupPO> pageInfo = new PageInfo<TaxRateGroupPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 根据主键（组ID）删除个人所得税税率组
	@DeleteMapping(value = "/deleteTaxRateGroup")
	public Object deleteTaxRateGroup(TaxRateGroupPO taxRateGroupPO) {
		taxRateGroupPO
				.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		taxRateGroupService.deleteTaxRateGroup(taxRateGroupPO);
		return JSONResultUtil.setSuccess();
	}
}
