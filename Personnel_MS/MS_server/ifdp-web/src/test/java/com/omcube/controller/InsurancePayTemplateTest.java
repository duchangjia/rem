package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.UnsupportedEncodingException;

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
public class InsurancePayTemplateTest {
	
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    /**
     * 1.测试根据uid查询模板列表
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryInsurancePayTemplates() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/InsurancePayTemplate/queryInsurancePayTemplates/1/5")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();

		System.out.println(result);
    }
    /**
     * 2.测试添加模板用例
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void addInsurancePayTemplate() throws UnsupportedEncodingException, Exception{
    	String result = mockMvc.perform(post("/InsurancePayTemplate/addInsurancePayTemplate")
    			.param("applyNo", "")
    			.param("applyName", "北京地区缴纳")
    			.param("perEndmRate", "7.2")
    			.param("perEndmFixed", "560")
    			.param("comEndmRate", "4.5")
    			.param("comEndmFixed", "260")
    			.param("perMediRate", "8.5")
    			.param("perMediFixed", "123")
    			.param("comMediRate", "4.5")
    			.param("comMediFixed", "260")
    			.param("perUnemRate", "4.0")
    			.param("perUnemFixed", "260")	
    			.param("comUnemRate", "5.5")	
    			.param("comUnemFixed", "260")	
    			.param("perEmplRate", "6.8")	
    			.param("perEmplFixed", "260")	
    			.param("comEmplRate", "4.5")	
    			.param("comEmplFixed", "260")	
    			.param("perMateRate", "9.1")	
    			.param("perMateFixed", "230")	
    			.param("comMateRate", "4.5")	
    			.param("comMateFixed", "450")	
    			.param("perHousRate", "4.5")	
    			.param("perHousFixed", "260")
    			.param("comHousRate", "4.5")	
    			.param("comHousFixed", "390")	
    			.param("remark", "北京地区缴纳模板")		
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();
    		System.out.println(result);
    }
    /**
     * 3.测试根据uid和applyNo查询模板的详细信息
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryInsurancePayTemplate() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/InsurancePayTemplate/queryInsurancePayTemplate/0005")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();

	System.out.println(result);
    }
    /**
     * 4.测试修改模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void updateInsurancePayTemplate() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform((put("/InsurancePayTemplate/updateInsurancePayTemplate"))
			.param("applyNo", "0007")
			.param("applyName", "福州区缴纳")
			.param("perEndmRate", "4.5")
			.param("perEndmFixed", "260")
			.param("comEndmRate", "4.5")
			.param("comEndmFixed", "260")
			.param("perMediRate", "4.5")
			.param("perMediFixed", "123")
			.param("comMediRate", "4.4")
			.param("comMediFixed", "260")
			.param("perUnemRate", "4.6")
			.param("perUnemFixed", "260")	
			.param("comUnemRate", "4.7")	
			.param("comUnemFixed", "266")	
			.param("perEmplRate", "4.2")	
			.param("perEmplFixed", "265")	
			.param("comEmplRate", "4.5")	
			.param("comEmplFixed", "264")	
			.param("perMateRate", "4.4")	
			.param("perMateFixed", "263")	
			.param("comMateRate", "4.23")	
			.param("comMateFixed", "262")	
			.param("perHousRate", "4.23")	
			.param("perHousFixed", "261")
			.param("comHousRate", "4.12")	
			.param("comHousFixed", "260")	
			.param("remark", "福州地区缴纳模板")		
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		System.out.println(result);
    }
    /**
     * 测试删除保险系数缴纳模板
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void deleteInsurancePayTemplate() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform((delete("/InsurancePayTemplate/deleteInsurancePayTemplate/0008"))	
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
	
    }

}
