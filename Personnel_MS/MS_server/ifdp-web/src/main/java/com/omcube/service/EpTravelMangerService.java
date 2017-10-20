package com.omcube.service;

import java.util.List;

import com.omcube.model.po.EpTravelPO;
import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;

public interface EpTravelMangerService {
    
    List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest);
    
    TravelResponse getTravelInfoByApplyNo(QueryTravelRequest queryTravelRequest);
    
    void deleteTravel(QueryTravelRequest queryTravelRequest) throws Exception;
    
    void modifyTravelInfo(EpTravelPO epTravelPO) throws Exception;

    void addTravelInfo(EpTravelPO epTravelPO) throws Exception;
    
    TravelResponse getUseInfoByUserNo(QueryTravelRequest queryTravelRequest);
    
}
