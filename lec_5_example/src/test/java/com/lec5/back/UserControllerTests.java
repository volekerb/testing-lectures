package com.lec5.back;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.MapPropertySource;
import org.springframework.http.HttpMethod;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.web.client.RestTemplate;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration(initializers = UserControllerTests.Initializer.class)
public class UserControllerTests {

    public static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

        @Override
        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
            MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.0.10").withExposedPorts(27017);

            mongoDBContainer.start();

            Map<String, Object> map = new HashMap<>();
            map.put("spring.data.mongodb.host", mongoDBContainer.getContainerIpAddress());
            map.put("spring.data.mongodb.port", mongoDBContainer.getMappedPort(27017));
            configurableApplicationContext.getEnvironment().getPropertySources().addLast(
                    new MapPropertySource("TestConfigProperties", map)
            );
        }
    }

    @Autowired
    RestTemplateBuilder restTemplateBuilder;

    @LocalServerPort
    int port;

    @Test
    public void testSaveUser() {
        RestTemplate restTemplate = restTemplateBuilder.build();

        ParameterizedTypeReference<List<User>> typeRef = new ParameterizedTypeReference<List<User>>() {
        };

        List<User> users = restTemplate.exchange("http://localhost:"+port+"/users", HttpMethod.GET, null, typeRef).getBody();
        assertEquals(Collections.emptyList(), users);
    }
}
