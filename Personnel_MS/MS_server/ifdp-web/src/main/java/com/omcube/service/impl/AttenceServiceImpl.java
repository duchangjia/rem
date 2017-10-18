package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.AttenceMapper;
import com.omcube.model.po.AttencePO;
import com.omcube.service.AttenceService;

@Service
public class AttenceServiceImpl implements AttenceService {
    
    @Autowired
    private AttenceMapper attenceMapper;

    @Transactional
    @Override
    public void addAttenceTemplate(List<AttencePO> attenceList)
    {
	attenceMapper.addAttenceTemplate(attenceList);
	
    }

}
