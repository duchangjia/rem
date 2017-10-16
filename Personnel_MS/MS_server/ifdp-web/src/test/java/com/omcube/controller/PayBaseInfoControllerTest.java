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
public class PayBaseInfoControllerTest {

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    @Test
    public void addPayBaseInfo() throws Exception
    {
	String result = mockMvc.perform(post("/pay/addPayBaseInfo")
		.param("userNo", "P0000001")
		.param("wagesBase", "7000")
		.param("wagesPerf", "1500")
		.param("postPension", "1000")
		.param("otherPension", "500")
		.param("endmBase", "300")
		.param("mediBase", "300")
		.param("unemBase", "300")
		.param("emplBase", "300")
		.param("mateBase", "300")
		.param("houseBase", "300")
		.param("probRatio", "0.8")
		.param("welcoeNo", "300")
		.param("status", "2")
		.param("remark", "")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();

	System.out.println(result);
    }

}
