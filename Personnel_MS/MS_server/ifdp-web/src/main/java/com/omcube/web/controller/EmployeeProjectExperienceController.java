package com.omcube.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.omcube.model.po.EmployeeProjectExperiencePO;
import com.omcube.service.EmployeeProjectExperienceService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;

@RestController
@RequestMapping(value = "/employeeProjectExperience")
public class EmployeeProjectExperienceController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EmployeeProjectExperienceService employeeProjectExperienceService;

	// 查询反显项目经历信息
	@GetMapping(value = "/queryEmployeeProjectExperienceInfo/{projectId}")
	@Cacheable(value = "queryCache")
	public Object queryEmployeeProjectExperienceInfo(
			@PathVariable String projectId) {

		if (StringUtils.isEmpty(projectId)) {
			logger.error("the request params organNo is null");
			return JSONResultUtil.setError("F00002",
					"the request params projectId is null");
		}

		EmployeeProjectExperiencePO employeeProjectExperiencePO = employeeProjectExperienceService
				.queryEmployeeProjectExperienceInfo(projectId);

		if (StringUtils.isEmpty(employeeProjectExperiencePO)) {
			logger.error("employeeProjectExperiencePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "当前项目经历不存在");
		}
		return JSONResultUtil.setSuccess(employeeProjectExperiencePO);
	}

	// 物理删除项目经历信息
	@RequestMapping(value = "/deleteEmployeeProjectExperienceInfo/{projectId}", method = RequestMethod.GET)
	public Object deleteEmployeeProjectExperienceInfo(
			@PathVariable String projectId) {
		if (StringUtils.isEmpty(projectId)) {
			logger.error("the request params projectId is null");
			return JSONResultUtil.setError("F00002",
					"the request params projectId is null");
		}
		employeeProjectExperienceService
				.deleteEmployeeProjectExperienceInfo(projectId);
		return JSONResultUtil.setSuccess();
	}

	// 继续添加项目经历信息
	@PostMapping(value = "/addEmployeeProjectExperienceInfo")
	public Object addEmployeeProjectExperienceInfo(
			EmployeeProjectExperiencePO employeeProjectExperiencePO) {
		if (employeeProjectExperiencePO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request body is null");
		}

		logger.info(String.format("the request body is %s:",
				employeeProjectExperiencePO.toString()));

		// String userNo = String.valueOf(System.currentTimeMillis()); //
		// 用户的编号暂时使用当前的毫秒值代替

		// 校验数据库中是否存在要添加的信息
		EmployeeProjectExperiencePO databaseEmployeeProjectExperiencePO = queryEmployeeProjectExperienceInfoByParam(
				employeeProjectExperiencePO.getUid(),
				employeeProjectExperiencePO.getUserNo(),
				employeeProjectExperiencePO.getProjectId());

		if (databaseEmployeeProjectExperiencePO != null) {
			logger.error("The information already exists in the database");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"The information already exists in the database");
		}

		try {
			employeeProjectExperienceService.addEmployeeProjectExperienceInfo(
					employeeProjectExperiencePO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"add EmployeeProjectExperienceInfo fail");
	}

	// 添加项目经历信息的查询
	@Cacheable
	public EmployeeProjectExperiencePO queryEmployeeProjectExperienceInfoByParam(
			String uid, String userNo, String projectId) {

		return employeeProjectExperienceService
				.queryEmployeeProjectExperienceInfoByParam(uid, userNo,
						projectId);
	}

	// 项目经历信息修改
	@PutMapping(value = "/modEmpProExp")
	public Object modEmpProExp(
			EmployeeProjectExperiencePO employeeProjectExperiencePO) {

		if (employeeProjectExperiencePO == null) {
			logger.error(
					"the request params employeeProjectExperiencePO is null");
			return JSONResultUtil.setError(
					ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params employeeProjectExperiencePO is null");
		}

		try {
			employeeProjectExperienceService
					.modEmpProExp(employeeProjectExperiencePO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(
				ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
				"update organCCCManagemen fail");
	}
}
