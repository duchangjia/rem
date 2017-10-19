package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

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
public class EpAssetInfControllerTest {
    
    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup()
    {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    /**
     * 1.测试添加资产信息
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void addEpAssetInf() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(post("/EpAssetInf/addEpAssetInf")
			.param("assetNo", "0003")
			.param("organNo", "1001")
			.param("derpNo", "1212")
			.param("applyUserNo", "P0000001")
			.param("buyApplyNo", "3271356823457")
			.param("buyUnitPrice", "100")
			.param("buyNum", "5")
			.param("stockNum", "3")	
			.param("buyAmount", "500")
			.param("mfrs", "格力电器")
			.param("supplier", "好又多超市")
			.param("assetType", "电器")
			.param("assetName", "饭霸电饭煲")
			.param("faxfreeTime", "2018-09-10")
			.param("snNo", "10201")
			.param("derpLimit", "18")	
			.param("specType", "s")
			.param("factoryTime", "2018-09-10")
			.param("attachm", "hello")
			.param("remark", "饭霸电饭煲煮饭香")
			.param("status", "1")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk()).andReturn().getResponse()
			.getContentAsString();
		System.out.println(result);
    }
    /**
     * 2.测试根据uid和资产编号assetNo查询资产的详细信息
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void queryEpAssetInf() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(get("/EpAssetInf/queryEpAssetInf/0002")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    /**
     * 3.修改资产信息
     * @throws UnsupportedEncodingException
     * @throws Exception
     */
    @Test
    public void updateEpAssetInf() throws UnsupportedEncodingException, Exception{
	String result = mockMvc.perform(put("/EpAssetInf/updateEpAssetInf")
		.param("assetNo", "0002")
		.param("organNo", "1002")
		.param("derpNo", "1213")
		.param("applyUserNo", "P0000002")
		.param("buyApplyNo", "1341341352")
		.param("buyUnitPrice", "500")
		.param("buyNum", "4")
		.param("stockNum", "4")	
		.param("buyAmount", "2000")
		.param("mfrs", "格力集团")
		.param("supplier", "生活超市")
		.param("assetType", "电器")
		.param("assetName", "格力空调")
		.param("faxfreeTime", "2019-09-10")
		.param("snNo", "12312")
		.param("derpLimit", "28")	
		.param("specType", "m")
		.param("factoryTime", "2017-09-10")
		.param("attachm", "hello1")
		.param("remark", "格力空调省电")
		.param("status", "2")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
    @Test
    public void queryEpAssetInfs() throws UnsupportedEncodingException,Exception{
	String result = mockMvc.perform(get("/EpAssetInf/queryEpAssetInfs?assetType=电器&pageNum=1&pageSize=10")
//		.param("status", "1")
		.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse()
		.getContentAsString();
	System.out.println(result);
    }
}
