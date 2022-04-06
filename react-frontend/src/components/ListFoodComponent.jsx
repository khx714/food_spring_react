import React, { Component } from 'react';
import FoodSevice from '../services/FoodSevice';
import {useNavigate} from "react-router-dom"


class ListFoodComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            food: []
        }

        //bind method to the component
        this.addFood = this.addFood.bind(this);
        this.editFood = this.editFood.bind(this);
    }
    //Create and define method
    //the method should have id argument
    editFood(id){
        //this.props.history.push(`/update-food/${id})
        const { navigate } = this.props;
        navigate("/update-food/${id}");

    }
    componentDidMount(){
        FoodSevice.getFoods().then((res) => {this.setState({food : res.data});
           
        });
    }
   
    addFood(){
        const { navigate } = this.props;
        navigate("/add-food");
        //this.props.history.push("/add-food");
    }
//Edit button
    editFood(){
        console.log("editing");
            // const { navigate } = this.props;
        // console.log(this.props);
        //     console.log(navigate);
        // navigate("/add-food");
        
    }
//Delete button
    deleteFood(){
        const { navigate } = this.props;
        navigate("/add-food");
    }



    render() {
        return (
            <div>
                
                <h2 className="text-center"> Products List </h2>

                <button className='btn btn-success' onClick={this.addFood}> Add Product </button>
                <div className='row'>
                  
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product Name </th>
                                <th> Product Price </th>
                                <th> Product discription </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.food.map(
                            food =>
                            <tr key = {food.id}>
                                <td>{food.foodName}</td>
                                <td>{food.foodPrice} </td>
                                <td>{food.foodDiscription}</td>
                                <td><button className="btn btn-info" onClick={ () =>this.editFood(food.id)}> Edit </button></td>
                                <td><button className="btn btn-danger"onClick={this.deleteFood}> Delete </button></td>
                            </tr>
                        )
                    }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();
  
    return <ListFoodComponent {...props} navigate={navigate} />;
  }
//export default ListFoodComponent;