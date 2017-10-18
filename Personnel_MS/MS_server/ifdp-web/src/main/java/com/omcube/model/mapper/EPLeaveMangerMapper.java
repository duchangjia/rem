package com.omcube.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.omcube.model.po.EPLeaveInfoPO;

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
	void addLeaveInfo(EPLeaveInfoPO epLeaveInfoPO);

	/**
	 * 请假的列表的查询
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
	 * 请假详情的删除
	 * 
	 * @param epLeaveInfoPO
	 */
	void deleteLeaveInfo(EPLeaveInfoPO epLeaveInfoPO);

	/**
	 * 请假详情的修改
	 * 
	 * @param epLeaveInfoPO
	 */
	void modifyLeaveInfo(EPLeaveInfoPO epLeaveInfoPO);

}
