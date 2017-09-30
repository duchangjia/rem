package com.omcube.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.InsurancePayTemplatePO;
import com.omcube.service.InsurancePayTemplateService;
import com.omcube.util.JSONResultUtil;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

@RestController
@RequestMapping(value = "/InsurancePayTemplate")
@CacheConfig(cacheNames = "insurancePayTemplates")
public class InsurancePayTemplateController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private InsurancePayTemplateService insurancePayTemplateService;

	// 通过uId查询所有的保险缴纳模板列表
	@RequestMapping(value = "/queryInsurancePayTemplates")
	@Cacheable
	public Object queryInsurancePayTemplates(@RequestParam String uId, @RequestParam Integer pageNum,
			@RequestParam Integer pageSize) {
		// 判断传入参数是否为空,若为空则返回错误信息
		if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(pageNum) || StringUtils.isEmpty(pageSize)) {
			return JSONResultUtil.setError("F00002", "参数 uId或pageNum或pageSize 为空");
		}
		// 使用pagehelper插件进行分页查询
		PageHelper.startPage(pageNum, pageSize, true);
		List<InsurancePayTemplatePO> insurancePayTemplates = insurancePayTemplateService
				.queryInsurancePayTemplates(uId);
		PageInfo<InsurancePayTemplatePO> pageInfo = new PageInfo<InsurancePayTemplatePO>(insurancePayTemplates);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 添加保险缴纳模板
	@RequestMapping(value = "/addInsurancePayTemplate")
	@Cacheable
	public Object addInsurancePayTemplate() {
		// 创建添加保险缴纳模板测试用例
		InsurancePayTemplatePO insurancePayTemplate = new InsurancePayTemplatePO();
		insurancePayTemplate.setuId("2");
		insurancePayTemplate.setApplyNo("0002");
		insurancePayTemplate.setApplyName("深圳地区缴纳");
		insurancePayTemplate.setPerEndmRate(7.1);
		insurancePayTemplate.setPerEndmFixed(250.0);
		insurancePayTemplate.setComEndmRate(5.0);
		insurancePayTemplate.setComEndmFixed(250.0);
		insurancePayTemplate.setPerMediRate(6.0);
		insurancePayTemplate.setPerMediFixed(250.0);
		insurancePayTemplate.setComMediRate(7.0);
		insurancePayTemplate.setComMediFixed(250.0);
		insurancePayTemplate.setPerUnemRate(7.0);
		insurancePayTemplate.setPerUnemFixed(250.0);
		insurancePayTemplate.setComUnemRate(2.0);
		insurancePayTemplate.setComUnemFixed(250.0);
		insurancePayTemplate.setPerEmplRate(13.0);
		insurancePayTemplate.setPerEmplFixed(250.0);
		insurancePayTemplate.setComEmplRate(11.0);
		insurancePayTemplate.setComEmplFixed(250.0);
		insurancePayTemplate.setPerMateRate(1.4);
		insurancePayTemplate.setPerMateFixed(250.0);
		insurancePayTemplate.setComMateRate(1.9);
		insurancePayTemplate.setComMateFixed(250.0);
		insurancePayTemplate.setPerHousRate(2.0);
		insurancePayTemplate.setPerHousFixed(250.0);
		insurancePayTemplate.setComHousRate(5.0);
		insurancePayTemplate.setComHousFixed(250.0);
		insurancePayTemplate.setRemark("深圳地区缴纳模板");
		insurancePayTemplate.setCreatedBy("123123");
		if (StringUtils.isEmpty(insurancePayTemplate.getuId())) {
			return JSONResultUtil.setError("F00002", "参数uId为空");
		}
		// 返回查询结果 和信息
		return insurancePayTemplateService.addInsurancePayTemplate(insurancePayTemplate);
	}

	// 根据uId和模板编号applyNo详细查询单个保险缴纳模板
	@RequestMapping(value = "/queryInsurancePayTemplate")
	@Cacheable
	public Object queryInsurancePayTemplate(@RequestParam String uId, @RequestParam String applyNo) {
		// 判断传入参数是否为空,若为空则返回错误信息
		if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(applyNo)) {
			return JSONResultUtil.setError("F00002", "参数uId或applyNo为空");
		}
		// 返回查询结果 和信息
		return JSONResultUtil.setSuccess(insurancePayTemplateService.queryInsurancePayTemplate(uId, applyNo));
	}

	// 修改保险缴纳模板
	@RequestMapping(value = "/updateInsurancePayTemplate")
	@Cacheable
	public Object updateInsurancePayTemplate() {
		// 创建修改保险缴纳模板测试用例
		InsurancePayTemplatePO insurancePayTemplate = new InsurancePayTemplatePO();
		insurancePayTemplate.setuId("2");
		insurancePayTemplate.setApplyNo("0005");
		insurancePayTemplate.setApplyName("上海地区缴纳");
		insurancePayTemplate.setPerEndmRate(12.3);
		insurancePayTemplate.setPerEndmFixed(350.0);
		insurancePayTemplate.setComEndmRate(7.1);
		insurancePayTemplate.setComEndmFixed(320.0);
		insurancePayTemplate.setPerMediRate(12.0);
		insurancePayTemplate.setPerMediFixed(264.0);
		insurancePayTemplate.setComMediRate(10.4);
		insurancePayTemplate.setComMediFixed(250.0);
		insurancePayTemplate.setPerUnemRate(9.0);
		insurancePayTemplate.setPerUnemFixed(330.0);
		insurancePayTemplate.setComUnemRate(3.4);
		insurancePayTemplate.setComUnemFixed(240.0);
		insurancePayTemplate.setPerEmplRate(9.0);
		insurancePayTemplate.setPerEmplFixed(123.0);
		insurancePayTemplate.setComEmplRate(4.1);
		insurancePayTemplate.setComEmplFixed(128.6);
		insurancePayTemplate.setPerMateRate(3.7);
		insurancePayTemplate.setPerMateFixed(226.0);
		insurancePayTemplate.setComMateRate(3.9);
		insurancePayTemplate.setComMateFixed(232.0);
		insurancePayTemplate.setPerHousRate(7.0);
		insurancePayTemplate.setPerHousFixed(122.0);
		insurancePayTemplate.setComHousRate(3.4);
		insurancePayTemplate.setComHousFixed(230.0);
		insurancePayTemplate.setRemark("上海地区缴纳");
		insurancePayTemplate.setUpdatedBy("121212");
		if (StringUtils.isEmpty(insurancePayTemplate.getuId())
				|| StringUtils.isEmpty(insurancePayTemplate.getApplyNo())) {
			return JSONResultUtil.setError("F00002", "参数uId或applyNo为空");
		}
		insurancePayTemplateService.updateINsurancePayTemplate(insurancePayTemplate);
		return JSONResultUtil.setSuccess();
	}
}
