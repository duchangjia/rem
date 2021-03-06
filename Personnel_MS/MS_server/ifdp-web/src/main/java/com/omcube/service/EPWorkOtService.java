package com.omcube.service;

import java.util.List;

import com.omcube.model.po.EPWorkOtPO;
import com.omcube.model.request.QueryWorkOt;
import com.omcube.model.response.WorkOtResponse;

/**
 * 加班管理的service接口
 * 
 * @author dangjun
 * @version 1.0
 */
public interface EPWorkOtService {

	/**
	 * 加班详情的添加
	 * 
	 * @param epWorkOtPO
	 * @throws Exception
	 */
	void addWorkOtInfo(WorkOtResponse workOtResponse) throws Exception;

	/**
	 * 加班详情的修改
	 * 
	 * @param epWorkOtPO
	 */
	void modifyWorkOtInfo(WorkOtResponse workOtResponse);

	/**
	 * 加班详情的删除
	 * 
	 * @param epWorkOtPO
	 * @throws Exception
	 */
	void deleteWorkOtInfo(QueryWorkOt queryWorkOt) throws Exception;

	/**
	 * 加班详细信息的查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 * @throws Exception
	 */
	EPWorkOtPO queryWorkOtInfos(QueryWorkOt queryWorkOt) throws Exception;

	/**
	 * 加班的详情的列表查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	List<WorkOtResponse> queryWorkOtList(QueryWorkOt queryWorkOt);

}
