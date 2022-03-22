package com.kajalhamedi.food_spring_react;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Reposetory extends MongoRepository<Item, String> {

}
