import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Router, Routes,Route,} from "react-router-dom";
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFoodComponent from './components/ListFoodComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFoodComponent from './components/CreateFoodComponent';

function App() {
  return (
    <div>
              <HeaderComponent />
                <div className="container">
                    <BrowserRouter> 
                      <Routes>
                         <Route path = "/" component = {<ListFoodComponent/>}> </Route>
                         <Route path = "/food" component = {<ListFoodComponent/>} ></Route>
                         <Route path = "/add_food" component = {<CreateFoodComponent/>} ></Route>
                        </Routes>
                        </BrowserRouter>
                        <ListFoodComponent></ListFoodComponent>
                </div>
             <FooterComponent/>
    </div>
  );
}

export default App;
