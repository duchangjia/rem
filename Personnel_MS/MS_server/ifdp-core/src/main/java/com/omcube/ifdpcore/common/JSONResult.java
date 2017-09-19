package com.omcube.ifdpcore.common;

import com.alibaba.fastjson.JSONObject;

public class JSONResult extends JSONObject{

	private static final long serialVersionUID = -1928917661186974720L;
	
	private String code;
	private String retMsg;
	private Object data;
	
	public JSONResult(){
		
	}
	
	public JSONResult(String code, String retMsg){
		this.code = code;
		this.retMsg = retMsg;
	}
	
	public JSONResult(String code, String retMsg, Object data){
		
		this.code = code;
		this.retMsg = retMsg;
		this.data = data;
	}
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getRetMsg() {
		return retMsg;
	}
	public void setRetMsg(String retMsg) {
		this.retMsg = retMsg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}

    
}
