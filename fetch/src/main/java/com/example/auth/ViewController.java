package com.example.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("views")
public class ViewController {
    @GetMapping("test")
    public String test() {
        return "test";
    }

}
