package com.omcube.model.mapper;

import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.request.UpdateUserInfoRequest;
import com.omcube.model.response.UserDetailInfo;
import com.omcube.model.response.UserListInfo;

import java.util.List;

import org.apache.ibatis.annotations.*;

@Mapper
public interface SysUserMapper {

    List<UserListInfo> queryUserList(QueryUserRequest queryUserReq);

    UserDetailInfo queryUserDetail(@Param("uid") String uid, @Param("userNo") String userNo);

    void updateUserInfo(UpdateUserInfoRequest updateUserInfo);

    void updteUserRoleInfo(UpdateUserInfoRequest updateUserInfo);

}
