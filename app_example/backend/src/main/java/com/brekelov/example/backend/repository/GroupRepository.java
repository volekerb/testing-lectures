package com.brekelov.example.backend.repository;

import com.brekelov.example.backend.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
  Group findByName(String name);
}