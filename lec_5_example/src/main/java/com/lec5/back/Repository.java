package com.lec5.back;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repository extends MongoRepository<User, String> {
}
