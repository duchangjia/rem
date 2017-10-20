package com.omcube.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 生成编号的工具类
 * 
 * @author dangjun
 * @version 1.0
 */
public class GetNumUtil {

	private static String oldDate = new SimpleDateFormat("yyyyMMdd").format(new Date());

	private static int num = 0;

	public static String getNo() {

		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		Date currDate = new Date();
		String currDateStr = dateFormat.format(currDate);

		// 判断时间是当天还是隔一天
		if (currDateStr.equals(oldDate)) {
			if (num > 1000) {
				return "超出了编号的范围!!";
			}
			num++;
			if (num <= 9) {
				currDateStr = currDateStr + "000" + num;
			} else if (num <= 99) {
				currDateStr = currDateStr + "00" + num;
			} else if (num <= 999) {
				currDateStr = currDateStr + "0" + num;
			} else {
				currDateStr = currDateStr + num;
			}

		} else {
			oldDate = new SimpleDateFormat("yyyyMMdd").format(new Date());
			num = 1;
			currDateStr = currDateStr + "000" + num;
		}

		return currDateStr;

	}
	
}
