package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
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
public class TaxRateCtrlControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	// 新增个人所得税税率
	@Test
	public void testAddTaxRateCtrl() throws Exception {
		String result = mockMvc.perform(post("/taxRateCtrl/insertTaxRateCtrl")
				.param("uid", "001").param("groupId", "001001")
				.param("applyNo", "001001008").param("GroupLimit", "10100.00")
				.param("GroupLowerLimit", "8000.00").param("isDelete", "1")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		System.out.println(result);
	}

	// 根据主键（组ID，编号）删除个人所得税税率
	@Test
	public void testDeleteTaxRateCtrl() throws Exception {
		String result = mockMvc
				.perform(delete("/taxRateCtrl/deleteTaxRateCtrl")
						.param("uid", "001").param("groupId", "001001")
						.param("applyNo", "001001007")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();

		System.out.println(result);
	}

	// 根据主键（组ID，编号）修改个人所得税税率
	@Test
	public void testUpdateTaxRateCtrl() throws Exception {
		String result = mockMvc
				.perform(put("/taxRateCtrl/updateTaxRateCtrl")
						.param("uid", "001").param("groupId", "001001")
						.param("applyNo", "001001008")
						.param("GroupLimit", "10000.00")
						.param("GroupLowerLimit", "8001.00")
						.param("isDelete", "1").param("remark", "第五次修改")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();

		System.out.println(result);
	}

	// 查询所有个人所得税税率
	@Test
	public void testSelectTaxRateCtrl() throws Exception {
		String result = mockMvc
				.perform(get("/taxRateCtrl/selectTaxRateCtrl")
						.param("uid", "001")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();

		System.out.println(result);
	}

}