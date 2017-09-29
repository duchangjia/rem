package com.omcube.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
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
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

@RestController
@RequestMapping(value = "/organ")

public class OrganController {
	
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
    private SysOrganMapper sysOrganMapper;
	
		/**
		 * 1.获取总公司及其下属机构
		 * @param organ_no
		 * @return
		 */
		@RequestMapping(value = "/queryOrganTreeList", method = RequestMethod.GET)
	    
	    public Object queryOrganTreeList( String organ_no) {
	  
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}    	
	    	List<OrganTree> organTreeList = sysOrganMapper.queryOrganTreeList(organ_no);	    	
	    	return JSONResultUtil.setSuccess(organTreeList);    
	    
	    }
		
		/**
		 * 2.查询上级机构信息
		 * @param organ_no
		 * @return
		 */
	    @RequestMapping(value = "/queryParentOrgan", method = RequestMethod.GET)
	        
	    public Object queryParentOrgan(String organ_no ){
	    	  	
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}
	    		
	    	SysOrganPO sysOrganPO = sysOrganMapper.queryParentOrgan(organ_no);
	    	
	        return JSONResultUtil.setSuccess(sysOrganPO);
	    	    
	    }
	        
	    /**
	     * 3.查询下级机构的信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/queryChildOrgan", method = RequestMethod.GET)
        
	    public Object queryChildOrgan(HttpServletRequest request, Integer pageNum, Integer pageSize , String organ_no ){

	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}
	    	    	
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
	    
	    @RequestMapping(value = "/queryOrganUser", method = RequestMethod.GET)
        
	    public Object queryOrganUser(HttpServletRequest request, Integer pageNum, Integer pageSize,String organ_no ){
	    	  
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}
	        	
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
	    @RequestMapping(value = "/deleteOrgan", method = RequestMethod.GET)
        
	    public Object deleteOrgan(@RequestParam String organ_no){
	    	  
	    	
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}    	
	    	sysOrganMapper.deleteOrgan(organ_no);
	    	
	    	return JSONResultUtil.setSuccess(null);
	    	   	
	    }
	    
	    /**
	     * 6.增加机构人员
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/addOrganUser", method = RequestMethod.GET)
        
	    public Object addOrganUser(@RequestParam SysUserPO sysUserPO ){
	   
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}    	
	    	sysOrganMapper.addOrganUser(sysUserPO);
	    	
	    	return JSONResultUtil.setSuccess(null);
	    	   	
	    }
	    
	   
	
	    /**
	     * 7.删除机构人员
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/deleteOrganUser", method = RequestMethod.GET)
        
	    public Object deleteOrganUser(String userNo ){
	   
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}    	
	    	sysOrganMapper.deleteOrganUser(userNo);
	    	
	    	return JSONResultUtil.setSuccess(null);
	    	   	
	    }
	    
	    
	    
	    /**
	     * 8.更新机构信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/updateOrgan", method = RequestMethod.GET)
        
	    public Object updateOrgan(String organ_no ){
	   
	    	if (sysOrganMapper == null)
	    	{
	    		sysOrganMapper = SpringUtil.getBean(SysOrganMapper.class);
	    	}    	
	    	//sysOrganMapper.updateOrgan(organ_no);
	    	
	    	return JSONResultUtil.setSuccess(null);
	    	   	
	    }
	    
	    
	    
	    
	
	

}
