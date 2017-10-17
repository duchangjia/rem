package com.omcube.service;

import java.util.List;

import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.model.response.UserDetailInfo;
import com.omcube.model.response.UserListInfo;

public interface UserInfoService {

    List<UserListInfo> queryUserList(QueryUserRequest queryUserReq);

    UserDetailInfo queryUserDetail(String uid, String userNo);

    void updateUserInfo(UpdateUserInfoRequest updateUserInfo);
}
