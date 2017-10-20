package com.omcube.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omcube.model.mapper.EmployeeProjectExperienceMapper;
import com.omcube.model.po.EmployeeProjectExperiencePO;
import com.omcube.service.EmployeeProjectExperienceService;
import com.omcube.util.SpringUtil;

@Service
public class EmployeeProjectExperienceServiceImpl
		implements
			EmployeeProjectExperienceService {

	private final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EmployeeProjectExperienceMapper employeeProjectExperienceMapper;

	// 查询反显项目经历信息
	@Override
	public EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfo(
			String projectId) {
		return employeeProjectExperienceMapper
				.queryEmployeeProjectExperienceInfo(projectId);
	}

	// 物理删除项目经历信息
	@Override
	public void deleteEmployeeProjectExperienceInfo(String projectId) {
		employeeProjectExperienceMapper
				.deleteEmployeeProjectExperienceInfo(projectId);
	}

	// 继续添加项目经历信息
	@Override
	public void addEmployeeProjectExperienceInfo(
			EmployeeProjectExperiencePO employeeProjectExperiencePO)
			throws Exception {

		if (employeeProjectExperienceMapper == null) {
			employeeProjectExperienceMapper = SpringUtil
					.getBean(EmployeeProjectExperienceMapper.class);
		}

		// 添加项目经历信息的时候判断要添加的项目经历信息是否存在数据库中
		// Map<String, String> param = new HashMap<String, String>();
		// param.put("uId", employeeProjectExperiencePO.getuId());
		// param.put("userNo", employeeProjectExperiencePO.getUserNo());
		// param.put("projectId", employeeProjectExperiencePO.getProjectId());

		if (employeeProjectExperienceMapper
				.queryEmployeeProjectExperienceInfoByParam(
						employeeProjectExperiencePO.getUid(),
						employeeProjectExperiencePO.getUserNo(),
						employeeProjectExperiencePO.getProjectId()) != null) {
			logger.error("the EmployeeProjectExperience is exist");
			throw new RuntimeException("此项目信息已经存在");
		}
		employeeProjectExperiencePO
				.setUid(employeeProjectExperiencePO.getUid());
		employeeProjectExperiencePO
				.setUserNo(employeeProjectExperiencePO.getUserNo());
		employeeProjectExperiencePO
				.setProjectId(employeeProjectExperiencePO.getProjectId());
		employeeProjectExperiencePO
				.setStartTime(employeeProjectExperiencePO.getStartTime());
		employeeProjectExperiencePO
				.setEndTime(employeeProjectExperiencePO.getEndTime());
		employeeProjectExperiencePO
				.setProjectName(employeeProjectExperiencePO.getProjectName());
		employeeProjectExperiencePO
				.setMainSkill(employeeProjectExperiencePO.getMainSkill());
		employeeProjectExperiencePO
				.setProjectRole(employeeProjectExperiencePO.getProjectRole());
		employeeProjectExperiencePO
				.setSoftEnv(employeeProjectExperiencePO.getSoftEnv());
		employeeProjectExperiencePO
				.setCustom(employeeProjectExperiencePO.getCustom());
		employeeProjectExperiencePO
				.setProjectDuty(employeeProjectExperiencePO.getProjectDuty());
		employeeProjectExperiencePO
				.setDesc(employeeProjectExperiencePO.getDesc());

		employeeProjectExperienceMapper
				.addEmployeeProjectExperienceInfo(employeeProjectExperiencePO);
	}

	@Override
	public EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfoByParam(
			String uId, String userNo, String projectId) {
		if (employeeProjectExperienceMapper == null) {
			employeeProjectExperienceMapper = SpringUtil
					.getBean(EmployeeProjectExperienceMapper.class);
		}

		return employeeProjectExperienceMapper
				.queryEmployeeProjectExperienceInfoByParam(uId, userNo,
						projectId);
	}

	// 项目经历信息修改
	@Override
	public void modEmpProExp(
			EmployeeProjectExperiencePO employeeProjectExperiencePO) {

		if (employeeProjectExperienceMapper == null) {
			employeeProjectExperienceMapper = SpringUtil
					.getBean(EmployeeProjectExperienceMapper.class);
		}

		employeeProjectExperienceMapper
				.modEmpProExp(employeeProjectExperiencePO);
	}
}
