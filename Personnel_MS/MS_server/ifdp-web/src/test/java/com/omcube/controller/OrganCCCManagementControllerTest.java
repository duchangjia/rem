package com.omcube.controller;

import static org.junit.Assert.*;
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
public class OrganCCCManagementControllerTest {

	@Autowired
    private WebApplicationContext wac;
 
	private MockMvc mockMvc;
	
	@Before
	public void setUp() throws Exception {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	
	//测试机构CCC的新增功能
	@Test
	public void addOrgCCC() throws Exception{

		String result = mockMvc
				.perform(post("/organ/addOrgCCC")
						.param("uId", "0001")
						.param("organNo", "0003")
						.param("organName", "营销三部")
						.param("costType","03" )
						.param("costCode","112" )
						.param("descr", "112")
						.contentType(MediaType.APPLICATION_JSON_UTF8))
						.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
		System.out.println(result);
	}
	
	//测试机构ccc修改功能
	@Test
    public void updateOrganCCCManagement() throws Exception {

	String result = mockMvc
		.perform(put("/organ/updateOrganCCCManagement")
		.param("uId", "0001")
		.param("organNo", "0003")
		.param("organName", "营销三部")
		.param("costType", "01")
		.param("costCode", "113")
		.param("descr", "0000")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }
}
