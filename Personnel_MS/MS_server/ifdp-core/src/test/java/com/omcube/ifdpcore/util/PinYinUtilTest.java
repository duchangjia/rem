package com.omcube.ifdpcore.util;

import org.junit.Assert;
import org.junit.Test;

public class PinYinUtilTest {

	@Test
	public void testGetPYIndexStr(){
		Assert.assertEquals("CSZWSZM", PinYinUtil.getPYIndexStr("测试中文首字母", true));
	}
	
}
