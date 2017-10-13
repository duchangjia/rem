package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;

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
public class RankSalaryTemplateControllerTest {
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    /**
     * 1.测试添加职级薪资模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void addCparm() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(post("/RankSalaryTemplate/addCparm")
			.param("applyNo", "")
			.param("organNo", "112111")
			.param("applyName", "上海分公司总经理薪资模板")  
			.param("rank", "B10-高级开发软件工程师")
			.param("salaryTop", "30000")
			.param("salaryFloor", "15000")
			.param("businessStandard", "400")	
			.param("remark", "上海分公司总经理薪资模板")		
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		System.out.println(result);
    }
    /**
     * 2.测试查询职级薪酬标准模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryCParmList() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/RankSalaryTemplate/queryCParmList/1/5/112111")	
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    /**
     * 3.根据uId，organNo和applyNo查询单个职级薪酬模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryCParmDtl() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/RankSalaryTemplate/queryCParmDtl/112111/1121110002")	
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    /**
     * 4.修改职级薪酬标准模板 
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void modCparm() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(put("/RankSalaryTemplate/modCparm")
		.param("applyNo", "1121110007")
		.param("organNo", "112111")
		.param("applyName", "重庆分公司总经理薪资模板")  
		.param("rank", "B5-中级级开发软件工程师")
		.param("salaryTop", "30000")
		.param("salaryFloor", "20000")
		.param("businessStandard", "400")	
		.param("remark", "重庆分公司总经理薪资模板")		
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    /**
     * 5.根据uId，organNo和applyNo删除相应的职级薪酬模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void delCparm() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(delete("/RankSalaryTemplate/delCparm/112111/1121110007")	
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
}
