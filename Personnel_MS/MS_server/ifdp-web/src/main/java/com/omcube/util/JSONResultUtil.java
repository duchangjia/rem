package com.omcube.util;

import com.omcube.ifdpcore.common.JSONResult;

public class JSONResultUtil {
	
	public static JSONResult setSuccess(Object object){
		
		JSONResult result = new JSONResult();
		
        result.setCode("S00000");
        result.setRetMsg("操作成功");
        result.setData(object);
        
        return result;
    }

    public static JSONResult setSuccess(){
        return setSuccess(null);
    }

    public static JSONResult setError(String code, String msg){
    	
    	JSONResult result = new JSONResult();
    	
        result.setCode(code);
        result.setRetMsg(msg);
        
        return result;
    }
}
