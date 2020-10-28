package com.lec5.back;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;

@WebMvcTest
public class GreetingControllerComponentTests {

    @MockBean
    GreetingService service;

    @Autowired
    GreetingController controller;

    @Test
    public void testGreeting() {
        given(this.service.getGreeting("User")).willReturn("Hello, User");

        String greeting = controller.greeting("User");

        assertEquals("Hello, User", greeting);
    }
}
