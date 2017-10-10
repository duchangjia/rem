package com.omcube.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.model.response.QueryUserInfoResponse;

public interface UserInfoService {

    List<QueryUserInfoResponse> queryUser(QueryUserRequest queryUserReq);

    List<QueryUserInfoResponse> queryUserLoad(@Param("uid") String uid, @Param("userNo") String userNo);

    void updateUserInfo(UpdateUserInfoRequest updateUserInfo);
}
