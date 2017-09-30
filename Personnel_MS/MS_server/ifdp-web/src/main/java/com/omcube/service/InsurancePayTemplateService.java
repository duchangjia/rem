package com.omcube.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.omcube.model.mapper.InsurancePayTemplateMapper;
import com.omcube.model.po.InsurancePayTemplatePO;
import com.omcube.util.JSONResultUtil;

@Component
public class InsurancePayTemplateService {

	 protected final Log logger = LogFactory.getLog(getClass());
	 @Autowired
	 private InsurancePayTemplateMapper insurancePayTemplateMapper;
	 //添加保险纳税模板
	 public Object addInsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate){
		 //获取最大模板编号applyNo+1
		 String string =insurancePayTemplateMapper.queryMaxApplyNo(insurancePayTemplate.getuId());
		 if(string == null || string.length()==0){
			 string ="0";
		 }
			int num = Integer.parseInt(string);
			num++;
			if(num<10){
				string="000"+num;
			}else if(num<100){
				string="00"+num;
			}else if(num<1000){
				string="0"+num;
			}else if(num<10000){
				string=""+num;
			}else{
				return JSONResultUtil.setError("", "新增模板编号超过4位数");
			}
		//设置新模板编号
		 insurancePayTemplate.setApplyNo(string);
		 //添加保险纳税模板
		 logger.info("uId为"+insurancePayTemplate.getuId()+",用户编号为"+insurancePayTemplate.getApplyNo()+"准备添加编号为"+insurancePayTemplate.getApplyNo()+"的保险缴纳模板");
		 insurancePayTemplateMapper.addInsurancePayTemplate(insurancePayTemplate);
		 logger.info("uId为"+insurancePayTemplate.getuId()+",用户编号为"+insurancePayTemplate.getApplyNo()+"成功添加了编号为"+insurancePayTemplate.getApplyNo()+"的保险缴纳模板");
		 return JSONResultUtil.setSuccess();
	 }
	 //修改保险纳税模板
	public void updateINsurancePayTemplate(InsurancePayTemplatePO insurancePayTemplate) {
		logger.info("uId为"+insurancePayTemplate.getuId()+",用户编号为"+insurancePayTemplate.getApplyNo()+"准备修改编号为"+insurancePayTemplate.getApplyNo()+"的保险缴纳模板");
		insurancePayTemplateMapper.updateInsurancePayTemplate(insurancePayTemplate);	
		logger.info("uId为"+insurancePayTemplate.getuId()+",用户编号为"+insurancePayTemplate.getApplyNo()+"成功修改了编号为"+insurancePayTemplate.getApplyNo()+"的保险缴纳模板");
	}
	//根据uid和模板编号详细查询单个保险缴纳模板
	public InsurancePayTemplatePO queryInsurancePayTemplate(String uId, String applyNo) {
		
		return insurancePayTemplateMapper.queryInsurancePayTemplate(uId, applyNo);
	}
	//通过uid查询所有的保险缴纳模板列表
	public List<InsurancePayTemplatePO> queryInsurancePayTemplates(String uId) {
		return insurancePayTemplateMapper.queryInsurancePayTemplates(uId);
	}
}
