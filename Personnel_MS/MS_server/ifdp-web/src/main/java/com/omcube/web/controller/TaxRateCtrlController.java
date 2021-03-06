package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.TaxRateCtrlPO;
import com.omcube.service.TaxRateCtrlService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/taxRateCtrl")
public class TaxRateCtrlController {

	@Autowired
	private TaxRateCtrlService taxRateCtrlService;

	// 新增个人所得税税率
	@PostMapping(value = "/insertTaxRateCtrl")
	public Object saveTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO) {
		taxRateCtrlService.addTaxRateGroup(taxRateCtrlPO);
		return JSONResultUtil.setSuccess();
	}

	// 查询所有个人所得税税率
	@GetMapping(value = "/selectTaxRateCtrl")
	@Cacheable(value = "queryCache")
	public Object findTaxRateCtrl(HttpServletRequest request, Integer pageNum,
			Integer pageSize, String uid) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<TaxRateCtrlPO> list = taxRateCtrlService.findTaxRateCtrl(
				SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		PageInfo<TaxRateCtrlPO> pageInfo = new PageInfo<TaxRateCtrlPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 根据主键（组ID，编号）删除个人所得税税率
	@DeleteMapping(value = "/deleteTaxRateCtrl")
	public Object deleteTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO) {
		taxRateCtrlPO
				.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		taxRateCtrlService.deleteTaxRateCtrl(taxRateCtrlPO);
		return JSONResultUtil.setSuccess();
	}

	// 根据主键（组ID，编号）修改个人所得税税率
	@PutMapping(value = "/updateTaxRateCtrl")
	public Object updateTaxRateCtrl(TaxRateCtrlPO taxRateCtrlPO) {
		taxRateCtrlPO
				.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		taxRateCtrlService.updateTaxRateCtrl(taxRateCtrlPO);
		return JSONResultUtil.setSuccess();
	}

}
