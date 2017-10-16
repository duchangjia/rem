package com.omcube.enumtype;

public enum PayBaseStatusEnum {
    /**
     * 有效 1
     */
    AVAILD("1"),

    /**
     * 无效 0
     */
    INVALID("0");

    private String value;

    private PayBaseStatusEnum(String value) {
	this.value = value;
    }

    public String getValue() {
	return value;
    }

    public static boolean isMatcher(String status) {
	for(PayBaseStatusEnum  payBaseEnum:  PayBaseStatusEnum.values())
	{
	    if (payBaseEnum.getValue().equals(status))
	    {
		return true;
	    }
	}
	return false;
    }
}
