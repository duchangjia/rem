package com.omcube.service;

import java.util.List;

import com.omcube.model.po.EPWorkOtPO;

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
	void addWorkOtInfo(EPWorkOtPO epWorkOtPO) throws Exception;

	/**
	 * 加班详情的修改
	 * 
	 * @param epWorkOtPO
	 */
	void modifyWorkOtInfo(EPWorkOtPO epWorkOtPO);

	/**
	 * 加班详情的删除
	 * 
	 * @param epWorkOtPO
	 * @throws Exception 
	 */
	void deleteWorkOtInfo(EPWorkOtPO epWorkOtPO) throws Exception;

	/**
	 * 加班详细信息的查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 * @throws Exception 
	 */
	EPWorkOtPO queryWorkOtInfos(EPWorkOtPO epWorkOtPO) throws Exception;

	/**
	 * 加班的详情的列表查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	List<EPWorkOtPO> queryWorkOtList(EPWorkOtPO epWorkOtPO);

}
