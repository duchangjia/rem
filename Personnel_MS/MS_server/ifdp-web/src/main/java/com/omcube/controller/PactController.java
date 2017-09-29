package com.omcube.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.PactPO;
import com.omcube.service.PactService;
import com.omcube.util.JSONResultUtil;

/**
 * 合同
 **/
@RestController
@RequestMapping(value = "/iem/pact")
public class PactController {
	
	@Autowired
	private PactService pactService;
	
	//第一次页面显示
	@RequestMapping(value = "/queryPact",method= RequestMethod.GET)
	public Object queryPact(HttpServletRequest request, Integer pageNum, Integer pageSize, String derpNo,String custName,String pactType){
		pageNum = pageNum == null ? 1 :pageNum;
		pageSize = pageSize == null ? 3 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<PactPO> list = pactService.getPactList(derpNo, custName, pactType);
		PageInfo<PactPO> pageInfo = new PageInfo<PactPO>(list);
		return JSONResultUtil.setSuccess(pageInfo);
	}
	
	//合同详细查询
	@RequestMapping(value = "/queryPactDetail", method = RequestMethod.GET)
	public Object queryPactDetail(@RequestParam String pactNo){
		return JSONResultUtil.setSuccess(pactService.getPactByPactNo(pactNo));
	}
	
	//合同变更查询
	@RequestMapping(value = "/queryPactChange", method = RequestMethod.GET)
	public Object queryPactChange(@RequestParam String pactNo){
		return JSONResultUtil.setSuccess(pactService.getPactChangeByPactNo(pactNo));
	}
	
	//合同续签查询
	@RequestMapping(value = "/queryPactRenew", method = RequestMethod.GET)
	public Object queryPactRenew(@RequestParam String pactNo){
		return JSONResultUtil.setSuccess(pactService.getPactRenewByPactNo(pactNo));
	}
}
