package com.omcube.model.mapper;

import com.omcube.model.po.SysUserPO;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.util.StringUtils;

@Mapper
public interface SysUserMapper {
   // @SelectProvider(type=CreateUserSql.class, method = "queryUserSql")
    //@ResultMap("SysUserMap")// 公共的使用@ResultMap
	//@Select("select * from IFDP_SYS_USER_BASE where user_no=#{userNo} and log_name=#{userName}")
//    @Results({
//        @Result(id = true, column = "user_no", property = "userNo"),
//        @Result(column = "log_name", property = "userName"),
//        @Result(column = "pswd", property = "password"),
//        @Result(column = "mobile_tel", property = "mobileTEL"),
//        @Result(column = "email", property = "email"),
//        @Result(column = "user_no", property = "roles", many = @Many(select = "com.omcube.model.mapper.SysRoleMapper.getByUserNo"))
//    })
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

    class CreateUserSql{
    	public String queryUserSql(@Param("userNo") final String userNo,@Param("userName") final String userName)
    	{
    		
    		SQL sql = new SQL().SELECT("*").FROM("IFDP_SYS_USER_BASE");
    		if (!StringUtils.isEmpty(userNo))
    		{
    			sql.WHERE("user_no = #{userNo}");
    		}
    		if (!StringUtils.isEmpty(userName))
    		{
    			sql.WHERE("log_name = #{userName}");
    		}
    		return sql.toString();
    	}
    	
    }
}
