package com.omcube.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.SysUserMapper;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.service.UserInfoUpdateService;

@Service
public class UserInfoUpdateServiceImpl implements UserInfoUpdateService {

    @Autowired
    private SysUserMapper userMapper;
    
    @Transactional
    @Override
    public void updateUserInfo(UpdateUserInfoRequest updateUserReq)
    {
	//更新用户表
	userMapper.updateUserInfo(updateUserReq);

	//更用户角色关联表
	userMapper.updteUserRoleInfo(updateUserReq);

    }

}
