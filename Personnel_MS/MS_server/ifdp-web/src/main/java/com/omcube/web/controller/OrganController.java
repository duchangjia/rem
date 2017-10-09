package com.omcube.web.controller;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;
import com.omcube.service.OrganService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value = "/iem/organ")

public class OrganController {
	
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
    private SysOrganMapper sysOrganMapper;
	
	@Autowired
	private OrganService organService;
	
	
		/**
		 * 1.获取总公司及其所有下属机构
		 * @param organNo
		 * @return
		 */
		@RequestMapping(value = "/queryOrganList/{organNo}", method = RequestMethod.GET)
	    
	    public Object queryOrganTreeList(@PathVariable String organNo) {
			if (StringUtils.isEmpty(organNo) || StringUtils.isEmpty(organNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params organNo is null");
			}
	   	
	    	List<OrganTree> organTreeList = sysOrganMapper.queryOrganList(organNo);	    	
	    	return JSONResultUtil.setSuccess(organTreeList);    
	    
	    }
		
		/**
		 * 2.查询当前机构、上级机构及机构详情信息
		 * @param organ_no
		 * @return
		 */
	    @RequestMapping(value = "/queryParentOrgan/{organNo}", method = RequestMethod.GET)
	        
	    public Object queryParentOrgan(@PathVariable String organNo ){
	    	
	    	if (StringUtils.isEmpty(organNo) || StringUtils.isEmpty(organNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params organNo is null");
			}
	    		
	    	SysOrganPO sysOrganPO = sysOrganMapper.queryParentOrgan(organNo);
	    	
	        return JSONResultUtil.setSuccess(sysOrganPO);
	    	    
	    }
	        
	    /**
	     * 3.查询当前机构、下级机构及机构详情信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/queryChildOrgan/{organNo}", method = RequestMethod.GET)
        
	    public Object queryChildOrgan(HttpServletRequest request, Integer pageNum, Integer pageSize ,@PathVariable String organNo ){
	    	
	    	if (StringUtils.isEmpty(organNo) || StringUtils.isEmpty(organNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params organNo is null");
			}
	    	pageNum = pageNum == null ? 1 : pageNum;
			pageSize = pageSize == null ? 3 : pageSize;
	        PageHelper.startPage(pageNum, pageSize,true);
	        
	        List<SysOrganPO> list = sysOrganMapper.queryChildOrgan(organNo);
	        PageInfo<SysOrganPO> pageInfo = new PageInfo<SysOrganPO>(list);		
	        return JSONResultUtil.setSuccess(pageInfo);
	    	   	
	    }
	   	        
	    /**
	     * 4.查询机构下的人员
	     * @param organ_no
	     * @return
	     */
	    
	    @RequestMapping(value = "/queryOrganMember/{organNo}", method = RequestMethod.GET)
        
	    public Object queryOrganMember(HttpServletRequest request, Integer pageNum, Integer pageSize,@PathVariable String organNo ){
	    	
	    	if (StringUtils.isEmpty(organNo) || StringUtils.isEmpty(organNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params organNo is null");
			}  
	    	pageNum = pageNum == null ? 1 : pageNum;
			pageSize = pageSize == null ? 1 : pageSize;
	        PageHelper.startPage(pageNum, pageSize,true);
	    	
	    	List<SysUserPO> list = sysOrganMapper.queryOrganMember(organNo);
	    	PageInfo<SysUserPO> pageInfo = new PageInfo<SysUserPO>(list);	 
	        
	    	return JSONResultUtil.setSuccess(pageInfo);
	    	   	
	    }
	    
	    /**
	     * 5.删除机构：逻辑删除
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/deleteOrganInfo/{organNo}", method = RequestMethod.GET)
        
	    public Object deleteOrganInfo(@PathVariable String organNo){
	    	
	    	if (StringUtils.isEmpty(organNo) || StringUtils.isEmpty(organNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params organNo is null");
			}
	    	//删除机构前还需确认机构下是否有子部门和人员,需作进一步判断
	    	List<SysOrganPO> organChildlist = sysOrganMapper.queryChildOrgan(organNo);
	    	List<SysUserPO> organMemberList = sysOrganMapper.queryOrganMember(organNo);
	    	
	    	if(organChildlist.size()>0||organMemberList.size()>0){
	    		
	    		return JSONResultUtil.setError("F00002", "该机构下尚有部门或人员，请进行撤销或合并");
	    	}
	    	
	    	sysOrganMapper.deleteOrganInfo(organNo);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	    /**
	     * 6.在当前机构下增加机构人员ber
	     * @param organ_no
	     * @return 
	     */
	    @RequestMapping(value = "/addOrganMember", method = RequestMethod.POST)
        
	    public Object addOrganMember(SysUserPO sysUserPO ){
	 	    	
	    	if(sysUserPO == null)
	    	{
	    	    logger.error("the request body is null");
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysUserPO.toString()));
	    	
	    	sysOrganMapper.addOrganMember(sysUserPO);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	   
	
	    /**
	     * 7.根据机构人员编号-删除机构下的人员
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/deleteOrganMember/{userNo}", method = RequestMethod.GET)
        
	    public Object deleteOrganUser(@PathVariable String userNo ){
	   
	    	if (StringUtils.isEmpty(userNo) || StringUtils.isEmpty(userNo)) {
				logger.error("the request params organNo is null");
				return JSONResultUtil.setError("F00002", "the request params userNo is null");
			}
	    	sysOrganMapper.deleteOrganMember(userNo);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	    
	    
	    /**
	     * 8.更新机构及机构详情信息
	     * @param organ_no
	     * @return
	     */
	    @RequestMapping(value = "/modifyOrganInfo", method = RequestMethod.PUT)
	    public Object modifyOrganInfo(SysOrganPO sysOrganPO ){
	    	
	    	if(sysOrganPO == null)
	    	{
	    	    logger.error("the request body is null");
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	    	
	    	organService.modifyOrganInfo(sysOrganPO);
	    	
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
	    	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	    	}
	    	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	    	
	    	organService.addOrgan(sysOrganPO);
	    	
	    	return JSONResultUtil.setSuccess();
	    	   	
	    }
	    
	
	

}
