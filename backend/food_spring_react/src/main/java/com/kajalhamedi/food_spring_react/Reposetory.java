package com.kajalhamedi.food_spring_react;

import com.kajalhamedi.food_spring_react.model.Food;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Reposetory extends MongoRepository<Food, String> {

}
