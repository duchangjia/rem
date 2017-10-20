package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import com.omcube.model.mapper.EPLeaveMangerMapper;
import com.omcube.model.po.EPLeaveInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryLeaveRequest;
import com.omcube.model.response.LeaveResponse;
import com.omcube.service.EPLeaveMangerService;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 请假管理的service的实现类
 * 
 * @author dangjun
 * @version 1.0
 */
@Service
@Transactional
public class EPLeaveMangerServiceImpl implements EPLeaveMangerService {

	private final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EPLeaveMangerMapper epLeaveMangerMapper;

	/**
	 * @see com.omcube.service.EPLeaveMangerService#addLeaveInfo(LeaveResponse)
	 */
	@Override
	public void addLeaveInfo(LeaveResponse leaveResponse) throws Exception {

		if (StringUtils.isEmpty(leaveResponse.getUserNo())) {
			logger.error("the userNo is null");
			throw new RuntimeException("此员工不存在!!!");
		}

		if (!StringUtils.isEmpty(leaveResponse.getApplyNo())) {
			// 根据请假的编号查询数据库中是否已经存在
			Map<String, String> param = new HashMap<String, String>();
			param.put("uid", leaveResponse.getUid());
			param.put("applyNo", leaveResponse.getApplyNo());
			if (epLeaveMangerMapper.queryLeaveInfo(param) == null) {

				epLeaveMangerMapper.addLeaveInfo(leaveResponse);
			}

		}

	}

	/**
	 * @see com.omcube.service.EPLeaveMangerService#queryLeaveList(QueryLeaveRequest)
	 */
	@Override
	public List<LeaveResponse> queryLeaveList(QueryLeaveRequest queryLeaveRequest) {

		List<LeaveResponse> leaveList = epLeaveMangerMapper.queryLeaveList(queryLeaveRequest);
		return leaveList;
	}

	/**
	 * @see com.omcube.service.EPLeaveMangerService#queryLeaveInfos(QueryLeaveRequest)
	 */
	@Override
	public EPLeaveInfoPO queryLeaveInfos(QueryLeaveRequest queryLeaveRequest) {

		return epLeaveMangerMapper.queryLeaveInfos(queryLeaveRequest);
	}

	/**
	 * @see com.omcube.service.EPLeaveMangerService#deleteLeaveInfo(EPLeaveInfoPO)
	 */
	@Override
	public void deleteLeaveInfo(QueryLeaveRequest queryLeaveRequest) throws Exception {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", queryLeaveRequest.getApplyNo());
		EPLeaveInfoPO leaveInfo = epLeaveMangerMapper.queryLeaveInfo(param);

		if (leaveInfo == null) {
			logger.error("the leaveInfo is null");
			throw new RuntimeException("此请假详情不存在!!!");
		}

		epLeaveMangerMapper.deleteLeaveInfo(queryLeaveRequest);
	}

	/**
	 * @see com.omcube.service.EPLeaveMangerService#modifyLeaveInfo(QueryLeaveRequest)
	 */
	@Override
	public void modifyLeaveInfo(LeaveResponse leaveResponse) {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", leaveResponse.getApplyNo());
		EPLeaveInfoPO leaveInfo = epLeaveMangerMapper.queryLeaveInfo(param);

		if (leaveInfo == null) {
			logger.error("the leaveInfo is null");
			throw new RuntimeException("此请假详情不存在!!!");
		}

		epLeaveMangerMapper.modifyLeaveInfo(leaveResponse);

	}
}
