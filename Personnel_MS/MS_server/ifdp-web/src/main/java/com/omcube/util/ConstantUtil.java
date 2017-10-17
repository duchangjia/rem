package com.omcube.util;

/**
 * 常量类
 * @author jinx
 *
 */
public class ConstantUtil {

    public static final int  DEFAULT_PAGE_NUM = 1;
    
    public static final int DEFAULT_PAGE_SIZE = 10;
    
    public static final int DEFAULT_MAX_PAGE_SIZE = 100;
    
    public static final String EMAIL_REG = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
    
    public static final String PHONE_REG = "^[1][3578]\\d{9}$";
    
    public static final String NAME_REG = "(([\u4E00-\u9FA5]{2,7})|([a-zA-Z]{3,10}))";
    
    public static final int REMARK_MAX_LENGTH = 60;
    
    public static final String QUERY_CACHE = "queryCache";
    
    public static final String MONEY_REG = "^\\d+(\\.\\d{1,2})?$";
    
}
