package com.omcube.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.AttencePO;

public interface AttenceService {
    
    void addAttenceTemplate(@Param("attenceList")List<AttencePO> attenceList); 

}
