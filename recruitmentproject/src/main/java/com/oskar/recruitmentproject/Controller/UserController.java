package com.oskar.recruitmentproject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.oskar.recruitmentproject.DAO.UserSignup;
import com.oskar.recruitmentproject.Entities.User;
import com.oskar.recruitmentproject.Repository.UserRepository;

import jakarta.servlet.http.Cookie;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @PostMapping("api/user/signup")
    public ResponseEntity<String> Signup(@RequestBody UserSignup user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        User newUser = new User();

        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());

        // TODO: password hashing
        newUser.setPassword(user.getPassword());

        User savedUser = userRepository.save(newUser);

        return ResponseEntity.ok().body(null);
    }
}
