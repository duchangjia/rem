package com.omcube.service;

import com.omcube.model.po.EmployeeProjectExperiencePO;

public interface EmployeeProjectExperienceService {
	// 查询反显项目经历信息
	EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfo(
			String projectId);

	// 物理删除项目经历信息
	void deleteEmployeeProjectExperienceInfo(String projectId);

	// 继续添加项目经历信息
	void addEmployeeProjectExperienceInfo(
			EmployeeProjectExperiencePO employeeProjectExperiencePO)
			throws Exception;

	// 增加项目经历信息的查询
	EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfoByParam(
			String uid, String userNo, String projectId);

	// 项目经历信息修改
	void modEmpProExp(EmployeeProjectExperiencePO employeeProjectExperiencePO);
}
