package com.oskar.recruitmentproject.Repository;

import org.springframework.data.repository.CrudRepository;

import com.oskar.recruitmentproject.Entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {

    boolean existsByEmail(String email);

}
