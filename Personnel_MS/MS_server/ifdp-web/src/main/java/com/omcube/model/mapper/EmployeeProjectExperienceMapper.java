package com.omcube.model.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.omcube.model.po.EmployeeProjectExperiencePO;

@Mapper
public interface EmployeeProjectExperienceMapper {

	// 查询反显项目信息
	EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfo(
			String projectId);

	// 物理删除项目经历信息
	void deleteEmployeeProjectExperienceInfo(String projectId);

	// 继续添加项目经历信息
	void addEmployeeProjectExperienceInfo(
			EmployeeProjectExperiencePO employeeProjectExperiencePO);

	// 增加项目经历信息的查询
	EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfoByParam(
			@Param(value = "uid") String uid,
			@Param(value = "userNo") String userNo,
			@Param(value = "projectId") String projectId);

	// 项目经历信息修改
	void modEmpProExp(EmployeeProjectExperiencePO employeeProjectExperiencePO);
}
