package com.omcube.controller;

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
public class EpCustEduHisControllerTest {
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;
    
    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    
    //测试新增员工教育经历信息
    @Test
    public void testInsertEpCustEduHis() throws Exception {
	String result = mockMvc.perform(post("/epCustEduHis/insertEpCustEduHis")
    		.param("uid", "001")
    		.param("userNo", "001002")
    		.param("eduHisId", "3")
    		.param("startTime", "2016-08-18")
    		.param("endTime", "2018-08-18")
    		.param("schoolName", "武汉大学")
    		.param("major", "软件工程")
    		.param("education", "硕士")
    		.param("desc", "熟练掌握Java和C++开发流程")
    		.param("createdBy", "小绿")
    		.param("updatedBy", "小蓝")
    		.contentType(MediaType.APPLICATION_JSON_UTF8))
    		.andExpect(status().isOk()).andReturn().getResponse()
    		.getContentAsString();
    	System.out.println(result);
    }
    
    //测试根据主键(用户编号，序号)删除员工教育经历信息
    @Test
    public void testDeleteEpCustEduHis() throws Exception{
	String result = mockMvc.perform(post("/epCustEduHis/deleteEpCustEduHis")
    		.param("uid", "001")
    		.param("userNo", "001002")
    		.param("eduHisId", "3")
    		.contentType(MediaType.APPLICATION_JSON_UTF8))
    		.andExpect(status().isOk()).andReturn().getResponse()
    		.getContentAsString();
    	System.out.println(result);
    } 
    
}
