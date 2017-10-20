package com.omcube.service;

import java.util.List;
import com.omcube.model.po.EPLeaveInfoPO;

/**
 * 请假管理的service接口
 * 
 * @author dangjun
 * @version 1.0
 */
public interface EPLeaveMangerService {

	/**
	 * 请假详情的添加
	 * 
	 * @param epLeaveInfoPO
	 * @throws Exception
	 */
	void addLeaveInfo(EPLeaveInfoPO epLeaveInfoPO) throws Exception;

	/**
	 * 请假详情的列表查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	List<EPLeaveInfoPO> queryLeaveList(EPLeaveInfoPO epLeaveInfoPO);

	/**
	 * 请假的详情的查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	EPLeaveInfoPO queryLeaveInfos(EPLeaveInfoPO epLeaveInfoPO);

	/**
	 * 请假的详情的删除
	 * 
	 * @param epLeaveInfoPO
	 * @throws Exception
	 */
	void deleteLeaveInfo(EPLeaveInfoPO epLeaveInfoPO) throws Exception;

	/**
	 * 请假的详情的修改
	 * 
	 * @param epLeaveInfoPO
	 */
	void modifyLeaveInfo(EPLeaveInfoPO epLeaveInfoPO);

}
