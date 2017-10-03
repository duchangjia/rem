package com.omcube.controller;

import java.text.MessageFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.mapper.VisaFreeHolidayMapper;
import com.omcube.model.po.VisaFreeHolidayPo;
import com.omcube.service.tx.VisaFreeHolidayService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@RestController
@RequestMapping(value = "/visaFreeHoliday")
@CacheConfig(cacheNames = "visaFreeHolidays")
public class VisaFreeHolidayController {
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private VisaFreeHolidayMapper visaFreeHolidayMapper;
	
	@Autowired
	private VisaFreeHolidayService visaFreeHolidayService;
	
	//查询所有列表
	@RequestMapping(value = "/queryVisaFreeHolidays", method = RequestMethod.GET)
    @Cacheable
	public List<VisaFreeHolidayPo> queryVisaFreeHolidays(String uid){
		//logger.info(String.format("%s the request at %s",new Date()));
		MessageFormat.format("{0} the request at {1,date,yyyy-MM-dd HH:mm:ss}", new Date());
		if(visaFreeHolidayMapper==null){
			visaFreeHolidayMapper= SpringUtil.getBean(VisaFreeHolidayMapper.class);
		}
		List<VisaFreeHolidayPo> list=visaFreeHolidayMapper.queryVisaFreeHolidays(uid);
		return list;
	}
	
	//在新增之前判断将要添加的数据是否存在数据库表中  根据日期来判断
	public List<String> queryVisaFreeHolidayDates(){
		return visaFreeHolidayMapper.queryVisaFreeHolidayDates();
	}
	
	//新增
	@RequestMapping(value = "/insertVisaFreeHoliday", method = RequestMethod.GET)
    @Cacheable
	public Object insertVisaFreeHoliday(@RequestParam String day ,@RequestParam String dayFlag,@RequestParam String remark){
		MessageFormat.format("{0} the request at {1,date,yyyy-MM-dd HH:mm:ss}", new Date());
		//校验参数，至少两个不为空
		if(StringUtils.isEmpty(day) || StringUtils.isEmpty(dayFlag)){
			logger.error("the request params day and dayFlag is null");
    		return JSONResultUtil.setError("F00002", "the request params userNo and userName is null");
		}
		//新增前判断将要添加的数据是否存在数据库中
		List<String> list = queryVisaFreeHolidayDates();
		for(String databaseDate : list){
			if(day.equals(databaseDate)){
				logger.error("the request params day and dayFlag is same");
	    		return JSONResultUtil.setError("F00002", "the request param day is exixt");
			}
		}
		if(visaFreeHolidayService==null){
			visaFreeHolidayService= SpringUtil.getBean(VisaFreeHolidayService.class);
		}
		Integer inte = visaFreeHolidayService.insertVisaFreeHoliday(day,dayFlag,remark);
		return JSONResultUtil.setSuccess(inte);
	}
	
	//修改之前查询数据反显，根据考勤日期查询
	public Object queryVisaFreeHolidayByAttenceTime(@RequestParam Date attenceTime){
		
		return visaFreeHolidayMapper.queryVisaFreeHolidayByAttenceTime(attenceTime);
	}
	
	
	//修改
	@RequestMapping(value = "/updateVisaFreeHoliday", method = RequestMethod.GET)
	@Cacheable
	public Object updateVisaFreeHoliday(@RequestParam Date attenceTime){
	    logger.info(String.format("the request pragram attenceTime:%s,attenceTime:%s",attenceTime));
	    if(attenceTime==null){
		logger.error("the request attenceTime is null");
		JSONResultUtil.setError("F00002", "the request params attenceTime is null");
	    }
	    if(visaFreeHolidayMapper == null){
		visaFreeHolidayMapper= SpringUtil.getBean(VisaFreeHolidayMapper.class);
	    }
	   Integer inte= visaFreeHolidayMapper.updateVisaFreeHoliday(attenceTime);
	   
	    return inte;
	}

	
}
