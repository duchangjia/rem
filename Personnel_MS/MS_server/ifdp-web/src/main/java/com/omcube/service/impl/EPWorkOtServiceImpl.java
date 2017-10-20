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
	 * @see com.omcube.service.EPWorkOtService#addWorkOtInfo(EPWorkOtPO)
	 */
	@Override
	public void addWorkOtInfo(EPWorkOtPO epWorkOtPO) throws Exception {

		// 查询对应的员工是否存在
		if (StringUtils.isBlank(epWorkOtPO.getCustInfoPO().getUserNo())) {
			logger.error("the userNo is null");
			throw new RuntimeException("此员工不存在!!!");
		}

		epWorkOtMapper.addWorkOtInfo(epWorkOtPO);
	}

	/**
	 * @see com.omcube.service.EPWorkOtService#modifyWorkOtInfo(EPWorkOtPO)
	 */
	@Override
	public void modifyWorkOtInfo(EPWorkOtPO epWorkOtPO) {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", epWorkOtPO.getApplyNo());
		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfo(param);

		if (workOtInfo == null) {
			logger.error("the workOtInfo is null");
			throw new RuntimeException("此加班详情不存在!!!");
		}

		epWorkOtMapper.modifyWorkOtInfo(epWorkOtPO);
	}

	/**
	 * @see com.omcube.service.EPWorkOtService#deleteWorkOtInfo(EPWorkOtPO)
	 */
	@Override
	public void deleteWorkOtInfo(EPWorkOtPO epWorkOtPO) throws Exception {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		param.put("uid", uid);
		param.put("applyNo", epWorkOtPO.getApplyNo());
		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfo(param);

		if (workOtInfo == null) {
			logger.error("the workotInfo is null");
			throw new RuntimeException("此加班详情不存在!!!");
		}

		epWorkOtMapper.deleteWorkOtInfo(epWorkOtPO);

	}

	/**
	 * @see com.omcube.service.EPWorkOtService#queryWorkOtInfos(EPWorkOtPO)
	 */
	@Override
	public EPWorkOtPO queryWorkOtInfos(EPWorkOtPO epWorkOtPO) throws Exception {

		EPWorkOtPO workOtInfo = epWorkOtMapper.queryWorkOtInfos(epWorkOtPO);

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
	public List<EPWorkOtPO> queryWorkOtList(EPWorkOtPO epWorkOtPO) {

		List<EPWorkOtPO> workOtList = epWorkOtMapper.queryWorkOtList(epWorkOtPO);

		return workOtList;
	}

}
