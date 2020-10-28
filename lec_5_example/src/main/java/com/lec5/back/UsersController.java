package com.lec5.back;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {

    private final Repository repository;

    public UsersController(Repository repository) {
        this.repository = repository;
    }

    @GetMapping("/users")
    List<User> all() {
        return repository.findAll();
    }

    @PostMapping("/users")
    User newEmployee(@RequestBody User newUser) {
        return repository.save(newUser);
    }

    @GetMapping("/users/{id}")
    User one(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }
}
