package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.response.EpPayChageInfResponse;
import com.omcube.service.EpPayChageInfService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value = "/epPayChageInf")
public class EpPayChageInfController {

	@Autowired
	private EpPayChageInfService epPayChageInfService;

	// 列表查询调薪信息
	@GetMapping(value = "/selectListEpPayChageInf")
	@Cacheable(value = "queryCache")
	public Object selectListEpPayChageInf(HttpServletRequest request,
			Integer pageNum, Integer pageSize, String startTime,
			String endTime) {
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<EpPayChageInfResponse> list = epPayChageInfService
				.selectListEpPayChageInf(startTime, endTime);
		PageInfo<EpPayChageInfResponse> pageInfo = new PageInfo<EpPayChageInfResponse>(
				list);
		return JSONResultUtil.setSuccess(pageInfo);

	}

}
