
import axios from 'axios';
//<const Food_API_BASE_URL = "http://localhost:8080/api/v1/food";
const Food_API_BASE_URL = "http://localhost:8080";

class FoodService {

    getFoods(){
        return axios.get(Food_API_BASE_URL);
    }
    // method
    createFood(food){
        return axios.post(Food_API_BASE_URL, food);
    }
    // method
    getFoodById(foodId){
        return axios.get(Food_API_BASE_URL +"/" + foodId);
    }

    //nabood hanoz 18
    updateFood(food, foodId){
        return axios.put(Food_API_BASE_URL +"/update-food" + foodId, food);

    }
    deleteFood(foodId){
        return axios.delete(Food_API_BASE_URL + "/" + foodId);
    }
    
}

export default new FoodService()
