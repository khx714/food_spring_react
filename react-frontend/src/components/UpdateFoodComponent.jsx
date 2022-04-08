import React, { Component } from "react";
import FoodSevice from "../services/FoodSevice";
import { useNavigate, useParams } from "react-router-dom";

class UpdateFoodComponent extends Component {
  constructor(props) {
    super(props);

    //define properties
    this.state = {
      //  id:this.props.match.params.id,
      id: props.id,
      foodName: "",
      foodPrice: "",
      foodDiscription: "",
    };
    //bind
    this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
    this.changeFoodPriceHandler = this.changeFoodPriceHandler.bind(this);
    this.changeFoodDiscriptionHandler =
      this.changeFoodDiscriptionHandler.bind(this);
    this.updatefood = this.updatefood.bind(this);
  }

  componentDidMount() {
    FoodSevice.getFoodById(this.state.id).then((res) => {
      let food = res.data;
      this.setState({
        foodName: food.foodName,
        foodPrice: food.foodPrice,
        foodDiscription: food.foodDiscription,
      });
    });
  }

  updatefood = (e) => {
    e.preventDefault();
    //create food javascript object
    let food = {
      foodName: this.state.foodName,
      foodPrice: this.state.foodPrice,
      foodDiscription: this.state.foodDiscription,
    };
    //add data to the object
    console.log("food => " + JSON.stringify(food));
    FoodSevice.updateFood(food, this.state.id).then((res) => {
      //this.props.history.push("/food");
      const { navigate } = this.props;
      navigate("/food");
    });
  };

  //Cancel Button
  cancel() {
    //this.props.history.push("/food");
    const { navigate } = this.props;
    navigate("/food");
  }

  //event handler for food Name
  changeFoodNameHandler(event) {
    this.setState({ foodName: event.target.value });
  }

  //event handler for food Price
  changeFoodPriceHandler(event) {
    this.setState({ foodPrice: event.target.value });
  }

  //event handler for food description
  changeFoodDiscriptionHandler(event) {
    this.setState({ foodDiscription: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> Edit product</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Product Name: </label>
                    <input
                      placeholder="Product Name"
                      name="foodName"
                      className="form-control"
                      value={this.state.foodName}
                      onChange={this.changeFoodNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Product Price: </label>
                    <input
                      placeholder="Product Price"
                      name="foodPrice"
                      className="form-control"
                      value={this.state.foodPrice}
                      onChange={this.changeFoodPriceHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Product Description: </label>
                    <input
                      placeholder="Product Description"
                      name="foodDiscription"
                      className="form-control"
                      value={this.state.foodDiscription}
                      onChange={this.changeFoodDiscriptionHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.updatefood}>
                    {" "}
                    Save{" "}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  return <UpdateFoodComponent {...props} navigate={navigate} id={id} />;
}
