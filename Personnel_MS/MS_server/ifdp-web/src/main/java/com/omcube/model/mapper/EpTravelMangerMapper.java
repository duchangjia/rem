package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.omcube.model.po.EpTravelPO;
import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;

@Mapper
public interface EpTravelMangerMapper {
    
    List<TravelResponse> queryTravelList(QueryTravelRequest queryTravelRequest);
    
    TravelResponse getTravelInfoByApplyNo(QueryTravelRequest queryTravelRequest);
    
    void deleteTravel(QueryTravelRequest queryTravelRequest);

    void modifyTravelInfo(EpTravelPO epTravelPO);
    
    void addTravelInfo(EpTravelPO epTravelPO);
    
    //新增、更新、删除前先根据出差编号查询数据库是否存在记录
    EpTravelPO queryTravel(Map<String, String> paramap);
  
    TravelResponse getUseInfoByUserNo(QueryTravelRequest queryTravelRequest);
    

}
