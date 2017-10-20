package com.omcube.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
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
public class OrganControllerTest {

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup() {
	mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    /**
     * 1.查询机构树
     * @param organNo
     */
    @Test
    public void queryOrganList() throws Exception {

	String result = mockMvc.perform(get("/organ/queryOrganList/0").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 2.查询当前机构信息
     * @param organNo
     */
    @Test
    public void queryCurrentOrgan() throws Exception {

	String result = mockMvc
		.perform(get("/organ/queryCurrentOrgan/00001").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 3.查询当前机构及上级机构信息
     * @param organNo
     */
    @Test
    public void queryCurrentAndParentOrganDetail() throws Exception {

	String result = mockMvc
		.perform(get("/organ/queryCurrentAndParentOrganDetail/02").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 4.查询当前机构及下级机构信息
     * @param organNo
     */
    @Test
    public void queryChildOrganDetail() throws Exception {

	String result = mockMvc
		.perform(get("/organ/queryChildOrganDetail/0").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 5.查询当前机构下的人员信息
     * @param organNo
     */
    @Test
    public void queryOrganMember() throws Exception {

	String result = mockMvc.perform(get("/organ/queryOrganMember/01").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 6.删除机构
     * @param organNo
     */
    @Test
    public void deleteOrganInfo() throws Exception {

	String result = mockMvc.perform(delete("/organ/deleteOrganInfo/0").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
     * 7.增加当前机构人员信息
     * @param sysOrganUser
     */
    @Test
    public void addOrganMember() throws Exception {

	String result = mockMvc
		.perform(post("/organ/addOrganMember").param("uId", "00001").param("userNo", "1004")
			.param("userName", "kzheming").param("certNo", "1234567").param("mobileTEL", "13429692050")
			.param("email", "kzheming@163.com").param("organNo", "01").param("status", "1")
			.param("password", "123").param("pwdLevel", "2").param("remark", "上海分公司员工")
			.param("createdBy", "蓝亿铮").param("updatedBy", "蓝亿铮")
			.contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);

    }

    /**
     * 8.根据机构人员编号-删除机构下的人员
     * @param sysOrganUser
     */
    @Test
    public void deleteOrganMember() throws Exception {

	String result = mockMvc
		.perform(delete("/organ/deleteOrganMember/1004").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

	System.out.println(result);
    }

    /**
    * 9.更新机构信息
    *
    */
    @Test
    public void modifyOrganInfo() throws Exception {

	String result = mockMvc
		.perform((put("/organ/modifyOrganInfo")).param("uId", "0001").param("organNo", "0011")
			.param("organName", "橙色魔方武汉公司").param("organType", "02").param("status", "1")
			.param("parentNo", "0").param("organLevel", "2").param("organDescr", "很有发展前景图纸")
			.param("organPath", "武汉").param("orgRegAddr", "武汉珞珈山").param("organConAddr", "武汉珞珈山")
			.param("organMan", "kzm").param("organTel", "13833455678").param("organEmail", "kzm@163.com")
			.param("organMgeId", "1").param("organMgeName", "kk123").param("createdBy", "lhj")
			.param("updatedBy", "lhj").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
	System.out.println(result);
    }

    /**
    * 10.新增机构：向机构表和机构详情表中同时保存信息
    *
    */
    @Test
    public void addOrgan() throws Exception {

	String result = mockMvc
		.perform(post("/organ/addOrgan").param("uId", "0001").param("organNo", "0015").param("organName", "橙公司")
			.param("organType", "2").param("status", "1").param("parentNo", "01").param("organDescr", "1")
			.param("organPath", "1").param("orgRegAddr", "5").param("organConAddr", "5")
			.param("organMan", "kzm").param("organTel", "1").param("organEmail", "kzm@163.com")
			.param("organMgeId", "1").param("organMgeName", "k").param("createdBy", "k")
			.param("updatedBy", "k").contentType(MediaType.APPLICATION_JSON_UTF8))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
	System.out.println(result);
    }

}
