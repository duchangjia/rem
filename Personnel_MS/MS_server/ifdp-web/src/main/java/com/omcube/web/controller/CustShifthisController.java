package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.CustShifthis;
import com.omcube.service.CustShifthisService;
import com.omcube.util.JSONResultUtil;

/**
 * 人事调动
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "/CustShift")
public class CustShifthisController {
	@Autowired
	private CustShifthisService custShifthisService;
	
	//人事调动列表查询
	@GetMapping(value = "/queryCustShifthisList")
	public Object queryCustShifthisList(HttpServletRequest request, Integer pageNum, Integer pageSize ,
			@RequestParam String userNo, @RequestParam String workhisId, @RequestParam String startTime, @RequestParam String endTime){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 10 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<CustShifthis> list = custShifthisService.getCustShifthisList(userNo, workhisId, startTime, endTime);
		PageInfo<CustShifthis> pageInfo = new PageInfo<CustShifthis>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}
	
	//人事调动详情查询
	@GetMapping(value = "/queryCustShifthisDetail")
	public Object queryCustShifthisDetail(@RequestParam String userNo, @RequestParam String workhisId){
		return JSONResultUtil.setSuccess(custShifthisService.getCustShifthisDetail(userNo, workhisId));
	}
	
	//人事调动添加
	@PostMapping(value = "/addCustShifthis")
	public void addCustShifthis(@RequestParam CustShifthis custShifthis){
		custShifthisService.addCustShifthis(custShifthis);
	}
	
	//人事调动修改
	@PutMapping(value = "/updateCustShifthis")
	public void updateShifthis(@RequestParam CustShifthis custShifthis){
		custShifthisService.updateShifthis(custShifthis);
	}
}
