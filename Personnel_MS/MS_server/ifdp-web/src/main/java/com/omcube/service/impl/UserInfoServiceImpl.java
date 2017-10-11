package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.SysUserMapper;
import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.model.response.QueryUserInfoResponse;
import com.omcube.service.UserInfoService;

@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private SysUserMapper userMapper;

    @Transactional
    @Override
    public void updateUserInfo(UpdateUserInfoRequest updateUserReq) {
	//更新用户表
	userMapper.updateUserInfo(updateUserReq);

	//更用户角色关联表
	userMapper.updteUserRoleInfo(updateUserReq);

    }

    @Override
    public List<QueryUserInfoResponse> queryUser(QueryUserRequest queryUserReq) {
	return userMapper.queryUser(queryUserReq);
    }

    @Override
    public List<QueryUserInfoResponse> queryUserLoad(String uid, String userNo) {
	return userMapper.queryUserLoad(uid, userNo);
    }

}
