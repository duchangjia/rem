package com.omcube.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;

@Mapper
public interface EpTravelMangerMapper {
    
    List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest);
    
    TravelResponse getTravelInfoByUserNo(QueryTravelRequest queryTravelRequest);
    
    void deleteTravel(QueryTravelRequest queryTravelRequest);

}
