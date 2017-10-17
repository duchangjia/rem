package com.omcube.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.EpCustEduHisPO;
import com.omcube.service.EpCustEduHisService;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value="/epCustEduHis")
public class EpCustEduHisController {

    @Autowired
    private EpCustEduHisService epCustEduHisService;
    
    //新增员工教育经历信息
    @PostMapping(value="insertEpCustEduHis")
    public Object insertEpCustEduHis(EpCustEduHisPO epCustEduHisPO){
	epCustEduHisService.insertEpCustEduHis(epCustEduHisPO);
	return JSONResultUtil.setSuccess();
    }
    
    //根据主键(用户编号，序号)删除员工教育经历信息
    @PostMapping(value="deleteEpCustEduHis")
    public Object deleteEpCustEduHis(EpCustEduHisPO epCustEduHisPO){
	epCustEduHisService.deleteEpCustEduHis(epCustEduHisPO);
	return JSONResultUtil.setSuccess();
    }
}
