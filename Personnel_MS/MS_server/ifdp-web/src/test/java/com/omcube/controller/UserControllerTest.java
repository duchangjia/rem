package com.omcube.controller;

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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest {
    
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    //@Test
    public void queryUser() throws Exception
    {
	String result = mockMvc.perform(get("/user/queryUserList")
		.param("pageNum", "1")
		.param("pageSize", "10")
		.param("organCompanyName", "魔方")
		//.param("organDepartmentName", "上海办事处")
		//.param("userFeatureInfo", "admin@pactera.com")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();

	System.out.println(result);
    }

    @Test
    public void updateUserInfo() throws Exception
    {
	String result = mockMvc.perform(put("/user/updateUserInfo")
		.param("organCompanyNo", "01")
		.param("organDepartmentNo", "002")
		.param("roleNo", "COMMONssss")
		.param("userNo", "2")
		.param("userName", "jinQQQ")
		.param("certNo", "431223199003013356")
		.param("mobile", "13418760926")
		.param("email", "11223@qq.com")
		.param("remark", "qqqq")
		.param("status", "1")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();

	System.out.println(result);
    }
}
