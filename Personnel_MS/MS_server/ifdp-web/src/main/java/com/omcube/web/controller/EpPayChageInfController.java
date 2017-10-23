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
import com.omcube.model.po.CustInfoPO;
import com.omcube.model.po.EpCustPayFlowPO;
import com.omcube.model.po.EpPayChageInfPO;
import com.omcube.model.response.EpPayChageInfResponse;
import com.omcube.service.EpPayChageInfService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/epPayChageInf")
public class EpPayChageInfController {

	@Autowired
	private EpPayChageInfService epPayChageInfService;

	// 调薪管理列表查询
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

	// 调薪管理详情查询
	@GetMapping(value = "/selectDetailEpPayChageInf")
	@Cacheable(value = "queryCache")
	public EpPayChageInfResponse selectDetailEpPayChageInf(
			EpPayChageInfResponse epPayChageInfResponse) {
		return epPayChageInfService
				.selectDetailEpPayChageInf(epPayChageInfResponse);
	}

	// 调薪管理新增用户信息
	@PostMapping(value = "/insertEpPayChageInf")
	public Object insertEpPayChageInf(EpPayChageInfPO epPayChageInfPO,
			CustInfoPO custInfo, EpCustPayFlowPO epCustPayFlowPO) {
		epPayChageInfService.insertEpPayChageInf(epPayChageInfPO, custInfo,
				epCustPayFlowPO);
		return JSONResultUtil.setSuccess();
	}
	
	// 调薪管理删除用户调薪信息
	@DeleteMapping(value="deleteEpPayChageInf")
	public Object deleteEpPayChageInf(EpPayChageInfPO epPayChageInfPO){
		epPayChageInfPO.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		return JSONResultUtil.setSuccess();
	}
	
	//调薪管理修改用户调薪信息
	@PutMapping(value="updateEpPayChageInf")
	public Object updateEpPayChageInf(EpPayChageInfPO epPayChageInfPO){
		epPayChageInfPO.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
		return JSONResultUtil.setSuccess();
	}
}
