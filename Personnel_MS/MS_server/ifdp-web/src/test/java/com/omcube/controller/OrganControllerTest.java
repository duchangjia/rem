package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

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

import com.mysql.fabric.xmlrpc.base.Data;


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
	    public void addOrgan() throws Exception
	    {
	    	
		String result = mockMvc.perform(get("/iem/organ/addOrgan")
			.param("uId", "0001")
			.param("organ_no", "02")
			.param("organ_name", "橙色魔方广州分公司")
			.param("organ_type", "02")
			.param("organ_status", "1")
			.param("parent_no", "0")
			.param("organ_level", "2")
			.param("organ_descr", "很有发展前景")
			.param("organ_path", "广州")
			.param("org_reg_addr", "广州天河")
			.param("organ_con_addr", "广州天河")
			.param("organ_man", "kzm")
			.param("organ_tel", "13833455678")
			.param("organ_email", "kzm@163.com")
			.param("organ_mge_id", "1")
			.param("organ_mge_name", "kk")
			.param("createdBy", "lhj")
			.param("updatedBy", "kzm")	
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
			System.out.println(result);
	    }
	    
	    
	    
	    
	
	
	

}
