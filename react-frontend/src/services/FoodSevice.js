
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

}

export default new FoodService()
