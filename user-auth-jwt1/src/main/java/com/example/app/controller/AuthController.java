package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.app.model.User;
import com.example.app.service.UserService;
import com.example.app.service.JwtService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    // ✅ REGISTER API
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    // ✅ LOGIN API (GENERATE TOKEN)
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {

        User validUser = userService.login(user.getUsername(), user.getPassword());

        Map<String, String> response = new HashMap<>();

        if (validUser != null) {
            String token = jwtService.generateToken(user.getUsername());
            response.put("token", token);
        } else {
            response.put("token", "INVALID");
        }

        return response;
    }

    // ✅ PROTECTED API (FOR TESTING)
    @GetMapping("/home")
    public String home() {
        return "Welcome! JWT is working";
    }
}