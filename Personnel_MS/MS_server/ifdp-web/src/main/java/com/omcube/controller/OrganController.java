package com.omcube.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;
import com.omcube.service.OrganService;
import com.omcube.serviceImpl.OrganServiceImpl;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@RestController
@RequestMapping(value = "/organ")

public class OrganController {
	
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
    private SysOrganMapper sysOrganMapper;
	
	@Autowired
	private OrganService organService;
	
	
		/**
		 * 1.获取总公司及其所有下属机构
		 * @param organ_no
		 * @return
		 */
		@RequestMapping(value = "/queryOrganTreeList/{organ_no}", method = RequestMethod.GET)
	    
	    public Object queryOrganTreeList(@PathVariable String organ_no) {
	   	
	    	List<OrganTree> organTreeList = sysOrganMapper.queryOrganTreeList(organ_no);	    	
	    	return JSONResultUtil.setSuccess(organTreeList);    
	    
	    }
		
		/**
		 * 2.查询当前机构、上级机构及机构详情信息
		 * @param organ_no
		 * @return
		 */
	    @RequestMapping(value = "/queryParentOrgan/{organ_no}", method = RequestMethod.GET)
	        
	    public Object queryParentOrgan(@PathVariable String organ_no ){
	    		
	    	SysOrganPO sysOrganPO = sysOrganMapper.queryParentOrgan(organ_no);
	    	
	        return JSONResultUtil.setSuccess(sysOrganPO);
	    	    
	    }
	        
	    /**
	     * 3.查询当前机构、下级机构及机构详情信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/queryChildOrgan/{organ_no}", method = RequestMethod.GET)
        
	    public Object queryChildOrgan(HttpServletRequest request, Integer pageNum, Integer pageSize ,@PathVariable String organ_no ){
	
	    	pageNum = pageNum == null ? 1 : pageNum;
			pageSize = pageSize == null ? 3 : pageSize;
	        PageHelper.startPage(pageNum, pageSize,true);
	        
	        List<SysOrganPO> list = sysOrganMapper.queryChildOrgan(organ_no);
	        PageInfo<SysOrganPO> pageInfo = new PageInfo<SysOrganPO>(list);		
	        return JSONResultUtil.setSuccess(pageInfo);
	    	   	
	    }
	   	        
	    /**
	     * 4.查询机构下的人员
	     * @param organ_no
	     * @return
	     */
	    
	    @RequestMapping(value = "/queryOrganUser/{organ_no}", method = RequestMethod.GET)
        
	    public Object queryOrganUser(HttpServletRequest request, Integer pageNum, Integer pageSize,@PathVariable String organ_no ){
	    	  
	    	pageNum = pageNum == null ? 1 : pageNum;
			pageSize = pageSize == null ? 1 : pageSize;
	        PageHelper.startPage(pageNum, pageSize,true);
	    	
	    	List<SysUserPO> list = sysOrganMapper.queryOrganUser(organ_no);
	    	PageInfo<SysUserPO> pageInfo = new PageInfo<SysUserPO>(list);	 
	        
	    	return JSONResultUtil.setSuccess(pageInfo);
	    	   	
	    }
	    
	    /**
	     * 5.删除机构：逻辑删除
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/deleteOrgan/{organ_no}", method = RequestMethod.GET)
        
	    public Object deleteOrgan(@PathVariable String organ_no){
	    	  	
	    	sysOrganMapper.deleteOrgan(organ_no);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	    /**
	     * 6.在当前机构下增加机构人员
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/addOrganUser", method = RequestMethod.POST)
        
	    public Object addOrganUser(SysUserPO sysUserPO ){
	 	    	
	    	if(sysUserPO == null)
	    	{
	    	    logger.error("the request body is null");
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_NULL_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysUserPO.toString()));
	    	
	    	sysOrganMapper.addOrganUser(sysUserPO);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	   
	
	    /**
	     * 7.删除机构人员
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/deleteOrganUser/{userNo}", method = RequestMethod.GET)
        
	    public Object deleteOrganUser(@PathVariable String userNo ){
	   
	    	
	    	sysOrganMapper.deleteOrganUser(userNo);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	    
	    
	    /**
	     * 8.更新机构及机构详情信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/updateOrgan", method = RequestMethod.POST)
        
	    public Object updateOrgan(SysOrganPO sysOrganPO ){
	    	
	    	if(sysOrganPO == null)
	    	{
	    	    logger.error("the request body is null");
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_NULL_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	    	
	    	organService.updateOrgan(sysOrganPO);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	    
	    
	    /**
	     * 9.增加机构及机构详情信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/addOrgan", method = RequestMethod.POST)
        
	    public Object addOrgan(SysOrganPO sysOrganPO ){
	   
	    	if(sysOrganPO == null)
	    	{
	    	    logger.error("the request body is null");
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_NULL_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	    	
	    	organService.addOrgan(sysOrganPO);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	
	

}
