package com.lec5.back;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class GreetingControllerTests {

    @Autowired
    RestTemplateBuilder restTemplateBuilder;

    @Test
    public void testGreetingController(){
        RestTemplate restTemplate = restTemplateBuilder.build();
        ResponseEntity<String> response = restTemplate.getForEntity("http://localhost:8080/greeting?name=Test", String.class);

        assertEquals("Hello, Test", response.getBody());
    }
}
