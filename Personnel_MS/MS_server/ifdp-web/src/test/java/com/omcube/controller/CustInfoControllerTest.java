package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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
public class CustInfoControllerTest {
    
    @Autowired
    private WebApplicationContext wac;
    
    private MockMvc mockMvc;
    
    @Before
    public void setup(){
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    
    /**
     * 测试员工基本信息新增
     * @throws Exception
     */
    @Test
    public void addOrganBillInfo() throws Exception {
	
	String date = "2017-10-10";

	String result = mockMvc
		.perform(post("/CustInfo/insertCustInfo")
		.param("custName", "亚当").param("organNo", "01")
		.param("derpNo", "01").param("ownerCCC", "12345")
		.param("certType", "01").param("certNo", "450421199093098833")
		.param("sex", "01").param("birthday", "2017-09-09")
		.param("nation", "01").param("marital", "01")
		.param("politial", "01").param("education", "01")
		.param("degree", "8888").param("gradSchool", "橙色")
		.param("gradTime", "华宝").param("major", "8888")
		.param("lineManager", "橙色").param("origo", "华宝")
		.param("homeAddr", "0002").param("liveAddr", "橙色魔方")
		.param("permAddr", "6666").param("mobileNo", "12306")
		.param("teleph", "01").param("homeTeleph", "10086")
		.param("perEmail", "csmf@123.com").param("comEmail", "csmf@123.com")
		.param("atten", "夏娃").param("attenTeleph", "0001")
		.param("qqAcct", "123456").param("oneInch", "010101")
		.param("custType", "01").param("custPost", "总经理")
		.param("custClass", "01").param("custStatus", "01")
		.param("entryTime", date).param("leftJobTime", date)
		.param("date", date).param("workTime", date)
		.param("profTitleTime", date).param("compactStartTime", date)
		.param("compactEndTime", date).param("probStartTime", date)
		.param("probEndTime", date).param("recruitQuarry", "社招")
		.param("lateLeaveTime", date).param("openBank", "华夏银行")
		.param("bankCardNo", "8888").param("endmAcct", "01010101")
		.param("mediAcct", "1000000").param("mateAcct", "100006")
		.param("housAcct", "100005").param("attachm", "01010")
		.param("remark", "深圳")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }
    
    /**
     * 测试员工基本信息修改
     * @throws Exception
     */
    @Test
    public void modCustInf() throws Exception{
	
	String date = "2017-10-16";
	
	String result = mockMvc
		.perform(put("/CustInfo/modCustInf")
		.param("userNo", "P0000001")
		.param("custName", "夏娃").param("organNo", "01")
		.param("derpNo", "01").param("ownerCCC", "12345")
		.param("certType", "01").param("certNo", "450421199093098833")
		.param("sex", "01").param("birthday", "2017-09-09")
		.param("nation", "01").param("marital", "01")
		.param("politial", "01").param("education", "01")
		.param("degree", "8888").param("gradSchool", "橙色")
		.param("gradTime", "华宝").param("major", "8888")
		.param("lineManager", "橙色").param("origo", "华宝")
		.param("homeAddr", "0002").param("liveAddr", "橙色魔方")
		.param("permAddr", "6666").param("mobileNo", "12306")
		.param("teleph", "01").param("homeTeleph", "10086")
		.param("perEmail", "csmf@123.com").param("comEmail", "csmf@123.com")
		.param("atten", "夏娃").param("attenTeleph", "0001")
		.param("qqAcct", "123456").param("oneInch", "010101")
		.param("custType", "01").param("custPost", "总经理")
		.param("custClass", "01").param("custStatus", "01")
		.param("entryTime", date).param("leftJobTime", date)
		.param("date", date).param("workTime", date)
		.param("profTitleTime", date).param("compactStartTime", date)
		.param("compactEndTime", date).param("probStartTime", date)
		.param("probEndTime", date).param("recruitQuarry", "社招")
		.param("lateLeaveTime", date).param("openBank", "华夏银行")
		.param("bankCardNo", "8888").param("endmAcct", "01010101")
		.param("mediAcct", "1000000").param("mateAcct", "100006")
		.param("housAcct", "100005").param("attachm", "01010")
		.param("remark", "深圳")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 测试员工基本信息查询
     * @throws Exception
     */
    @Test
    public void queryCustInfoByUserNo() throws Exception{
	
	String result = mockMvc.perform(get("/CustInfo/queryCustInfoByUserNo/P0000001")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk())
		.andReturn().getResponse().getContentAsString();
	
	System.out.println(result);
    }
    
    @Test
    public void delCustInf() throws Exception{
	
	String result = mockMvc.perform(put("/CustInfo/delCustInf/P0000001")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk())
		.andReturn().getResponse().getContentAsString();
	
	System.out.println(result);
    }
}
