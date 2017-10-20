package com.omcube.service;

import java.util.List;

import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;

public interface EpTravelMangerService {
    
    List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest);
    TravelResponse getTravelInfoByUserNo(QueryTravelRequest queryTravelRequest);
    void deleteTravel(QueryTravelRequest queryTravelRequest);
}
