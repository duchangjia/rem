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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * 请假管理的测试
 * 
 * @author dangjun
 * @version 1.0
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class LeaveControllerTest {
    
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    /**
     * 请假详情添加的测试
     * 
     * @throws Exception
     */
    @Test
    public void addLeaveInfo() throws Exception
    {
    	
	String result = mockMvc.perform(post("/leave/addLeaveInfo")
    			.param("userNo", "1004")
    			.param("leaveType", "3")
    			.param("timeSheet", "23")
    			.param("authFlow", "0006")
    			.param("authStatus", "1")
    			.param("password", "123")
    			.param("authView", "请假审批的意见")
    			.param("remark", "请假的详细信息")
    			.param("createdBy", "dj")
    			.param("updatedBy", "dj")	
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();

    		System.out.println(result);
    }
}
