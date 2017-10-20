package com.omcube.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.omcube.model.mapper.EpTravelMangerMapper;
import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;
import com.omcube.service.EpTravelMangerService;

@Service
public class EpTravelMangerServiceImpl implements EpTravelMangerService {
    
    @Autowired
    private EpTravelMangerMapper EpTravelMangerMapper;

    @Override
    public List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest)
    {
	
	List<TravelResponse> queryTravelList = EpTravelMangerMapper.queryTravelList(queryTravelRequest);
	
	return queryTravelList;
    }

    @Override
    public TravelResponse getTravelInfoByUserNo(QueryTravelRequest queryTravelRequest)
    {
	TravelResponse travelInfo= EpTravelMangerMapper.getTravelInfoByUserNo(queryTravelRequest);
	
	return travelInfo;
    }

    @Transactional
    @Override
    public void deleteTravel(QueryTravelRequest queryTravelRequest)
    {
	EpTravelMangerMapper.deleteTravel(queryTravelRequest);
	
    }

}
