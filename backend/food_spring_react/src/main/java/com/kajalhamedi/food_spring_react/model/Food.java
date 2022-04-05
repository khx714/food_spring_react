package com.kajalhamedi.food_spring_react.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Food {
    private String id;
    private String foodName;
    private String foodPrice;
    private String foodDiscription;

    // constructore
    public Food() {

    }

    public Food(String foodName, String foodPrice, String foodDiscription) {
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.foodDiscription = foodDiscription;
    }

    // get sete geter
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getFoodPrice() {
        return foodPrice;
    }

    public void setFoodPrice(String foodPrice) {
        this.foodPrice = foodPrice;
    }

    public String getFoodDiscription() {
        return foodDiscription;
    }

    public void setFoodDiscription(String foodDiscription) {
        this.foodDiscription = foodDiscription;
    }

}
