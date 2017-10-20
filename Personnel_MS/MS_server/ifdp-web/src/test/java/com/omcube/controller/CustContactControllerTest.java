package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;

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
public class CustContactControllerTest {

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    /**
     * 1.测试添加员工社会关系
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void addCustContact() throws UnsupportedEncodingException, Exception{
    	String result = mockMvc.perform(post("/CustContact/addCustContact")
    			.param("userNo", "P0000001")
    			.param("contactId", "11")
    			.param("contactName", "孙悟空")
    			.param("relationship", "朋友")
    			.param("telphone", "13311312311")
    			.param("profession", "农民")
    			.param("post", "中级农民")
    			.param("addr", "南山区")		
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();
    		System.out.println(result);
    }
    /**
     * 2.更新员工关系
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void updateCustContact() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(put("/CustContact/updateCustContact")
			.param("userNo", "P0000001")
			.param("contactId", "11")
			.param("contactName", "houzi")
			.param("relationship", "上级")
			.param("telphone", "13311312322")
			.param("profession", "土豪")
			.param("post", "gao级土豪")
			.param("addr", "xiao雷音寺")		
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		System.out.println(result);
    }
    /**
     * 3.测试多条关系的插入
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    /*@Test
    public void addCustContacts() throws UnsupportedEncodingException, Exception{
    	String result = mockMvc.perform(post("/CustContact/addCustContacts")
    			.param("custContacts[0].userNo", "P0000001")
    			.param("custContacts[0].contactId", "7")
    			.param("custContacts[0].contactName", "孙猴子")
    			.param("custContacts[0].relationship", "朋友")
    			.param("custContacts[0].telphone", "13311312311")
    			.param("custContacts[0].profession", "农民")
    			.param("custContacts[0].post", "中级农民")
    			.param("custContacts[0].addr", "南山区")	
    			.param("custContacts[1].userNo", "P0000001")
    			.param("custContacts[1].contactId", "9")
    			.param("custContacts[1].contactName", "牛魔王")
    			.param("custContacts[1].relationship", "朋友")
    			.param("custContacts[1].telphone", "13311312311")
    			.param("custContacts[1].profession", "土匪")
    			.param("custContacts[1].post", "中级土匪")
    			.param("custContacts[1].addr", "火焰山")	
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();
    		System.out.println(result);
    }*/
    /**
     * 4.查询一个员工所有的关系
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryCustContacts() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/CustContact/queryCustContacts/P0000001")		
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    /**
     * 5.删除员工关系
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void deleteCustContact() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(delete("/CustContact/deleteCustContact/P0000001/11")		
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
}
