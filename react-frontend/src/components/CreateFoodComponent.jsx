import React, { Component } from 'react';
import FoodSevice from '../services/FoodSevice';


class CreateFoodComponent extends Component {
    constructor(props){
        super(props)

        //define properties
        this.state = {
            foodName:"",
            foodPrice:"",
            foodDiscription:""

        }
        //bind
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);

        this.changeFoodPriceHandler = this.changeFoodPriceHandler.bind(this);

        this.changeFoodDiscriptionHandler = this.changeFoodDiscriptionHandler.bind(this);

        this.saveFood = this.saveFood.bind(this);

    }

    saveFood = (e) => {
        e.preventDefault();
        //create food javascript object
        let food = {foodName:this.state.foodName, foodPrice:this.state.foodPrice, foodDiscription:this.state.foodDiscription};
       //add data to the object
        console.log("food => " + JSON.stringify(food));

        FoodSevice.createFood(food).then(res => {
            //navigate to the list <Component history={this.props.history} />
const { history } = this.props;
history.push("/food")
           // this.props.history.push("/food");
        });
    }

//Cancel Button cancel.bind(this)
cancel(){
    this.props.history.push("/food");
}

    //event handler for food Name
    changeFoodNameHandler(event){
        this.setState({foodName: event.target.value});
    }

    //event handler for food Price
    changeFoodPriceHandler(event){
        this.setState({foodPrice: event.target.value});
    }

    //event handler for food description
    changeFoodDiscriptionHandler(event){
        this.setState({foodDiscription: event.target.value});
    }

    render() {
        return (
            <div>
         
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'> Add product</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> Product Name: </label>
                                    <input placeholder='Product Name' name= 'foodName' className='form-control'
                                        value={this.state.foodName} onChange={this.changeFoodNameHandler}/>

                                </div>

                                <div className='form-group'>
                                    <label> Product Price: </label>
                                    <input placeholder='Product Price' name= 'foodPrice' className='form-control'
                                        value={this.state.foodPrice} onChange={this.changeFoodPriceHandler}/>

                                </div>

                                <div className='form-group'>
                                    <label> Product Discription: </label>
                                    <input placeholder='Product Discription' name= 'foodDiscription' className='form-control'
                                        value={this.state.foodDiscription} onChange={this.changeFoodDiscriptionHandler}/>

                                </div>
                                <button className="btn btn-success"onClick={this.saveFood}> Save </button>
                            
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>


                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFoodComponent;