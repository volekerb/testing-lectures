package com.lec5.back;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String id) {
        super("Couldn't find user with id " + id);
    }
}
