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
public class EpCustWorkHisControllerTest {

    @Autowired
        private WebApplicationContext wac;
    
        private MockMvc mockMvc;
        
        @Before
        public void setup()
        {
    	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
        }
        
        //测试新增员工工作经历
        @Test
        public void testInsertEpCustWorkHis() throws Exception{
            String result = mockMvc.perform(post("/epCustWorkHis/insertEpCustWorkHis")
    		.param("uid", "001")
    		.param("userNo", "001002")
    		.param("workHisId", "2")
    		.param("startTime", "2014-08-18")
    		.param("endTime", "2016-08-18")
    		.param("company", "Tencent")
    		.param("post1", "UI")
    		.param("duty", "页面设计")
    		.param("desc", "网页的交互设计和测试")
    		.param("createdBy", "小明")
    		.param("updatedBy", "小蓝")
    		.contentType(MediaType.APPLICATION_JSON_UTF8))
    		.andExpect(status().isOk()).andReturn().getResponse()
    		.getContentAsString();
    	System.out.println(result);
        }
            
        //测试根据主键（用户编号，序号）删除员工工作经历信息
        @Test
        public void testDeleteEpCustWorkHis() throws Exception{
            String result = mockMvc.perform(post("/epCustWorkHis/deleteEpCustEduHis")
    		.param("uid", "001")
    		.param("userNo", "001002")
    		.param("workHisId", "2")
    		.contentType(MediaType.APPLICATION_JSON_UTF8))
        		.andExpect(status().isOk()).andReturn().getResponse()
        		.getContentAsString();
        	System.out.println(result);
        }
        

}
