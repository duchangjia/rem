package com.omcube.model.mapper;

import com.omcube.model.po.SysRolePO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SysRoleMapper {

    @Select("select r.* from sys_role r, sys_role_action ra where r.role_id=ra.role_id and ra.action_id=#{actionId}")
    @Results({
            @Result(id = true, column = "role_id", property = "roleId"),
            @Result(column = "role_name", property = "roleName")
    })
    List<SysRolePO> getByActionId(String actionId);

    @Select("select r.* from sys_role r, sys_user_role ur where r.role_id=ur.role_id and ur.user_id=#{userId}")
    @Results({
            @Result(id = true, column = "role_id", property = "roleId"),
            @Result(column = "role_name", property = "roleName")
    })
    List<SysRolePO> getByUserId(String userId);
}
