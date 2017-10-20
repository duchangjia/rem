package com.omcube.web.controller;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;
import com.omcube.model.request.QueryFuncRequest;
import com.omcube.model.response.FuncResponse;
import com.omcube.model.response.UserListInfo;
import com.omcube.service.FuncService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/function")
public class FuncController {
    
    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private FuncService funcService;
    
    
    
    /**
     * 1.获取所有下拉列表框中的查询条件
     * url:/function/getQueryConditions
     * @return
     * 
     */
    @GetMapping(value = "/getQueryConditions")
    public Object getQueryConditions()
    {
	Map<String, Object> queryConditions = funcService.getQueryConditions();
	
	return JSONResultUtil.setSuccess(queryConditions);
    }
    
    
    
    
    
    /**
     * 2.根据查询条件获取功能列表
     * url:/function/queryFuncList
     * @param queryFuncRequest
     * @return
     */
    @GetMapping(value = "/queryFuncList")
    public Object queryFuncList(QueryFuncRequest queryFuncRequest)
    {
	
	if (StringUtils.isEmpty(queryFuncRequest))
	{
	    logger.error("the requestBody queryFuncRequest is null");
	    return JSONResultUtil.setError("F00002", "the requestBody queryFuncRequest is null");
	}	
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	queryFuncRequest.setUid(sysLoginCtrl.getUid());
	
	if (queryFuncRequest.getPageNum() <= 0) {
	    queryFuncRequest.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
	}
	if (queryFuncRequest.getPageSize() <= 0) {
	    queryFuncRequest.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
	}
	if (queryFuncRequest.getPageSize() > 100) {
	    queryFuncRequest.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
	}
	PageHelper.startPage(queryFuncRequest.getPageNum(), queryFuncRequest.getPageSize(), true);
	List<FuncResponse> funcList = funcService.queryFuncList(queryFuncRequest);
	PageInfo<FuncResponse> pageInfo = new PageInfo<FuncResponse>(funcList);
	return JSONResultUtil.setSuccess(pageInfo);

    }
    
    
    
    

}
