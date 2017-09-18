package com.omcube.model.mapper;

import com.omcube.model.po.SysActionPO;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface SysActionsMapper {

    @Select("select * from sys_actions where status='00'")
    @Results({
            @Result(id = true, column = "action_id", property = "actionId"),
            @Result(column = "action_name", property = "actionName"),
            @Result(column = "action_url", property = "actionURL"),
            @Result(column = "action_id", property = "roles", many = @Many(select = "com.omcube.model.mapper.SysRoleMapper.getByActionId", fetchType = FetchType.LAZY))
    })
    List<SysActionPO> getAllActions();
}
