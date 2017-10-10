package com.omcube.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	protected final Log logger = LogFactory.getLog(getClass());

    @RequestMapping("/hello")
    public String hello() {
    	
        return "hello, world!";
    }

    @RequestMapping("/say")
    public String saySth(String s){
    	s = "sshkjh";
        return "Say: " + s;
    }
}
