package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;

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

import com.omcube.web.controller.TaxRateCtrlController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaxRateCtrlTest {

    @Autowired
    private WebApplicationContext wac;
    
    private MockMvc mockMvc;

    
    @Before
	public void setup()
	{
	     mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
    //增加
    @Test
    public void testAddTaxRateCtrl() throws Exception{
        String result = mockMvc.perform(post("/TaxRateCtrlController/saveTaxRateCtrl")
                .param("uId", "001")
                .param("groupId", "001001")
                .param("applyNo", "001001006")
//                .param("GroupLimit", "10000.00")
//                .param("GroupLowerLimit", "8000.00")
                .param("isDelete", "1")
                .contentType(MediaType.APPLICATION_JSON_UTF8))
        	.andExpect(status().isOk()).andReturn().getResponse()
        	.getContentAsString();
        System.out.println(result);
	/*TaxRateCtrlPO taxRateCtrl = new TaxRateCtrlPO();
	BigDecimal GroupLimit = new BigDecimal("9000.00"); 
	BigDecimal GroupLowerLimit = new BigDecimal("7000.00"); 
	taxRateCtrl.setuId("001");
	taxRateCtrl.setGroupId("001001");
	taxRateCtrl.setApplyNo("001001005");
	taxRateCtrl.setGroupLimit(GroupLimit);
	taxRateCtrl.setGroupLowerLimit(GroupLowerLimit);
	taxRateCtrl.setIsDelete("1");
	taxRateCtrlController.saveTaxRateCtrl(taxRateCtrl);
	System.out.println("save success");*/
	
    }

}
