package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
public class OrganControllerTest {
	
	
	   @Autowired
	    private WebApplicationContext wac;

	    private MockMvc mockMvc;

	    @Before
	    public void setup()
	    {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	    }

	    @Test
	    public void addCityInfoSuccessTestCase() throws Exception
	    {

		//"pageNum":1,"pageSize":1,"uid":"0001","organCompanyName":"魔方",
		//"organDepartmentName":"上海办事处","userFeatureInfo":"admin@pactera.com"
		String result = mockMvc.perform(get("/iem/user/queryUser")
			.param("pageNum", "1")
			.param("pageSize", "10")
			.param("organCompanyName", "魔方")
			.param("organDepartmentName", "上海办事处")
			.param("userFeatureInfo", "admin@pactera.com")
			.param("uid", "0001")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();

		System.out.println(result);
	    }

	
	
	
	

}
