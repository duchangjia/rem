package com.omcube.model.mapper;

import com.omcube.model.po.SysBusinessPO;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface SysBusinessMapper {

    @Select("select * from IFDP_SYS_BSN where status='1'")
    @Results({
            @Result(id = true, column = "bsn_no", property = "bsnNo"),
            @Result(column = "interface", property = "interfaceName"),
            @Result(column = "bsn_url", property = "bsnURL"),
            @Result(column = "bsn_no", property = "roles", many = @Many(select = "com.omcube.model.mapper.SysRoleMapper.getByBusinessNo", fetchType = FetchType.LAZY))
    })
    List<SysBusinessPO> getAllBusiness();
}
