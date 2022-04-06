
import React, { Component , useEffect, useState} from 'react';
import FoodSevice from '../services/FoodSevice';
import axios from 'axios';


const FoodComponent = () =>{
    const fetchRandomData = async () =>{
        const result =  await axios.get("http://localhost:8080/");
        console.log(result); 
        //setFoodDataJSON(result.data);
        return JSON.stringify(result.data);
    }

useEffect(() => { 
    fetchRandomData().then(data => {setFoodDataJSON(data || 'no data found');})

}, [])

        const[foodDataJSON, setFoodDataJSON] = useState({});
            return (
                <div>
                    <h1>Hello </h1>
                    <p>{foodDataJSON}</p>
            <button onClick={()=>{fetchRandomData()}}>Press me</button>
                </div>
                // <div>
                //     <h2 className="text-center"> Proknkjkjducts List </h2>
                //     <div className='row'>
                //         <button className="btn btn-primery" onClick={this.addFood}>Add Product</button>
                //     </div>
                //     <div className='row'>
                //         <table className="table table-striped table-bordered">
    
                //             <thead>
                //                 <tr>
                //                     <th> Product Name </th>
                //                     <th> Product Price </th>
                //                     <th> Product discription </th>
                //                     <th> Action </th>
                //                 </tr>
                //             </thead>
                //             <tbody>
                //         {
                //             this.state.food.map(
                //                 food =>
                //                 <tr key = {food.id}>
                //                     <td>{food.foodName}</td>
                //                     <td>{food.foodPrice} </td>
                //                     <td>{food.foodDiscription}</td>
                //                 </tr>
                //             )
                //         }
    
                //             </tbody>
                //         </table>
                //     </div>
                // </div>
            );

}
class ListFoodComponent extends Component {

   // const[foodDataJSON, setFoodDataJSON] = useState('');
    constructor(props){
        super(props)

        this.state={
            food: []
        }
        this.addFood = this.addFood.bind(this);
    }

     stpes = async()=>{
        const foodlist = await FoodSevice.getFoods();
        console.log("HEEEEEELLLLLLOOOO");
        console.log(foodlist);
        
    }
    
    componentDidMount(){
     this.fetchRandomData();
        FoodSevice.getFoods().then((res) => {
            this.setState({food : res.data});
        });
    }
    //const {useState} = React;

     fetchRandomData = async () =>{
        const result =  await axios.get("http://localhost:8080/");
        console.log(result); 
                                }
 
    //create food method
    addFood(){
        this.props.history.push("/add_food");
    }
}     

export default FoodComponent;