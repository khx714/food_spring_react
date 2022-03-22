package com.kajalhamedi.food_spring_react;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/")
    public String frontpage() {
        return "hello";
    }

    @PostMapping("/")
    public Item frontpage_post() {
        Item item = new Item("test", "100");
        return item;
    }

}
