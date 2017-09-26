package com.omcube.model.mapper;

import com.omcube.model.po.SysUserPO;

import java.util.List;

import org.apache.ibatis.annotations.*;
@Mapper
public interface SysUserMapper {
   
    SysUserPO queryUser(@Param("userNo") String userNo, @Param("userName") String userName);

    @Select("select * from IFDP_SYS_USER_BASE where log_name=#{userName}")
    @Results({
            @Result(id = true, column = "user_no", property = "userNo"),
            @Result(column = "log_name", property = "userName"),
            @Result(column = "pswd", property = "password"),
            @Result(column = "mobile_tel", property = "mobileTEL"),
            @Result(column = "email", property = "email"),
            @Result(column = "user_no", property = "roles", many = @Many(select = "com.omcube.model.mapper.SysRoleMapper.getByUserNo"))
    })// 单个的使用@Results
    SysUserPO getUserByUsername(String userName);

    @Select("select * from IFDP_SYS_USER_BASE")
    @Results({
            @Result(id = true, column = "user_no", property = "userNo"),
            @Result(column = "log_name", property = "userName"),
            @Result(column = "pswd", property = "password"),
            @Result(column = "mobile_tel", property = "mobileTEL"),
            @Result(column = "email", property = "email"),
    })
    List<SysUserPO> getUserAll();
}
