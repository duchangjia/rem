package com.omcube.controller;

import com.omcube.model.po.SysUserPO;
import com.omcube.model.mapper.SysUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
@CacheConfig(cacheNames = "users")
public class UserController {

    @Autowired
    private SysUserMapper userMapper;

    @RequestMapping("/{userNo}")
    @Cacheable
    public SysUserPO getUser(@PathVariable String userNo) {
        return userMapper.getUserByUserNo(userNo);
    }

}
