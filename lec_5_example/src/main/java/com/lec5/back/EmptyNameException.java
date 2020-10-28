package com.lec5.back;

public class EmptyNameException extends RuntimeException {
    public EmptyNameException() {
        super("Name is empty");
    }
}
