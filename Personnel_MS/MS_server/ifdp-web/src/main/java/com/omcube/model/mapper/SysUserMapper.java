package com.omcube.model.mapper;

import com.omcube.model.po.SysUserPO;
import org.apache.ibatis.annotations.*;

@Mapper
public interface SysUserMapper {
    @Select("select * from sys_user where user_id= #{id}")
    @ResultMap("SysUserMap")// 公共的使用@ResultMap
    SysUserPO getUserById(String id);

    @Select("select * from sys_user where username=#{username}")
    @Results({
            @Result(id = true, column = "user_id", property = "id"),
            @Result(column = "mobile_no", property = "mobileNo"),
            @Result(column = "cert_type", property = "certType"),
            @Result(column = "cert_no", property = "certNo"),
            @Result(column = "create_time", property = "createTime"),
            @Result(column = "update_time", property = "updateTime"),
            @Result(column = "user_id", property = "roles", many = @Many(select = "com.omcube.model.mapper.SysRoleMapper.getByUserId"))
    })// 单个的使用@Results
    SysUserPO getUserByUsername(String username);

}
