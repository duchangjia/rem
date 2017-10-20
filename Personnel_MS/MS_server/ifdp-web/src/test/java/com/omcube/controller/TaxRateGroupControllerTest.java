package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
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
public class TaxRateGroupControllerTest {
	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	// 新增个人所得税税率组
	@Test
	public void testAddTaxRateGroup() throws Exception {
		String result = mockMvc
				.perform(post("/taxRateGroup/insertTaxRateGroup")
						.param("uid", "001").param("groupId", "001016")
						.param("groupNo", "小黄").param("startTime", "2017-08-18")
						.param("isDelete", "1")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}

	// 根据主键（组ID）删除个人所得税税率组
	@Test
	public void testDeleteTaxRateGroup() throws Exception {
		String result = mockMvc
				.perform(delete("/taxRateGroup/deleteTaxRateGroup")
						.param("uid", "001").param("groupId", "001007")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();

		System.out.println(result);
	}

	// 查询所有个人所得税税率组
	@Test
	public void testSelectTaxRateGroup() throws Exception {
		String result = mockMvc
				.perform(get("/taxRateGroup/selectTaxRateGroup")
						.param("uid", "001")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}

}
