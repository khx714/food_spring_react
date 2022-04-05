package com.kajalhamedi.food_spring_react.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Item {
    private String id;
    private String name;
    private String info;

    public Item(String name, String info) {
        this.name = name;
        this.info = info;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getId() {
        return id;
    }

}