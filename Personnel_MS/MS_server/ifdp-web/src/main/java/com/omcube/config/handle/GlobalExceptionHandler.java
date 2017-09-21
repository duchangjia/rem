package com.omcube.config.handle;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.omcube.ifdpcore.common.JSONResult;

@ControllerAdvice
public class GlobalExceptionHandler {

	
	@ExceptionHandler(value = Exception.class)
	@ResponseBody
    public JSONResult defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
		
        JSONResult result = new JSONResult();
        
        result.setCode("E99999");
        result.setRetMsg("请求处理失败，请联系管理员。");
        
        return result;
    }
	
}
