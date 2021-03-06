package com.omcube.service;

import java.util.List;
import com.omcube.model.po.EPLeaveInfoPO;
import com.omcube.model.request.QueryLeaveRequest;
import com.omcube.model.response.LeaveResponse;

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
	void addLeaveInfo(LeaveResponse leaveResponse) throws Exception;

	/**
	 * 请假详情的列表查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	List<LeaveResponse> queryLeaveList(QueryLeaveRequest queryLeaveRequest);

	/**
	 * 请假的详情的查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	EPLeaveInfoPO queryLeaveInfos(QueryLeaveRequest queryLeaveRequest);

	/**
	 * 请假的详情的删除
	 * 
	 * @param epLeaveInfoPO
	 * @throws Exception
	 */
	void deleteLeaveInfo(QueryLeaveRequest queryLeaveRequest) throws Exception;

	/**
	 * 请假的详情的修改
	 * 
	 * @param epLeaveInfoPO
	 */
	void modifyLeaveInfo(EPLeaveInfoPO epLeaveInfoPO);

}
