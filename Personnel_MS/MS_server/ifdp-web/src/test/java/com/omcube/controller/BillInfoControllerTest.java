package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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
public class BillInfoControllerTest {
	
	@Autowired
	private WebApplicationContext wac;
	
	private MockMvc mockMvc;
	
	@Before
	public void setUp(){
		
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	
	/**
	 * 测试新增开票信息
	 * @throws Exception
	 */
	@Test
	public void addOrganBillInfo() throws Exception{
		
		String result = mockMvc.perform(post("/organBillInfo/addOrganBillInfo")
			.param("uId","0001")
			.param("organNo","10009")
			.param("organName","平安银行")
			.param("organTaxNo","6666")
			.param("organTel","12306")
			.param("organAcct","8888")
			.param("organAcctname","平安")
			.param("organAddr","深圳")
			.param("createdBy","wrx")
			.param("updatedBy","wrx")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		
		System.out.println(result);
	}
	
	/**
	 * 测试跟新开票信息
	 * @throws Exception
	 */
	@Test
	public void updateOrganBillInfo() throws Exception{
		
		String result = mockMvc.perform(put("/organBillInfo/updateOrganBillInfo")
				.param("uId","0001")
				.param("organNo","10001")
				.param("organName","橙色魔方00")
				.param("organTaxNo","0000")
				.param("organTel","0000")
				.param("organAcct","0000")
				.param("organAcctname","魔方")
				.param("organAddr","深圳")
				.param("updatedBy","wrx")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isOk()).andReturn().getResponse()
				.getContentAsString();
		
		System.out.println(result);
	}
	
	/**
	 * 测试查询公司开票信息
	 * @throws Exception 
	 */
	@Test
	public void queryBillInfoList() throws Exception{
		
		String result = mockMvc.perform(get("/organBillInfo/queryBillInfoList/0001")
				.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();
				System.out.println(result);
	}
	
	/**
	 * 测试通过名称模糊查询
	 * @throws Exception
	 */
	@Test
	public void queryBillInfoByName() throws Exception{
		
		String result =  mockMvc.perform(get("/organBillInfo/queryBillInfoByName")
			.param("uId","0001")
			.param("organName", "")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		
		System.out.println(result);
	}
}
