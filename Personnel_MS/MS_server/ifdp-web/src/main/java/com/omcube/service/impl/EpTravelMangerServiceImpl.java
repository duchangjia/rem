package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.EpTravelMangerMapper;
import com.omcube.model.po.EpTravelPO;
import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;
import com.omcube.service.EpTravelMangerService;

@Service
public class EpTravelMangerServiceImpl implements EpTravelMangerService {
     
    private final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private EpTravelMangerMapper EpTravelMangerMapper;

    @Override
    public List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest) {

	List<TravelResponse> queryTravelList = EpTravelMangerMapper.queryTravelList(queryTravelRequest);

	return queryTravelList;
    }

    @Override
    public TravelResponse getTravelInfoByApplyNo(QueryTravelRequest queryTravelRequest) {
	TravelResponse travelInfo = EpTravelMangerMapper.getTravelInfoByApplyNo(queryTravelRequest);
	return travelInfo;
    }

    @Transactional
    @Override
    public void deleteTravel(QueryTravelRequest queryTravelRequest) throws Exception{
	Map<String, String> paramap = new HashMap<>();
	paramap.put("uid", queryTravelRequest.getUid());
	paramap.put("applyNo", queryTravelRequest.getApplyNo());	
	EpTravelPO epTravelPO = EpTravelMangerMapper.queryTravel(paramap);
	
	if(epTravelPO==null){	    
	    logger.error("the epTravelPO is null");
	    throw new RuntimeException("此出差详情不存在!!!");
	}
	EpTravelMangerMapper.deleteTravel(queryTravelRequest);
	
	

    }

    @Transactional
    @Override
    public void modifyTravelInfo(EpTravelPO epTravelPO) throws Exception {
	
	Map<String, String> paramap = new HashMap<>();
	paramap.put("uid", epTravelPO.getUid());
	paramap.put("applyNo", epTravelPO.getApplyNo());	
	EpTravelPO epTravelPOInfo = EpTravelMangerMapper.queryTravel(paramap);
	
	if(epTravelPOInfo==null){	    
	    logger.error("the epTravelPO is null");
	    throw new RuntimeException("此出差详情不存在!!!");
	}

	EpTravelMangerMapper.modifyTravelInfo(epTravelPO);

    }
    
    @Transactional
    @Override
    public void addTravelInfo(EpTravelPO epTravelPO) throws Exception {
	Map<String, String> paramap = new HashMap<>();
	paramap.put("uid", epTravelPO.getUid());
	paramap.put("applyNo", epTravelPO.getApplyNo());	
	EpTravelPO epTravelPOInfo = EpTravelMangerMapper.queryTravel(paramap);
	
	if(epTravelPOInfo!=null){	    
	    logger.error("the epTravelPO is exist");
	    throw new RuntimeException("此出差编号重复");
	}

	EpTravelMangerMapper.addTravelInfo(epTravelPO);
    }

    @Override
    public TravelResponse getUseInfoByUserNo(QueryTravelRequest queryTravelRequest) {
	
	return EpTravelMangerMapper.getUseInfoByUserNo(queryTravelRequest);
    }

}
