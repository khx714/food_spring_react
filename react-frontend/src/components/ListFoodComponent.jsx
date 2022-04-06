import React, { Component } from 'react';
import FoodSevice from '../services/FoodSevice';


class ListFoodComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            food: []
        }
        this.addFood = this.addFood.bind(this);
    }

    componentDidMount(){
        FoodSevice.getFoods().then((res) => {this.setState({food : res.data});
           
        });
    }

    addFood(){
        this.props.history.push("/add-food");
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

export default ListFoodComponent;