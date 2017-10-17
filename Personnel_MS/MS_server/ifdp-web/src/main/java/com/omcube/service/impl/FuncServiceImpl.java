package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.SysMenuFuncMapper;
import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuPO;
import com.omcube.model.request.QueryFuncRequest;
import com.omcube.model.response.FuncResponse;
import com.omcube.service.FuncService;


@Service
public class FuncServiceImpl implements FuncService{
    
    @Autowired
    private SysMenuFuncMapper sysMenuFuncMapper;

    @Override
    public List<FuncResponse> queryFuncList(QueryFuncRequest queryFuncRequest)
    {
	List<FuncResponse> list = sysMenuFuncMapper.queryFuncList(queryFuncRequest);
	return list;
    }

    @Override
    public Map<String, Object> getQueryConditions()
    {
	
	List<SysBsnPO> funcQueryConditions = sysMenuFuncMapper.getFuncQueryConditions();
	List<SysMenuPO> menuQueryConditions = sysMenuFuncMapper.getMenuQueryConditions();	
	Map<String, Object> map= new HashMap<>();
	map.put("funcQueryConditions", funcQueryConditions);
	map.put("menuQueryConditions", menuQueryConditions);
	return map;
    }
    
    
    
    
    
    

}
