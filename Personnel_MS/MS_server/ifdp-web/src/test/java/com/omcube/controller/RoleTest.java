package com.omcube.controller;

import java.util.Date;
import java.util.UUID;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.omcube.model.po.SysRolePO;
import com.omcube.service.RoleService;

/**
 * 角色的管理的测试
 * 
 * @author dangjun
 * @version 1.0
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class RoleTest {
	
	@Autowired
	private WebApplicationContext wac;
	
	private MockMvc mockMvc;
	
	@Autowired
	private RoleService roleService;
	
	@Before
	public void setup()
	{
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	
	@Test
	public void test(){
		
		SysRolePO sysRolePO = new SysRolePO();
		sysRolePO.setuId("0001");
		sysRolePO.setRoleNo(String.valueOf(UUID.randomUUID().toString().split("-")));
		sysRolePO.setRoleName("jun");
		sysRolePO.setRoleDescr("测试");
		sysRolePO.setStatus("1");
		sysRolePO.setCreatedBy("jun");
		sysRolePO.setCreatedDate(new Date());
		sysRolePO.setUpdatedBy("jun");
		sysRolePO.setUpdatedDate(new Date());
		
		roleService.addRole(sysRolePO);
	}

	public static void main(String[] args) {
		
		SysRolePO sysRolePO = new SysRolePO();
		sysRolePO.setuId("0001");
		sysRolePO.setRoleNo(String.valueOf(UUID.randomUUID().toString().split("-")));
		sysRolePO.setRoleName("jun");
		sysRolePO.setRoleDescr("测试");
		sysRolePO.setStatus("1");
		sysRolePO.setCreatedBy("jun");
		sysRolePO.setCreatedDate(new Date());
		sysRolePO.setUpdatedBy("jun");
		sysRolePO.setUpdatedDate(new Date());
		

	}
	
}
