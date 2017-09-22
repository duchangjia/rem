package com.omcube.controller;

import com.omcube.model.po.SysUserPO;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;
import com.omcube.model.mapper.SysUserMapper;

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
@RequestMapping(value = "/user")
@CacheConfig(cacheNames = "users")
public class UserController {

	protected final Log logger = LogFactory.getLog(getClass());
	
    @Autowired
    private SysUserMapper userMapper;

    @RequestMapping(value = "/queryUser", method = RequestMethod.GET)
    @Cacheable
    public Object queryUser(@RequestParam String userNo,@RequestParam String userName) {
    	/*logger.info(String.format("the request pragram userNo:%s,userName:%s", userNo,userName));
    	//校验参数，至少一个不为空
    	if(StringUtils.isEmpty(userNo) && StringUtils.isEmpty(userName))
    	{
    		logger.error("the request params userNo and userName is null");
    		return JSONResultUtil.setError("F00002", "the request params userNo and userName is null");
    	}
    	if (userMapper == null)
    	{
    		userMapper = SpringUtil.getBean(SysUserMapper.class);
    	}
    	SysUserPO sysUserPo = userMapper.queryUser(userNo,userName);
    	logger.info(sysUserPo);*/
        return JSONResultUtil.setSuccess( userMapper.queryUser("1","jinx"));
    }

    @RequestMapping(value = "/queryUserByName", method = RequestMethod.GET)
    @Cacheable
    public Object queryUserByName(@RequestParam String userName)
    {
    	return JSONResultUtil.setSuccess(userMapper.getUserByUsername(userName));
    }
}
