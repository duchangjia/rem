package com.omcube.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
        return "hello, world!";
    }

    @RequestMapping("/say")
    public String saySth(String s){
        return "Say: " + s;
    }

}
