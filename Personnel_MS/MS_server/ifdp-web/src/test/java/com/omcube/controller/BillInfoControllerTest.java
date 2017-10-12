package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.UnsupportedEncodingException;

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
    public void setUp() {
	
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    /**
     * 测试新增开票信息
     * @throws Exception
     */
    @Test
    public void addOrganBillInfo() throws Exception {

	String result = mockMvc
		.perform(post("/organBillInfo/addOrganBillInfo")
		.param("organNo", "0002")
		.param("organName", "橙色魔方")
		.param("organTaxNo", "6666")
		.param("organTel", "12306")
		.param("organAcct", "8888")
		.param("organAcctname", "橙色")
		.param("organAddr", "福田")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 测试更新开票信息
     * @throws Exception
     */
    @Test
    public void updateOrganBillInfo() throws Exception {

	String result = mockMvc
		.perform(put("/organBillInfo/updateOrganBillInfo")

		.param("uId", "0001")
		.param("organNo", "0001")
		.param("organName", "橙色魔方6666")
		.param("organTaxNo", "6666")
		.param("organTel", "0000")
		.param("organAcct", "0000")

		.param("organAcctname", "魔方")
		.param("organAddr", "深圳")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 测试查询公司开票信息列表
     * @throws Exception 
     */
    @Test
    public void queryBillInfoList() throws Exception {

	String result = mockMvc
		.perform(get("/organBillInfo/queryBillInfoList")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
	System.out.println(result);
    }

    /**
     * 测试通过名称模糊查询
     * @throws Exception
     */
    @Test
    public void queryBillInfoByName() throws Exception {

	String result = mockMvc
		.perform(get("/organBillInfo/queryBillInfoByName/杭州")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 测试查询公司开票信息
     * @throws Exception
     */
    @Test
    public void queryBillInfo() throws Exception {
	String result = mockMvc
		.perform(get("/organBillInfo/queryBillInfo/10001")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
	
	System.out.println(result);
    }
}
