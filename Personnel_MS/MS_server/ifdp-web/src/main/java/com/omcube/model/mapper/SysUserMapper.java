package com.omcube.model.mapper;

import com.omcube.model.request.QueryUserRequest;
import com.omcube.model.response.QueryUserInfoResponse;

import java.util.List;

import org.apache.ibatis.annotations.*;
@Mapper
public interface SysUserMapper {
   
    List<QueryUserInfoResponse> queryUser(QueryUserRequest queryUserReq);

    List<QueryUserInfoResponse> queryUserLoad(@Param("uid") String uid,@Param("userNo") String userNo);
}
