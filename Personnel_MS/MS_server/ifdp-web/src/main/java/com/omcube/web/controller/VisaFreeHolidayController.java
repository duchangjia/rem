package com.omcube.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;
import com.omcube.service.VisaFreeHolidayService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value = "/visaFreeHoliday")
@CacheConfig(cacheNames = "queryCache")
public class VisaFreeHolidayController {

	@Autowired
	private VisaFreeHolidayService visaFreeHolidayService;

	// 查询所有列表
	@GetMapping(value = "queryVisaFreeHolidays")
	@Cacheable
	public Object queryVisaFreeHolidays(@RequestParam(value = "uid", required = true) String uid,Integer pageSize,
			Integer pageNum) {
		// 判断传入参数是否为空,若为空则返回错误信息
		if (StringUtils.isEmpty(pageNum) || StringUtils.isEmpty(pageSize)) {
			return JSONResultUtil.setError("F00002",
					"参数 uId或pageNum或pageSize 为空");
		}
		// 使用pagehelper插件进行分页查询
		PageHelper.startPage(pageNum, pageSize, true);
		List<VisaFreeHolidayPo> VisaFreeHolidays = visaFreeHolidayService
				.queryVisaFreeHolidays(uid);
		PageInfo<VisaFreeHolidayPo> pageInfo = new PageInfo<VisaFreeHolidayPo>(
				VisaFreeHolidays);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 新增
	@RequestMapping(value="insertVisaFreeHoliay",method = RequestMethod.GET)
	public Object insertVisaFreeHoliay(VisaFreeHolidayPo visaFreeHolidayPo) {
		
//		VisaFreeHolidayPo v = new VisaFreeHolidayPo();
//		v.setUid("001");
//		v.setDay("20150703");
//		v.setDayFlag("2");
//		v.setRemark("fdfsfsdfsfsfsfsrewr");
		
		visaFreeHolidayService.insertVisaFreeHoliday(visaFreeHolidayPo);
		return JSONResultUtil.setSuccess();
	}

	// 条件组合查询
	@GetMapping(value = "queryVisaFreeHoliay")
	@Cacheable
	public Object queryVisaFreeHoliay(
			@RequestParam QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest,
			Integer pageSize,Integer pageNum) {
		if (queryVisaFreeHolidayRequest == null && pageSize == null || pageNum == null) {
			return JSONResultUtil.setError("F00002", "参数 pageNum或pageSize 为空");
		}
		// 没有任何条件默认查询所有
//		if (queryVisaFreeHolidayRequest == null && pageSize != null && pageNum != null) {
//			return queryVisaFreeHolidays(uid,pageSize, pageNum);
//		}
		// 有条件的查询
		// 使用pagehelper插件进行分页查询
		PageHelper.startPage(pageNum, pageSize, true);
		List<VisaFreeHolidayPo> VisaFreeHolidays = visaFreeHolidayService
				.queryVisaFreeHolidaysByCondition(queryVisaFreeHolidayRequest);
		PageInfo<VisaFreeHolidayPo> pageInfo = new PageInfo<VisaFreeHolidayPo>(
				VisaFreeHolidays);
		return JSONResultUtil.setSuccess(pageInfo);
	}
}
