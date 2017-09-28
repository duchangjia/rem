package com.omcube.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.omcube.ifdpcore.common.JSONResult;
import com.omcube.model.dto.ValidDTO;
import com.omcube.util.JSONResultUtil;

@Controller
public class ValidDemoController {

	@PostMapping(value="/validDemo")
	@ResponseBody
	public JSONResult validDemo(@Valid ValidDTO validDTO, BindingResult bindingResult) {
	    if (bindingResult.hasErrors()) {
	        return JSONResultUtil.setError("F00001", bindingResult.getFieldError().getDefaultMessage());
	    }

	    return JSONResultUtil.setSuccess(validDTO);
	}
	
}
