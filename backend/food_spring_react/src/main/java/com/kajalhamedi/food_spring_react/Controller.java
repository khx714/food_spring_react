package com.kajalhamedi.food_spring_react;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.JsonNode;
import com.kajalhamedi.food_spring_react.model.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController

public class Controller {
    @Autowired
    Reposetory repository;

    @GetMapping("/")
    public List<Food> frontpage() {
        List<Food> returnedItems = repository.findAll();
        return returnedItems;
    }

    // Add Food / REST API
    @PostMapping("/")
    public Food frontpage_post(@RequestBody JsonNode food) {
        String name = food.findValue("foodName").asText();
        String info = food.findValue("foodPrice").asText();
        String discr = food.findValue("foodDiscription").asText();

        Food Food = new Food(name, info, discr);
        repository.insert(Food);
        return Food;
    }

    // Delete food / REST API
    @DeleteMapping("/{id}")
    public Food delete_page_post(@PathVariable String id) {
        Optional<Food> returnedItems = repository.findById(id);
        Food item = returnedItems.get();
        repository.delete(item);

        return item;

    }

    @GetMapping("/{id}")
    public Food getFood(@PathVariable String id) {
        Optional<Food> returnedItems = repository.findById(id);
        return returnedItems.get();
    }

    // Edit, Update food / REST API
    @PutMapping("/{id}")
    public Food editpage_post(@RequestBody JsonNode food, @PathVariable String id) {
        System.out.println("Morning");
        Optional<Food> returnedItems = repository.findById(id);
        Food item = returnedItems.get();
        String name = food.findValue("foodName").asText();
        String info = food.findValue("foodPrice").asText();
        String discr = food.findValue("foodDiscription").asText();

        item.setFoodName(name);
        item.setFoodPrice(info);
        item.setFoodDiscription(discr);
        repository.save(item);

        return item;

    }

}
