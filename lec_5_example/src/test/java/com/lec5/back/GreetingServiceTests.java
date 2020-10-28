package com.lec5.back;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class GreetingServiceTests {

    @Test
    public void testGetGreeting() {
        //given
        GreetingService greetingService = new GreetingService();

        //when
        String greeting = greetingService.getGreeting("Test");

        //test
        assertEquals("Hello, Test", greeting);
    }

    @ParameterizedTest
    @ValueSource(strings = { "User", "", "?#$%?#$%?@#$?" })
    public void testGreeting(String user) {
        //given
        GreetingService greetingService = new GreetingService();

        //when
        String greeting = greetingService.getGreeting(user);

        //test
        assertEquals("Hello, " + user, greeting);
    }


    private static List<String> getStreamWithData() {
        return Arrays.asList("Test");
    }

    @ParameterizedTest
    @MethodSource("getStreamWithData")
    public void testGreeting1(String input) {
        GreetingService service = new GreetingService();
        assertEquals(service.getGreeting(input), "Hello, " + input);
    }

    @Test
    void checkForEmpty() {
        //given
        GreetingService greetingService = new GreetingService();

        //test
        assertThrows(EmptyNameException.class, () -> greetingService.checkForEmpty(""));
    }
}
