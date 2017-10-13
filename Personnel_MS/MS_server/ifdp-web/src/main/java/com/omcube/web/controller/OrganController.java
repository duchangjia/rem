package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;
import com.omcube.model.response.UserDetailInfo;
import com.omcube.service.OrganService;
import com.omcube.service.UserInfoService;
import com.omcube.service.UserService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/organ")

public class OrganController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private OrganService organService;
    
    @Autowired
    private UserInfoService userInfoService;

    /**
     * 1.获取总公司及其所有下属机构
     * url:/organ/queryOrganList/organNo
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryOrganList/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryOrganTreeList(@PathVariable String organNo)
    {
	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}
	List<OrganTree> organTreeList = organService.queryOrganList(organNo);
	return JSONResultUtil.setSuccess(organTreeList);

    }

    /**
     * 2.人事系统：查询并回显当前机构信息
     * url:/iem/organ/queryCurrentOrgan/organNo
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryCurrentOrgan/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCurrentOrgan(@PathVariable String organNo)
    {

	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}

	SysOrganPO sysOrganPO = organService.queryCurrentOrgan(organNo);

	if (StringUtils.isEmpty(sysOrganPO))
	{
	    logger.error("sysOrganPO is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前机构不存在");
	}
	return JSONResultUtil.setSuccess(sysOrganPO);

    }

    /**
     * 3.查询当前机构、上级机构及机构详情信息

     * url:/organ/queryOrganAndParentOrganDetail/organNo
     * @param organ_no
     * @return
     */
    @GetMapping(value = "/queryCurrentAndParentOrganDetail/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryCurrentAndParentOrganDetail(@PathVariable String organNo)

    {

	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}


	SysOrganPO sysOrganPO = organService.queryCurrentAndParentOrganDetail(organNo);

	return JSONResultUtil.setSuccess(sysOrganPO);

    }

    /**
     * 4.查询当前机构的直属下级机构详情
     * url:/organ/queryChildOrganDetail/organNo
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryChildOrganDetail/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryChildOrganDetail(HttpServletRequest request, Integer pageNum, Integer pageSize,
	    @PathVariable String organNo)
    {

	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);

	List<SysOrganPO> list = organService.queryChildOrganDetail(organNo);
	PageInfo<SysOrganPO> pageInfo = new PageInfo<SysOrganPO>(list);
	return JSONResultUtil.setSuccess(pageInfo);

    }

    /**
     * 5.查询机构下的人员
     * url:/organ/queryOrganMember/organNo
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryOrganMember/{organNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryOrganMember(HttpServletRequest request, Integer pageNum, Integer pageSize,
	    @PathVariable String organNo)
    {

	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}
	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 2 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);

	List<SysUserPO> list = organService.queryOrganMember(organNo);
	PageInfo<SysUserPO> pageInfo = new PageInfo<SysUserPO>(list);

	return JSONResultUtil.setSuccess(pageInfo);

    }

    /**
     * 6.删除机构：逻辑删除
     * url:/organ/deleteOrganInfo/organNo
     * @param organNo
     * @return
     */
   
    @DeleteMapping(value = "/deleteOrganInfo/{organNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deleteOrganInfo(@PathVariable String organNo)
    {

	if (StringUtils.isEmpty(organNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params organNo is null");
	}
	//删除机构前还需确认机构下是否有子部门和人员,需作进一步判断
	List<SysOrganPO> organChildlist = organService.queryChildOrganDetail(organNo);
	List<SysUserPO> organMemberList = organService.queryOrganMember(organNo);

	if (organChildlist.size() > 0)
	{

	    return JSONResultUtil.setError("F00002", "该机构下尚有子机构，请进行撤销或合并");
	}

	if (organMemberList.size() > 0)
	{

	    return JSONResultUtil.setError("F00002", "该机构下尚有人员，请进行撤销或合并");
	}

	organService.deleteOrganInfo(organNo);

	return JSONResultUtil.setSuccess();

    }

    /**
     * 7.在当前机构下增加机构人员
     * url:/organ/addOrganMember
     * @param sysUserPO
     * @return 
     */
    @PostMapping(value = "/addOrganMember")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addOrganMember(@RequestBody SysUserPO sysUserPO)
    {

	if (sysUserPO == null)
	{
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", sysUserPO.toString()));
	
	organService.addOrganMember(sysUserPO);

	return JSONResultUtil.setSuccess();

    }

    /**
     * 8.根据机构人员编号-删除机构下的人员
     * url:/organ/deleteOrganMember/userNo
     * @param userNo
     * @return
     */
    @DeleteMapping(value = "/deleteOrganMember/{userNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deleteOrganUser(@PathVariable String userNo)
    {

	if (StringUtils.isEmpty(userNo))
	{
	    logger.error("the request params organNo is null");
	    return JSONResultUtil.setError("F00002", "the request params userNo is null");
	}

	organService.deleteOrganMember(userNo);
	return JSONResultUtil.setSuccess();

    }

    /**
     * 9.更新机构及机构详情信息
     * url:/organ/modifyOrganInfo
     * @param sysOrganPO
     * @return
     */
    @PutMapping(value = "/modifyOrganInfo")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object modifyOrganInfo(@RequestBody SysOrganPO sysOrganPO)
    {

	if (sysOrganPO == null)
	{
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String userNo = sysLoginCtrl.getUserNo();
	UserDetailInfo userDetailInfo = userInfoService.queryUserDetail(uId,userNo);
	//添加更新机构人员
	sysOrganPO.setUpdatedBy(userDetailInfo.getUserName());
	organService.modifyOrganInfo(sysOrganPO);
	return JSONResultUtil.setSuccess();

    }

    /**
     * 10.增加机构及机构详情信息
     * url:/organ/addOrgan
     * @param sysOrganPO
     * @return
     */
    @PostMapping(value="/addOrgan")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addOrgan(@RequestBody SysOrganPO sysOrganPO)
    {

	if (sysOrganPO == null)
	{
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", sysOrganPO.toString()));
	
	String organLevel = sysOrganPO.getOrganLevel();
	if (StringUtils.isEmpty(organLevel))
	{
	    logger.error("the organLevel is null");
	    return JSONResultUtil.setError("F00002", "the request params organLevel is null");
	}
	//获取系统管理人员的uid和userNo
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String userNo = sysLoginCtrl.getUserNo();
	UserDetailInfo userDetailInfo = userInfoService.queryUserDetail(uId,userNo);
	sysOrganPO.setCreatedBy(userDetailInfo.getUserName());
	sysOrganPO.setUpdatedBy(userDetailInfo.getUserName());
	sysOrganPO.setuId(uId);
	
	//获取当前机构的organLevel,创建子机构级别
	int newOrganLevel = Integer.parseInt(organLevel)+1;
	sysOrganPO.setOrganLevel(String.valueOf(newOrganLevel));
	organService.addOrgan(sysOrganPO);
	return JSONResultUtil.setSuccess();

    }

}
