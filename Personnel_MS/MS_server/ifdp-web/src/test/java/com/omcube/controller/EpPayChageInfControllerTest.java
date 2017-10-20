package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
public class EpPayChageInfControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	// 测试调薪管理列表查询
	@Test
	public void testListEpPayChageInf() throws Exception {
		String result = mockMvc
				.perform(get("/epPayChageInf/selectListEpPayChageInf")
						.param("startTime", "2017-10-16")
						.param("endTime", "2017-10-20")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);

	}

	// 测试调薪管理详情查询
	@Test
	public void testDetailEpPayChageInf() throws Exception {
		String result = mockMvc
				.perform(get("/epPayChageInf/selectDetailEpPayChageInf")
						.param("uid", "0001")
						.param("applyNo", "000101")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}
	
	
	//测试调薪管理新增用户信息
	@Test
	public void testInsertEpPayChageInf() throws Exception{
		String result = mockMvc.perform(post("/epPayChageInf/insertEpPayChageInf")
			.param("uid", "0001")
			.param("userNo", "P0000015")
			.param("grpNo", "00100102")
			.param("applyNo", "000102")
			.param("nWagesBase", "50000")
			.param("custName", "夏娃")
			.param("organNo", "01")
			.param("derpNo", "01")
			.param("ownerCCC", "12345")
			.param("certType", "01")
			.param("certNo", "450421199093098833")
			.param("sex", "01")
			.param("birthday", "2017-09-09")
			.param("nation", "01")
			.param("chageStatus", "1")
			.param("payStatus", "1")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		System.out.println(result);
	    }
}