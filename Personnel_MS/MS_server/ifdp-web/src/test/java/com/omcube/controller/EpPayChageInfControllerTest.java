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
public class EpPayChageInfControllerTest {

	  @Autowired
	    private WebApplicationContext wac;

	    private MockMvc mockMvc;
	    
	    @Before
	    public void setup()
	    {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	    }
	    
	    //测试列表查询调薪信息
	    @Test
	    public void testEpPayChageInf() throws Exception{
	    	String result = mockMvc.perform(get("/epPayChageInf/selectListEpPayChageInf")
	    			.param("startTime", "2017-10-16")
	    			.param("endTime", "2017-10-20")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();
	    	        System.out.println(result);
	    	
	    }
	    
	    
	    
	    
	    
}
