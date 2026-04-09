package com.example.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.model.User;
import com.example.app.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // Register
    public User register(User user) {
        return repo.save(user);
    }

    // Login
    public User login(String username, String password) {
        User user = repo.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    // Get Profile
    public User getUser(Long id) {
        return repo.findById(id).orElse(null);
    }
}