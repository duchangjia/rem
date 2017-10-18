package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeProjectExperienceControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setUp() {

		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	// 测试项目经历信息添加
	@Test
	public void addEmployeeProjectExperienceInfo() throws Exception {
		String result = mockMvc.perform(
				post("/employeeProjectExperience/addEmployeeProjectExperienceInfo")
						.param("uId", "0001").param("userNo", "000001")
						.param("projectId", "04").param("projectName", "112")
						.param("mainSkill", "112").param("projectRole", "112")
						.param("softEnv", "112").param("custom", "112")
						.param("projectDuty", "112").param("desc", "112")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}

	// 测试项目经历信息的修改功能
	@Test
	public void modEmpProExp() throws Exception {
		String result = mockMvc
				.perform(put("/employeeProjectExperience/modEmpProExp")
						.param("uId", "0001").param("userNo", "000001")
						.param("projectId", "04").param("projectName", "rrrr")
						.param("startTime", "20130101")
						.param("endTime", "20190101").param("mainSkill", "rrrr")
						.param("projectRole", "rrrr").param("softEnv", "rrrr")
						.param("custom", "rrrr").param("projectDuty", "rrrr")
						.param("desc", "3").param("createdBy", "rrrr")
						.param("updatedBy", "rrrr")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}
}
