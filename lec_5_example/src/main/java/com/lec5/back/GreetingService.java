package com.lec5.back;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {

    public String getGreeting(String name) {
        return "Hello, " + name;
    }

    public String checkForEmpty(String name) {
        if (name.equals("")) throw new EmptyNameException();
        return name;
    }
}
