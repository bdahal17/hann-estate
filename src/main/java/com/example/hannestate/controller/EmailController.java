package com.example.hannestate.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/email")
@RestController
public class EmailController {
    @GetMapping("/sendEmail")
    public ResponseEntity<String> getEmail() {
        return new ResponseEntity<>("Success test", HttpStatus.OK);
    }
    @PostMapping("/sendEmail")
    public ResponseEntity<String> postEmail() {
        return new ResponseEntity<>("Success test", HttpStatus.OK);
    }
}
