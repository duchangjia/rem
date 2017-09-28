package com.omcube.model.mapper;

import com.omcube.model.po.SysRolePO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SysRoleMapper {

    @Select("select r.* from IFDP_SYS_ROLE r, IFDP_SYS_REL_ROLE_BSN rb where r.role_no=rb.role_no and rb.bsn_no=#{bsnNo}")
    @Results({
            @Result(id = true, column = "role_no", property = "roleNo"),
            @Result(column = "role_name", property = "roleName")
    })
    List<SysRolePO> getByBusinessNo(String bsnNo);

    @Select("select r.* from IFDP_SYS_ROLE r, IFDP_SYS_REL_USER_ROLE ur where r.role_no=ur.role_no and ur.user_no=#{userNo}")
    @Results({
            @Result(id = true, column = "role_no", property = "roleNo"),
            @Result(column = "role_name", property = "roleName")
    })
    List<SysRolePO> getByUserNo(String userNo);
}
