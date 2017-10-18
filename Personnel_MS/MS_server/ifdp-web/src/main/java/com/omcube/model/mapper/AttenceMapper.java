package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.AttencePO;
@Mapper
public interface AttenceMapper {
    
    void addAttenceTemplate(@Param("attenceList")List<AttencePO> attenceList);


}
