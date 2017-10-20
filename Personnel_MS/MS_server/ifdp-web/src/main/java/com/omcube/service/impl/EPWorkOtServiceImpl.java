package com.omcube.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.omcube.model.mapper.EPWorkOtMapper;
import com.omcube.model.po.EPWorkOtPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryWorkOt;
import com.omcube.model.response.WorkOtResponse;
import com.omcube.service.EPWorkOtService;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 加班管理的service实现类
 * 
 * @author dangjun
 * @version 1.0
 */
@Service
@Transactional
public class EPWorkOtServiceImpl implements EPWorkOtService {

	private final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EPWorkOtMapper epWorkOtMapper;

	/**
	 * @see com.omcube.service.EPWorkOtService#addWorkOtInfo(WorkOtResponse)
	 */
	@Override
	public void addWorkOtInfo(WorkOtResponse workOtResponse) throws Exception {

		// 查询对应的员工是否存在
		if (StringUtils.isBlank(workOtResponse.getUserNo())) {
			logger.error("the userNo is null");
			throw new RuntimeException("此员工不存在!!!");
		}

		epWorkOtMapper.addWorkOtInfo(workOtResponse);
	}

	/**
	 * @see com.omcube.service.EPWorkOtService#modifyWorkOtInfo(WorkOtResponse)
	 */
	@Override
	public void modifyWorkOtInfo(WorkOtResponse workOtResponse) {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", workOtResponse.getApplyNo());
		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfo(param);

		if (workOtInfo == null) {
			logger.error("the workOtInfo is null");
			throw new RuntimeException("此加班详情不存在!!!");
		}

		epWorkOtMapper.modifyWorkOtInfo(workOtResponse);
	}

	/**
	 * @see com.omcube.service.EPWorkOtService#deleteWorkOtInfo(QueryWorkOt)
	 */
	@Override
	public void deleteWorkOtInfo(QueryWorkOt wQueryWorkOt) throws Exception {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", wQueryWorkOt.getApplyNo());
		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfo(param);

		if (workOtInfo == null) {
			logger.error("the workotInfo is null");
			throw new RuntimeException("此加班详情不存在!!!");
		}

		epWorkOtMapper.deleteWorkOtInfo(wQueryWorkOt);

	}

	/**
	 * @see com.omcube.service.EPWorkOtService#queryWorkOtInfos(QueryWorkOt)
	 */
	@Override
	public EPWorkOtPO queryWorkOtInfos(QueryWorkOt queryWorkOt) throws Exception {

		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfos(queryWorkOt);

		if (workOtInfo == null) {
			logger.error("the workotInfo is null");
			throw new RuntimeException("此加班详情不存在!!!");
		}

		return workOtInfo;
	}

	/**
	 * @see com.omcube.service.EPWorkOtService#queryWorkOtList(EPWorkOtPO)
	 */
	@Override
	public List<WorkOtResponse> queryWorkOtList(QueryWorkOt queryWorkOt) {

		List<WorkOtResponse> workOtList = epWorkOtMapper.queryWorkOtList(queryWorkOt);

		return workOtList;
	}

}
