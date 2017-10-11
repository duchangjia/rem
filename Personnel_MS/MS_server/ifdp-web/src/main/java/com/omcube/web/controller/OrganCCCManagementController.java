package com.omcube.web.controller;

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

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.mapper.OrganCCCManagementMapper;
import com.omcube.model.po.OrganCCCManagemenPO;
import com.omcube.service.OrganCCCManagementService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@RestController
@RequestMapping(value = "/organ")
@CacheConfig(cacheNames = "organs")
public class OrganCCCManagementController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private OrganCCCManagementMapper organCCCManagementMapper;

    @Autowired
    private OrganCCCManagementService organCCCManagementService;

    //查询所有列表
    @RequestMapping(value = "/queryOrganCCCManagements", method = RequestMethod.GET)
    @Cacheable
    public Object queryOrganCCCManagements(@RequestParam Integer pageSize, @RequestParam String pageNum)
    {
	MessageFormat.format("{0} the request at {1,date,yyyy-MM-dd HH:mm:ss}", new Date());
	if (StringUtils.isEmpty(pageNum) || StringUtils.isEmpty(pageSize))
	{
	    logger.error("the request uid or pageSize or pageNum is null");
	    return JSONResultUtil.setError("F00002", "the request params uid or pageSize or pageNum is null");
	}
	if (organCCCManagementMapper == null)
	{
	    organCCCManagementMapper = SpringUtil.getBean(OrganCCCManagementMapper.class);
	}
	PageHelper.startPage(pageNum);
	List<OrganCCCManagemenPO> list = organCCCManagementMapper.queryOrganCCCManagements();
	PageInfo<OrganCCCManagemenPO> pageInfo = new PageInfo<OrganCCCManagemenPO>(list);
	return JSONResultUtil.setSuccess(pageInfo);
    }

    //新增之前先判断数据表中是否存在将要添加的数据 只查询机构号即可
    public List<String> queryOrganCCCManagementNo()
    {
	List<String> list = organCCCManagementMapper.queryOrganCCCManagementNo();
	return list;
    }

    //新增
    @RequestMapping(value = "/insertOrganCCCManagement", method = RequestMethod.GET)
    public Object insertOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO)
    {

	logger.info(String.format("the request pragram userNo:%s,organCCCManagemenPO:%s", organCCCManagemenPO));

	if (organCCCManagemenPO == null)
	{
	    logger.error("the request organCCCManagemenPO is null");
	    JSONResultUtil.setError("F00002", "the request params organCCCManagemenPO is null");
	}
	//判断将要插入的数据是否存在数据库中
	String passParamOrganNo = organCCCManagemenPO.getOrganNo();
	List<String> list = queryOrganCCCManagementNo();
	for (String databaseOrganNo : list)
	{
	    if (databaseOrganNo.equals(passParamOrganNo))
	    {
		logger.error("the databaseOrganNo and passParamOrganNo is same");
		JSONResultUtil.setError("F00002", "the request param  organCCCManagemenPO is exist in database");
	    }
	}

	if (organCCCManagementService == null)
	{
	    organCCCManagementService = SpringUtil.getBean(OrganCCCManagementService.class);
	}

	//测试代码
	//		OrganCCCManagemenPO o= new OrganCCCManagemenPO();
	//		o.setUid("0001");
	//		o.setOrganNo("21213");
	//		o.setStatus("1");
	//		o.setOrganName("gongmo银行");
	//		o.setCostType("02");
	//		o.setCostCode("43434");
	//		o.setDescr("法国德国的士大夫散热");
	//		o.setOrganType("03");
	//		o.setOrganLevel("1");
	//		o.setCreateBy("eruieuf");
	//		o.setCreateDate(new Date());
	//		o.setUpdateBy("ueuiio");
	//		o.setUpdateDate(new Date());
	organCCCManagementService.insertOrganCCCManagement(organCCCManagemenPO);
	return null;
    }

    //修改之前的查询返显
    public Object queryOrganCCCManagementByOrganNo(@RequestParam String organNo)
    {
	return organCCCManagementMapper.queryOrganCCCManagementByOrganNo(organNo);
    }

    //修改
    @RequestMapping(value = "/updateOrganCCCManagement", method = RequestMethod.GET)
    @Cacheable
    public Object updateOrganCCCManagement(OrganCCCManagemenPO organCCCManagemenPO)
    {
	logger.info(String.format("the request pragram organCCCManagemenPO:%s,organCCCManagemenPO:%s",
		organCCCManagemenPO));
	if (organCCCManagemenPO == null)
	{
	    logger.error("the request organCCCManagemenPO is null");
	    return JSONResultUtil.setError("F00002", "the request params organCCCManagemenPO is null");
	}
	String organNo = organCCCManagemenPO.getOrganNo();
	queryOrganCCCManagementByOrganNo(organNo);
	if (organCCCManagementService == null)
	{
	    organCCCManagementService = SpringUtil.getBean(OrganCCCManagementService.class);
	}

	//测试代码
	//		OrganCCCManagemenPO o = new OrganCCCManagemenPO();
	//		o.setOrganNo("21213");
	//		o.setCostCode("0000");
	//		o.setCostType("02");
	//		o.setOrganName("woshishui");
	//		o.setDescr("hjdifhdjfk");
	Integer inte = organCCCManagementService.updateOrganCCCManagement(organCCCManagemenPO);
	return inte;

    }

    //	//删除
    //	@RequestMapping(value = "/deleteOrganCCCManagement", method = RequestMethod.GET)
    //	@Cacheable
    //	public Object deleteOrganCCCManagement(@RequestParam String organNo){
    //		logger.info(String.format("the request pragram organNo:%s,organNo:%s",organNo));
    //		if(StringUtils.isEmpty(organNo)){
    //			logger.error("the request params organNo is null");
    //    		return JSONResultUtil.setError("F00002", "the request params organNo is null");
    //		}
    //		
    //		return null;
    //	}
}
