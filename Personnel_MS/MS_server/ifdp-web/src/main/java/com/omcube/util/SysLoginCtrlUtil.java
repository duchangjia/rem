package com.omcube.util;

import com.omcube.model.po.SysLoginCtrl;

public class SysLoginCtrlUtil {

    public static SysLoginCtrl getSysLoginCtrlBySession() {
	SysLoginCtrl sysLoginCtrl = new SysLoginCtrl();
	sysLoginCtrl.setUid("0001");
	sysLoginCtrl.setUserNo("1");
	sysLoginCtrl.setUserName("hehehe");
	return sysLoginCtrl;
    }
}
