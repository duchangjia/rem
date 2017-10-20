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
public class AssetUseControllerTest {

	@Autowired
	private WebApplicationContext wac;
	
	private MockMvc mockMvc;
	
	@Before
	public void setUp() throws Exception {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	// 测试资产使用添加
		@Test
		public void addAssetUseINF() throws Exception {
			String date = "2017-01-01";
			String result = mockMvc.perform(
					post("/assetUse/addAssetUseINF")
							.param("assetNo", "07").param("organNo", "888")
							.param("derpNo", "888").param("ccc", "12345")
							.param("applyUserNo", "888")
							.param("applyType", "44").param("applyNum", "88")
							.param("applyTime", date).param("status", "1")
							.param("remark", "888").param("createdBy", "jjj")
							.param("updatedBy", ",,,")
							.contentType(MediaType.APPLICATION_JSON_UTF8))
					.andExpect(status().isOk()).andReturn().getResponse()
					.getContentAsString();
			System.out.println(result);
		}
		
	//测试资产使用信息修改
		@Test
		public void modAssUse() throws Exception {
			String result = mockMvc
					.perform(put("/assetUse/modAssUse")
							.param("uId", "0001").
							param("applyNo", "01").param("applyUserNo", "4324")
							.param("organNo", "f").param("derpNo", "f")
							.param("ccc", "gggg")
							.param("assetNo", "12").param("applyType", "2")
							.param("applyTime", "2017-12-29").param("applyNum", "67")
							.param("status", "0")
							.param("remark", "ooooooo")
							.param("updatedBy", "rrrr")
							.contentType(MediaType.APPLICATION_JSON_UTF8))
					.andExpect(status().isOk()).andReturn().getResponse()
					.getContentAsString();
			System.out.println(result);
		}
}
