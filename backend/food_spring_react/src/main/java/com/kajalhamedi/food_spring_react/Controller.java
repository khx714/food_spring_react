package com.kajalhamedi.food_spring_react;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    Reposetory repository;

    @GetMapping("/")
    public List<Item> frontpage() {
        List<Item> returnedItems = repository.findAll();
        return returnedItems;

    }

    @PostMapping("/")
    public Item frontpage_post(@RequestBody JsonNode food) {
        String name = food.findValue("name").asText();
        String info = food.findValue("info").asText();
        Item item = new Item(name, info);
        repository.insert(item);
        return item;
    }

    @DeleteMapping("/{id}")
    public Item delete_page_post(@RequestBody JsonNode food, @PathVariable String id) {
        Optional<Item> returnedItems = repository.findById(id);
        Item item = returnedItems.get();
        repository.delete(item);

        return item;

    }

    @PutMapping("/{id}")
    public Item editpage_post(@RequestBody JsonNode food, @PathVariable String id) {
        Optional<Item> returnedItems = repository.findById(id);
        Item item = returnedItems.get();
        String name = food.findValue("name").asText();
        String info = food.findValue("info").asText();
        item.setName(name);
        item.setInfo(info);
        repository.save(item);

        return item;

    }
}
