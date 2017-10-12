package com.omcube.web.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
public class VisaFreeHolidayController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private VisaFreeHolidayService visaFreeHolidayService;

	// 查询所有列表
	@GetMapping(value = "queryVisaFreeHolidayList/{uId}")
	@Cacheable(value = "queryCache")
	public Object queryVisaFreeHolidayList(@PathVariable String uId,
			Integer pageSize, Integer pageNum) {
		// 判断传入参数是否为空,若为空则返回错误信息
		if (StringUtils.isEmpty(uId)) {
			logger.error("the request params uId is null");
			return JSONResultUtil.setError("F00002",
					"the request params uId is null");
		}
		// 使用pagehelper插件进行分页查询
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 5 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<VisaFreeHolidayPo> VisaFreeHolidays = visaFreeHolidayService
				.queryVisaFreeHolidayList(uId);
		PageInfo<VisaFreeHolidayPo> pageInfo = new PageInfo<VisaFreeHolidayPo>(
				VisaFreeHolidays);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 新增
	@RequestMapping(value = "insertVisaFreeHoliay", method = RequestMethod.GET)
	public Object insertVisaFreeHoliay(VisaFreeHolidayPo visaFreeHolidayPo) {

		// VisaFreeHolidayPo v = new VisaFreeHolidayPo();
		// v.setUid("001");
		// v.setDay("20150703");
		// v.setDayFlag("2");
		// v.setRemark("fdfsfsdfsfsfsfsrewr");

		visaFreeHolidayService.insertVisaFreeHoliday(visaFreeHolidayPo);
		return JSONResultUtil.setSuccess();
	}

	// 条件组合查询
	@GetMapping(value = "queryVisaFreeHoliay")
	@Cacheable(value = "queryCache")
	public Object queryVisaFreeHoliay(
			@RequestParam QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest,
			Integer pageSize, Integer pageNum) {
		if (queryVisaFreeHolidayRequest == null && pageSize == null
				|| pageNum == null) {
			return JSONResultUtil.setError("F00002", "参数 pageNum或pageSize 为空");
		}
		// 没有任何条件默认查询所有
		// if (queryVisaFreeHolidayRequest == null && pageSize != null &&
		// pageNum != null) {
		// return queryVisaFreeHolidays(uid,pageSize, pageNum);
		// }
		// 有条件的查询
		// 使用pagehelper插件进行分页查询
		PageHelper.startPage(pageNum, pageSize, true);
		QueryVisaFreeHolidayRequest q = new QueryVisaFreeHolidayRequest();
		q.setStartDate("20140806");
		q.setUid("001");
		q.setDayFlag("1");
		q.setEndDate("20141004");
		List<VisaFreeHolidayPo> VisaFreeHolidays = visaFreeHolidayService
				.queryVisaFreeHolidaysByCondition(q);
		PageInfo<VisaFreeHolidayPo> pageInfo = new PageInfo<VisaFreeHolidayPo>(
				VisaFreeHolidays);
		return JSONResultUtil.setSuccess(pageInfo);
	}

	// 删除
	@RequestMapping(value = "/deleteVisaFreeHoliday/{day}", method = RequestMethod.GET)
	public Object deleteVisaFreeHoliday(@PathVariable String day) {
		if (StringUtils.isEmpty(day)) {
			logger.error("the request params organNo is null");
			return JSONResultUtil.setError("F00002",
					"the request params organNo is null");
		}
		visaFreeHolidayService.deleteVisaFreeHoliday(day);
		return JSONResultUtil.setSuccess();
	}
}
