package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.EPLeaveInfoPO;
import com.omcube.model.request.QueryLeaveRequest;
import com.omcube.model.response.LeaveResponse;

/**
 * 请假管理的dao接口
 * 
 * @author dangjun
 * @version 1.0
 */
@Mapper
public interface EPLeaveMangerMapper {

	/**
	 * 根据的请假的编号的查询对应的详细信息
	 * 
	 * @param applyNo
	 * @return
	 */
	EPLeaveInfoPO queryLeaveInfo(Map<String, String> param);

	/**
	 * 添加请假详情
	 * 
	 * @param epLeaveInfoPO
	 */
	void addLeaveInfo(LeaveResponse leaveResponse);

	/**
	 * 请假的列表的查询
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
	 * 请假详情的删除
	 * 
	 * @param epLeaveInfoPO
	 */
	void deleteLeaveInfo(QueryLeaveRequest queryLeaveRequest);

	/**
	 * 请假详情的修改
	 * 
	 * @param epLeaveInfoPO
	 */
	void modifyLeaveInfo(LeaveResponse leaveResponse);

}
