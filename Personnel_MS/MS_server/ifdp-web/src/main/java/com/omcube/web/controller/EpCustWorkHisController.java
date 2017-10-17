package com.omcube.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.EpCustWorkHisPO;
import com.omcube.service.EpCustWorkHisService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value="/epCustWorkHis")
public class EpCustWorkHisController {

    @Autowired
    private EpCustWorkHisService epCustWorkHisService;
    
    //新增员工工作经历信息
    @PostMapping(value="insertEpCustWorkHis")
    public Object insertEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO){
	epCustWorkHisService.insertEpCustWorkHis(epCustWorkHisPO);
	return JSONResultUtil.setSuccess();
    }
    
    //根据主键（用户编号，序号）删除员工工作经历信息
    @PostMapping(value="deleteEpCustEduHis")
    public Object deleteEpCustWorkHis(EpCustWorkHisPO epCustWorkHisPO){
	epCustWorkHisService.deleteEpCustWorkHis(epCustWorkHisPO);
	return JSONResultUtil.setSuccess();
    }
}
