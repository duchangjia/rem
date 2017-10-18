package com.omcube.controller;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.omcube.model.mapper.SysPactMapper;
import com.omcube.model.po.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PactControllerTest {
	@Autowired
	private SysPactMapper pactMapper;

	@Test
	public void testQueryPactList() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryPactDetail() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryPactChangeList() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryPactChangeDetail() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryPactRenewList() {
		fail("Not yet implemented");
	}

	@Test
	public void testQueryPactRenewDetail() {
		fail("Not yet implemented");
	}

	@Test
	public void testAddPact() {
		PactPO pactPO = new PactPO();
		String as = "2013-11-21";
		pactPO.setuId("0001");
		pactPO.setPactNo("0003");
		pactPO.setPaperPactNo("0004");
		pactPO.setPactName("劳动合同4");
		pactPO.setOrganNo("0001");
		pactPO.setDerpNo("0001");
		pactPO.setUserNo("0003");
		pactPO.setCustName("MITONG4");
		pactPO.setSex("01");
		pactPO.setCert("123214123");
		pactPO.setPactType("01");
		pactPO.setSignTime(as);
		pactPO.setPactStartTime(as);
		pactPO.setPactEndTime(as);
		pactPO.setPactStatus("01");
		pactPO.setPactExpires("5");
		pactPO.setPactStopTime(as);
		pactPO.setStopReason("续约");
		pactPO.setAutoudFlag("01");
		pactPO.setAttachm("无");
		pactPO.setRemark("无");
		pactPO.setCreatedBy("会会");
		pactPO.setCreatedDate(as);
		pactPO.setUpdatedBy("HUIHUI");
		pactPO.setUpdatedDate(as);
		pactPO.setIsDelete("1");
		System.out.println("看的到吧");
		pactMapper.addPact(pactPO);
	}

	@Test
	public void testAddPactChange() {
		PactChange pactChange = new PactChange();
		String date = "2017-10-22";
		pactChange.setuId("0001");
		pactChange.setPactNo("0002");
		pactChange.setChangeId("0003");
		pactChange.setChangeTime(date);
		pactChange.setChangeType("1");
		pactChange.setChangeContent("坑蒙拐骗");
		pactChange.setAttachm("112");
		pactChange.setRemark("1");
		pactChange.setCreatedBy("XIAOXIAO");
		pactChange.setUpdatedBy("TONG");
		pactChange.setIsDelete("1");
		pactMapper.addPactChange(pactChange);
	}

	@Test
	public void testAddPactRenew() {
		PactRenew pactRenew = new PactRenew();
		String date = "2013-01-31";
		String datel = "2017-01-31";
		pactRenew.setuId("0001");
		pactRenew.setPactNo("0001");
		pactRenew.setRenewId("0003");
		pactRenew.setRenewTime(date);
		pactRenew.setRenewType("01");
		pactRenew.setRenewCameTime(date);
		pactRenew.setRenewLostTime(datel);
		pactRenew.setRenewContent("续签内容3");
		pactRenew.setAttachm("开开心心");
		pactRenew.setRemark("备注");
		pactRenew.setCreatedBy("RUIRUI");
		pactRenew.setUpdatedBy("RUI");
		pactRenew.setIsDelete("1");
		pactMapper.addPactRenew(pactRenew);
	}

	@Test
	public void testDeletePact() {
		Map<String, String> params = new HashMap<String, String>();
		params.put("uId", "0001");
		params.put("pactNo", "0001");
		params.put("isDelete", "1");
		pactMapper.deletePact(params);
	}

	@Test
	public void testDeletePactChange() {
		Map<String, String> params = new HashMap<String, String>();
		params.put("uId", "0001");
		params.put("pactNo", "0001");
		params.put("isDelete", "1");
		pactMapper.deletePact(params);
	}

	@Test
	public void testDeletePactRenew() {
		Map<String, String> params = new HashMap<String, String>();
		params.put("uId", "0001");
		params.put("pactNo", "0001");
		params.put("isDelete", "1");
		pactMapper.deletePact(params);
	}

	@Test
	public void testUpdatePact() {
		PactPO pactPO = new PactPO();
		String as = "2013-11-21";
		pactPO.setuId("0001");
		pactPO.setPactNo("0003");
		pactPO.setPaperPactNo("0003");
		pactPO.setPactName("劳动合同");
		pactPO.setOrganNo("0001");
		pactPO.setDerpNo("0001");
		pactPO.setUserNo("0003");
		pactPO.setCustName("MITONG");
		pactPO.setSex("01");
		pactPO.setCert("123214123");
		pactPO.setPactType("01");
		pactPO.setSignTime(as);
		pactPO.setPactStartTime(as);
		pactPO.setPactEndTime(as);
		pactPO.setPactStatus("01");
		pactPO.setPactExpires("5");
		pactPO.setPactStopTime(as);
		pactPO.setStopReason("续约加码");
		pactPO.setAutoudFlag("01");
		pactPO.setAttachm("无");
		pactPO.setRemark("无");
		pactPO.setCreatedBy("会会");
		pactPO.setCreatedDate(as);
		pactPO.setUpdatedBy("HUIHUI");
		pactPO.setUpdatedDate(as);
		pactPO.setIsDelete("1");
		pactMapper.updatePact(pactPO);
	}
	
	@Test
	public void testUpdatePactChange(){
		PactChange pactChange = new PactChange();
		String date = "2017-10-22";
		pactChange.setuId("0001");
		pactChange.setPactNo("0002");
		pactChange.setChangeId("0003");
		pactChange.setChangeTime(date);
		pactChange.setChangeType("1");
		pactChange.setChangeContent("坑蒙拐骗是是是");
		pactChange.setAttachm("112");
		pactChange.setRemark("1");
		pactChange.setCreatedBy("XIAOXIAO");
		pactChange.setCreatedDate(date);
		pactChange.setUpdatedBy("TONG");
		pactChange.setUpdatedDate(date);
		pactMapper.updatePactChange(pactChange);
	}
	
	@Test
	public void testUpdatePactRenew(){
		PactRenew pactRenew = new PactRenew();
		String date = "2013-01-31";
		String datel = "2017-01-31";
		pactRenew.setuId("0001");
		pactRenew.setPactNo("0001");
		pactRenew.setRenewId("0003");
		pactRenew.setRenewTime(date);
		pactRenew.setRenewType("01");
		pactRenew.setRenewCameTime(date);
		pactRenew.setRenewLostTime(datel);
		pactRenew.setRenewContent("续签内容3");
		pactRenew.setAttachm("开开心心");
		pactRenew.setRemark("备注");
		pactRenew.setCreatedBy("RUIRUI");
		pactRenew.setUpdatedBy("RUI");
		pactRenew.setIsDelete("1");
		pactMapper.updatePactRenew(pactRenew);
	}
}
