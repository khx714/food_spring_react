import React, { Component } from "react";
import FoodSevice from "../services/FoodSevice";
import { useNavigate } from "react-router-dom";

class ListFoodComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
    };

    //bind method to the component
    //bind event handler to the component in the constracture
    this.addFood = this.addFood.bind(this);
    this.editFood = this.editFood.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  //define delete method
  deleteFood(id) {
    //REST API call
    FoodSevice.deleteFood(id).then((res) => {
      this.setState({
        foods: this.state.foods.filter((food) => food.id !== id),
      });
      const { navigate } = this.props;
      navigate("/");
    });
  }

  //Create and define method
  //the method should have id argument
  editFood(id) {
    //this.props.history.push(`/update-food/${id})
    const { navigate } = this.props;
    navigate(`/update-food/${id}`);
    //navigate("/update-food");
  }
  componentDidMount() {
    FoodSevice.getFoods().then((res) => {
      this.setState({ foods: res.data });
    });
  }

  addFood() {
    const { navigate } = this.props;
    navigate("/add-food");
    //this.props.history.push("/add-food");
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Products List </h2>

        <button className="btn btn-success" onClick={this.addFood}>
          {" "}
          Add Product{" "}
        </button>
        <div className="row"></div>
        <div className="list-group">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Product Name </th>
                <th> Product Price </th>
                <th> Product Description </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.foods.map((food) => (
                <tr key={food.id}>
                  <td>{food.foodName}</td>
                  <td>{food.foodPrice} </td>
                  <td>{food.foodDiscription}</td>
                  <td>
                    <button
                      style={{ marginRight: "10px" }}
                      onClick={() => this.editFood(food.id)}
                      className="btn btn-info"
                    >
                      {" "}
                      Edit{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteFood(food.id)}
                      className="btn btn-danger"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <ListFoodComponent {...props} navigate={navigate} />;
}
//export default ListFoodComponent;
