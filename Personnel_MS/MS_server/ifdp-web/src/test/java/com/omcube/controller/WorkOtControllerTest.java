package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
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

/**
 * 加班管理的测试
 * 
 * @author dangjun
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class WorkOtControllerTest {
	
	
	   @Autowired
	    private WebApplicationContext wac;

	    private MockMvc mockMvc;

	    @Before
	    public void setup()
	    {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	    }
  
	    /**
	     * 加班信息的添加
	     * 
	     * @param sysOrganUser
	     */
	    //@Test
	    public void addWorkOtInfo() throws Exception{
	    	Date date1 = new Date(123124);
	    	Date date2 = new Date(323244);
		String result = mockMvc.perform(post("/workot/addWorkOtInfo")
	    			.param("workotType", "02")
	    			.param("timeSheet", "8.00")
	    			.param("email", "kzheming@163.com")
	    			.param("authFlow", "0001")
	    			.param("authStatus", "01")
	    			.param("authView", "pass")
	    			.param("attachm", "haha.gif")
	    			.param("remark", "加班添加测试")
	    			.param("createdBy", "dj")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    		
	    		
	    }
	    
	    /**
	     * 修改加班信息
	     *
	     */
	   // @Test
	    public void modifyWorkOtInfo() throws Exception
	    {
	    	
		String result = mockMvc.perform((put("/workot/modifyWorkOtInfo"))
			.param("uId", "0001")
			.param("applyNo", "201710190002")
			.param("workotType", "g")
			.param("timeSheet", "1")
			.param("attachm", "ha")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
			System.out.println(result);
	    }
	   
	   /**
	     * 删除加班信息
	     */
	    @Test
	    public void deleteWorkOtInfo() throws Exception
	    {
	    	
	    	String result = mockMvc.perform(delete("/workot/deleteWorkOtInfo")
	    			.param("applyNo", "201710190002")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    }
	    
	    /**
	     * 1.查询机构树
	     * @param organNo
	     */
	    //@Test
	    public void queryOrganList() throws Exception
	    {
	    	
	    	String result = mockMvc.perform(get("/organ/queryOrganList/0")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    	System.out.println(result);
	    }
	    
	    /**
	     * 2.查询当前机构信息
	     * @param organNo
	     */
	    //@Test
	    public void queryCurrentOrgan() throws Exception
	    {
	    	
	    	String result = mockMvc.perform(get("/organ/queryCurrentOrgan/00001")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    }
	    
	    
	    
	    /**
	     * 3.查询当前机构及上级机构信息
	     * @param organNo
	     */
	    //@Test
	    public void queryCurrentAndParentOrganDetail() throws Exception
	    {
	    	
	    	String result = mockMvc.perform(get("/organ/queryCurrentAndParentOrganDetail/02")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    }
	    
	    
	    /**
	     * 4.查询当前机构及下级机构信息
	     * @param organNo
	     */
	    //@Test
	    public void queryChildOrganDetail() throws Exception
	    {
	    	
	    	String result = mockMvc.perform(get("/organ/queryChildOrganDetail/0")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    }
	    
	       
	    /**
	     * 5.查询当前机构下的人员信息
	     * @param organNo
	     */
	    //@Test
	    public void queryOrganMember() throws Exception
	    {
	    	
	    	
	    	String result = mockMvc.perform(get("/organ/queryOrganMember/01")
	    			.contentType(MediaType.APPLICATION_JSON_UTF8))
	    			.andExpect(status().isOk()).andReturn().getResponse()
	    			.getContentAsString();

	    		System.out.println(result);
	    }
	    
}
