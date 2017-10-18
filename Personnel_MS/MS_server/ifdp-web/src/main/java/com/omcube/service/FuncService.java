package com.omcube.service;

import java.util.List;
import java.util.Map;

import com.omcube.model.request.QueryFuncRequest;
import com.omcube.model.response.FuncResponse;

public interface FuncService {
    
    
    List<FuncResponse> queryFuncList(QueryFuncRequest queryFuncRequest);
    Map<String,Object> getQueryConditions();

}
