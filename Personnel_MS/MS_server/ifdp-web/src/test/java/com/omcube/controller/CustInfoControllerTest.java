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
public class CustInfoControllerTest {
    
    @Autowired
    private WebApplicationContext wac;
    
    private MockMvc mockMvc;
    
    @Before
    public void setup(){
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    
    /**
     * 测试新增开票信息
     * @throws Exception
     */
    @Test
    public void addOrganBillInfo() throws Exception {
	
	String date = "2017-10-10";

	String result = mockMvc
		.perform(post("/CustInfo/insertCustInfo")
		.param("custName", "6666").param("organNo", "12306")
		.param("derpNo", "8888").param("ownerCCC", "橙色")
		.param("certType", "01").param("certNo", "8888")
		.param("sex", "01").param("birthday", "福田")
		.param("nation", "0002").param("marital", "01")
		.param("politial", "01").param("education", "01")
		.param("degree", "8888").param("gradSchool", "橙色")
		.param("gradTime", "福田").param("major", "8888")
		.param("lineManager", "橙色").param("origo", "福田")
		.param("homeAddr", "0002").param("liveAddr", "橙色魔方")
		.param("permAddr", "6666").param("mobileNo", "12306")
		.param("teleph", "8888").param("homeTeleph", "橙色")
		.param("perEmail", "福田").param("comEmail", "8888")
		.param("atten", "橙色").param("attenTeleph", "福田")
		.param("qqAcct", "0002").param("oneInch", "橙色魔方")
		.param("custType", "01").param("custPost", "12306")
		.param("custClass", "8888").param("custStatus", "01")
		.param("entryTime", date).param("date", date)
		.param("workTime", date).param("proftitleTime", date)
		.param("compactStartTime", date).param("compactEndTime", date)
		.param("probStartTime", date).param("probEndTime", date)
		.param("recruitQuarry", "01").param("lateLeaveTime", date)
		.param("openBank", "福田").param("bankCardNo", "8888")
		.param("endmAcct", "橙色").param("mediAcct", "福田")
		.param("mateAcct", "0002").param("housAcct", "橙色魔方")
		.param("attachm", "6666").param("remark", "12306")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }
}
