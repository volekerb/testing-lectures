package com.lec5.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@RestController
public class GreetingController {

    @Autowired
    GreetingService service;

    @GetMapping("/greeting")
    public String greeting(@PathParam("name") String name) {
        return service.getGreeting(name);
    }
}
