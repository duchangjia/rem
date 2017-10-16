package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
public class VisaFreeHolidayControllerTest {

	@Autowired
    private WebApplicationContext wac;
	
	private MockMvc mockMvc;
	
	@Before
	public void setUp() throws Exception {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	//测试新增免签节假日功能
	@Test
	public void insertVisaFreeHoliay()throws Exception {
		String result = mockMvc
				.perform(post("/visaFreeHoliday/insertVisaFreeHoliay")
						.param("uId", "0001")
						.param("dayDate", "20140101")
						.param("dayFlag", "1")
						.param("remark","03111111111" )
						.contentType(MediaType.APPLICATION_JSON_UTF8))
						.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
		System.out.println(result);
	}
	
	@Test
    public void queryVisaFreeHoliayList() throws Exception
    {
	String result = mockMvc.perform(get("/visaFreeHoliday/queryVisaFreeHoliayList")
		.param("pageNum", "1")
		.param("pageSize", "10")
		.param("dayFlag", "1")
		//.param("organDepartmentName", "上海办事处")
		//.param("userFeatureInfo", "admin@pactera.com")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();

	System.out.println(result);
    }
}
