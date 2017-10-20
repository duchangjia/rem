package com.omcube.web.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.model.request.QueryVisaFreeHolidayRequest;
import com.omcube.service.VisaFreeHolidayService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SpringUtil;
import com.omcube.util.SysLoginCtrlUtil;

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
	@PostMapping(value = "insertVisaFreeHoliay")
	public Object insertVisaFreeHoliay(VisaFreeHolidayPo visaFreeHolidayPo) {

		// VisaFreeHolidayPo v = new VisaFreeHolidayPo();
		// v.setUid("001");
		// v.setDay("20150703");
		// v.setDayFlag("2");
		// v.setRemark("fdfsfsdfsfsfsfsrewr");

		if (visaFreeHolidayPo == null) {
			logger.error("the request visaFreeHolidayPo is null");
			JSONResultUtil.setError("F00002",
					"the request params visaFreeHolidayPo is null");
		}

		// 校验新增的节假日是否存在
		if (visaFreeHolidayService.queryVisaFreeHoliayByDate(
				visaFreeHolidayPo.getDayDate()) != null) {
			logger.error("the VisaFreeHoliay already exists");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the VisaFreeHoliay already exists");
		}

		if (visaFreeHolidayService == null) {
			visaFreeHolidayService = SpringUtil
					.getBean(VisaFreeHolidayService.class);
		}

		visaFreeHolidayService.insertVisaFreeHoliday(visaFreeHolidayPo);
		return JSONResultUtil.setSuccess();
	}

	// 条件组合查询
	@GetMapping(value = "queryVisaFreeHoliayList")
	@Cacheable(value = ConstantUtil.QUERY_CACHE)
	public Object queryVisaFreeHoliayList(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest) {

		if (queryVisaFreeHolidayRequest == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request body is null");
		}

		logger.info(String.format("the request body is %s:",
				queryVisaFreeHolidayRequest.toString()));

		QueryVisaFreeHolidayRequest queryVisaFreeHolidayparam = makeRequestPragram(
				queryVisaFreeHolidayRequest);

		logger.debug(
				String.format("the pageNum is  :%s and the pageSize is :%s",
						queryVisaFreeHolidayparam.getPageNum(),
						queryVisaFreeHolidayparam.getPageSize()));

		Result<VisaFreeHolidayPo> result = new Result<>();

		// 分页
		Page<VisaFreeHolidayPo> page = PageHelper.startPage(
				queryVisaFreeHolidayRequest.getPageNum(),
				queryVisaFreeHolidayparam.getPageSize(), true);
		List<VisaFreeHolidayPo> visaFreeHolidayInfos = visaFreeHolidayService
				.queryVisaFreeHoliayList(queryVisaFreeHolidayparam);
		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModels(visaFreeHolidayInfos);
		logger.debug(String.format(
				"queryVisaFreeHoliday is end  total numbers is :%s", totalNum));

		return JSONResultUtil.setSuccess(result);
	}

	private QueryVisaFreeHolidayRequest makeRequestPragram(
			QueryVisaFreeHolidayRequest queryVisaFreeHolidayRequest) {

		if (queryVisaFreeHolidayRequest.getPageNum() <= 0) {
			queryVisaFreeHolidayRequest
					.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
		}
		if (queryVisaFreeHolidayRequest.getPageSize() <= 0) {
			queryVisaFreeHolidayRequest
					.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
		}
		if (queryVisaFreeHolidayRequest.getPageSize() > 100) {
			queryVisaFreeHolidayRequest
					.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
		}

		// 从session 中获取信息
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		queryVisaFreeHolidayRequest.setuId(sysLoginCtrl.getUid());
		return queryVisaFreeHolidayRequest;
	}

	// 删除 ,在浏览器中测试能够通过,但用junit测试不通过
	@RequestMapping(value = "/deleteVisaFreeHoliday/{dayDate}", method = RequestMethod.GET)
	public Object deleteVisaFreeHoliday(@PathVariable String dayDate) {
		if (StringUtils.isEmpty(dayDate)) {
			logger.error("the request params organNo is null");
			return JSONResultUtil.setError("F00002",
					"the request params organNo is null");
		}
		visaFreeHolidayService.deleteVisaFreeHoliday(dayDate);
		return JSONResultUtil.setSuccess();
	}
}
