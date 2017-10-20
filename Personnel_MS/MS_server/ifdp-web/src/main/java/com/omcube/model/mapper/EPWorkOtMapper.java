package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.EPWorkOtPO;
import com.omcube.model.request.QueryWorkOt;
import com.omcube.model.response.WorkOtResponse;

/**
 * 加班管理的mapper接口
 * 
 * @author dangjun
 * @version 1.0
 */
@Mapper
public interface EPWorkOtMapper {

	/**
	 * 根据加班的编号查询对应详情
	 * 
	 * @param param
	 * @return
	 */
	EPWorkOtPO queryWorkOtInfo(Map<String, String> param);

	/**
	 * 加班详情的添加
	 * 
	 * @param epWorkOtPO
	 */
	void addWorkOtInfo(WorkOtResponse workOtResponse);

	/**
	 * 加班的详情的修改
	 * 
	 * @param epWorkOtPO
	 */
	void modifyWorkOtInfo(WorkOtResponse workOtResponse);

	/**
	 * 加班详情的删除
	 * 
	 * @param epWorkOtPO
	 */
	void deleteWorkOtInfo(QueryWorkOt queryWorkOt);

	/**
	 * 加班的详情的查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	EPWorkOtPO queryWorkOtInfos(QueryWorkOt queryWorkOt);

	/**
	 * 加班列表的查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	List<WorkOtResponse> queryWorkOtList(QueryWorkOt queryWorkOt);

}
