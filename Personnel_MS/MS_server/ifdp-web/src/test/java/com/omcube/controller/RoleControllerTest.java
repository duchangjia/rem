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

import com.arjuna.ats.internal.arjuna.objectstore.jdbc.drivers.postgres_driver;
import com.arjuna.ats.internal.jdbc.drivers.modifiers.extensions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@RunWith(SpringRunner.class)
@SpringBootTest
public class RoleControllerTest {
    
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    /**
     * 角色修改
     * @throws Exception
     */
    //@Test
    public void modifyRoleInfo() throws Exception
    {
    	
	String result = mockMvc.perform((put("/role/modifyRoleInfo"))
		.param("uId", "0001")	
		.param("roleNo", "1507718285657")
		.param("roleName", "qq")
		.param("roleDescr", "juese")
		.param("status", "0")
		.param("createdBy", "lhj")
		.param("updatedBy", "lhj")	
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
		System.out.println(result);
    }
    /**
     * 添加角色的测试
     * 
     * @throws Exception
     */
    @Test
    public void addRoleInfo() throws Exception
    {
    	
	String result = mockMvc.perform(post("/role/addRoleInfo")
    			.param("roleName", "CFO")
    			.param("roleDescr", "添加角色22")
    			.param("status", "1")
    			.param("createdBy", "ha")
    			.param("updatedBy", "hg")	
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();

    		System.out.println(result);
    		
    }

    /**
     * 删除角色的测试
     * 
     * @throws Exception
     */
    // @Test
    public void deleteRoleInfo() throws Exception
    {
    	
    	String result = mockMvc.perform(delete("/role/deleteRoleInfo/0002")
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();

    		System.out.println(result);
    }
    
    /**
     * 权限的分配
     */
   // @Test
    public void  setRoleFunc() throws Exception{
    	
    	String result = mockMvc.perform(post("/role/setRoleFunc")
    			.param("roleNo", "0002")
    			.param("uId", "0001")
    			.param("roleFuncSet[0].bsnNo", "1507366769338")
    			.param("roleFuncSet[1].bsnNo", "hello")
    			.param("roleFuncSet[0].uId", "0001")
    			.param("roleFuncSet[1].uId", "0001")
    			.param("roleDescr", "添加角色11")
    			.param("status", "1")
    			.param("createdBy", "ha")
    			.param("updatedBy", "hg")	
    			.contentType(MediaType.APPLICATION_JSON_UTF8))
    			.andExpect(status().isOk()).andReturn().getResponse()
    			.getContentAsString();

    		System.out.println(result);
    	
    }
}
