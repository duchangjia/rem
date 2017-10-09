package com.omcube.web.controller;

import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.model.response.QueryUserInfoResponse;
import com.omcube.service.UserInfoUpdateService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.model.mapper.SysOrganMapper;
import com.omcube.model.mapper.SysUserMapper;

import java.lang.reflect.Field;
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

@RestController
@RequestMapping(value = "iem/user")
@CacheConfig(cacheNames = "users")
public class UserController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private SysUserMapper userMapper;

    @Autowired
    private SysOrganMapper sysOrganMapper;
    
    @Autowired
    private UserInfoUpdateService userUpdateService;
    /**
     * 条件组合查询
     * url:iem/user/queryUser
     * @param queryUserReq
     * @return
     */
    @RequestMapping(value = "/queryUser", method = RequestMethod.GET)
    @Cacheable
    public Object queryUser(QueryUserRequest queryUserReq)
    {
	if (queryUserReq == null)
	{
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", queryUserReq.toString()));
	if (StringUtils.isEmpty(queryUserReq.getUid()))
	{
	    logger.error("the request uid is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request uid is null");
	}
	QueryUserRequest queryUserparam = makeRequestPragram(queryUserReq);
	logger.debug(String.format("the pageNum is  :%s and the pageSize is :%s", queryUserparam.getPageNum(),
		queryUserparam.getPageSize()));

	Result<QueryUserInfoResponse> result = new Result<>();
	//分页
	Page<QueryUserInfoResponse> page = PageHelper.startPage(queryUserparam.getPageNum(),
		queryUserparam.getPageSize(), true);
	List<QueryUserInfoResponse> userInfos = userMapper.queryUser(queryUserparam);
	long totalNum = page.getTotal();
	result.setTotal(totalNum);
	result.setModel(userInfos);
	logger.debug(String.format("queryUser is end  total numbers is :%s", totalNum));

	return JSONResultUtil.setSuccess(result);
    }

    /**
     * 点击用户管理显示该用户所在机构下的所有成员
     * url:iem/user/queryUserLoad?uid=?&userNo=111
     * @param queryUserReq
     * @return
     */
    @RequestMapping(value = "/queryUserLoad", method = RequestMethod.GET)
    @Cacheable
    public Object queryUserLoad(@RequestParam String uid, @RequestParam String userNo)
    {
	logger.info(String.format("the request param uid:%s, userNo:%s", uid, userNo));
	if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(userNo))
	{
	    logger.error("the request param uid or userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the request param uid or userNo is null");
	}

	Result<QueryUserInfoResponse> result = new Result<>();
	//分页
	Page<QueryUserInfoResponse> page = PageHelper.startPage(ConstantUtil.DEFAULT_PAGE_NUM,
		ConstantUtil.DEFAULT_PAGE_SEZE, true);
	List<QueryUserInfoResponse> userInfos = userMapper.queryUserLoad(uid, userNo);
	long totalNum = page.getTotal();
	result.setTotal(totalNum);
	result.setModel(userInfos);
	logger.debug(String.format("queryUserload is end total numbers is :%s", totalNum));

	return JSONResultUtil.setSuccess(result);
    }

    /**
     * 更新用户信息 
     * url:iem/user/updateUserInfo
     * 手机只校验中国大陆 所有信息不可为null 
     * @return
     */
    @RequestMapping(value = "/updateUserInfo", method = RequestMethod.PUT)
    public Object updateUserInfo(UpdateUserInfoRequest updateUserReq)
    {
	if (updateUserReq == null)
	{
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", updateUserReq.toString()));

	//检查参数（数据库不可为空的参数）
	String errMsg = checkUpdateReqParams(updateUserReq);
	if (!StringUtils.isEmpty(errMsg))
	{
	    logger.error(errMsg);
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, errMsg);
	}
	//更新用户表 及 关联角色表  事务一致
	userUpdateService.updateUserInfo(updateUserReq);
	
	logger.info(String.format("update user info end"));
	return JSONResultUtil.setSuccess();

    }

    private String checkUpdateReqParams(UpdateUserInfoRequest updateUserReq)
    {
	//检查参数不为空
	String errMsg = checkFieldIsNull(updateUserReq);
	if (!StringUtils.isEmpty(errMsg))
	{
	    return errMsg;
	}
	//校验公司和部门的从属关系
	List<String> organNos = sysOrganMapper.queryAllChildrenOrganNoes(updateUserReq.getOrganCompanyNo());
	logger.info(String.format("the company children organNos is ：%s", organNos));
	if (!organNos.contains(updateUserReq.getOrganDepartmentNo()))
	{
	    return "the department is not belong to the company";
	}
	//校验规则
	if (!updateUserReq.getEmail().matches(ConstantUtil.EMAIL_REG))
	{
	    return stringErrorFormat(updateUserReq.getEmail());
	}
	if (!updateUserReq.getMobile().matches(ConstantUtil.PHONE_REG))
	{
	    return stringErrorFormat(updateUserReq.getMobile());
	}
	if (!updateUserReq.getUserName().matches(ConstantUtil.NAME_REG))
	{
	    return stringErrorFormat(updateUserReq.getUserName());
	}
	if (!StringUtils.isEmpty(updateUserReq.getRemark())
		&& updateUserReq.getRemark().length() > ConstantUtil.REMARK_MAX_LENGTH)
	{
	    return "the remark is out of the max length 128";
	}
	return null;
    }

    private String checkFieldIsNull(UpdateUserInfoRequest updateUserReq)
    {
	for (Field field : updateUserReq.getClass().getDeclaredFields())
	{
	    field.setAccessible(true);
	    if (field.getName().equals("remark"))
	    {
		continue;
	    }
	    else
	    {
		try
		{
		    if (StringUtils.isEmpty(field.get(updateUserReq)))
		    {
			return stringErrorFormat(field.getName());
		    }
		}
		catch (IllegalArgumentException | IllegalAccessException e)
		{
		    logger.error(String.format("check field %s is error.", field.getName()));
		}
	    }
	}
	return null;
    }

    private String stringErrorFormat(String param)
    {
	return String.format("the request param %s is invalid", param);
    }

    private QueryUserRequest makeRequestPragram(QueryUserRequest queryUserReq)
    {
	if (queryUserReq.getPageNum() <= 0)
	{
	    queryUserReq.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
	}
	if (queryUserReq.getPageSize() <= 0)
	{
	    queryUserReq.setPageSize(ConstantUtil.DEFAULT_PAGE_SEZE);
	}
	if (queryUserReq.getPageSize() > 100)
	{
	    queryUserReq.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SEZE);
	}
	//如果不为空判断是那种条件查询
	String userFeatureInfo = queryUserReq.getUserFeatureInfo();
	logger.debug(String.format("user feature info is :%s", userFeatureInfo));
	if (!StringUtils.isEmpty(userFeatureInfo))
	{
	    if (userFeatureInfo.matches(ConstantUtil.EMAIL_REG))
	    {
		queryUserReq.setEmail(userFeatureInfo);
	    }
	    else if (userFeatureInfo.matches(ConstantUtil.PHONE_REG))
	    {
		queryUserReq.setMobileTEL(userFeatureInfo);
	    }
	    else if (userFeatureInfo.matches(ConstantUtil.NAME_REG))
	    {
		queryUserReq.setUserName(userFeatureInfo);
	    }
	    else
	    {
		queryUserReq.setUserNo(userFeatureInfo);
	    }
	}
	return queryUserReq;
    }
}
