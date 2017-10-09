package com.omcube.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.omcube.model.po.EpOrganBillInfoPO;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MyTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Test
	public void testAdd() throws ParseException{
		//添加数据
		EpOrganBillInfoPO billInfoPO = new EpOrganBillInfoPO();
		DateFormat dateformat = new SimpleDateFormat("yyyy-mm-dd");
		Date createdDate  = dateformat.parse("2017-09-26");
		Date updatedDate  = dateformat.parse("2017-09-26");
		billInfoPO.setuId("0001");
		billInfoPO.setOrganNo("10001");
		billInfoPO.setOrganName("wshh");
		billInfoPO.setOrganTaxNo("8888");
		billInfoPO.setOrganTel("123456");
		billInfoPO.setOrganAcct("66666666");
		billInfoPO.setOrganAcctname("tianan");
		billInfoPO.setOrganAddr("福田");
		billInfoPO.setCreatedBy("wrx");
		billInfoPO.setCreatedDate(createdDate);
		billInfoPO.setUpdatedBy("wrx");
		billInfoPO.setUpdatedDate(updatedDate);
	}
}
