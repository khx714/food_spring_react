import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import ListFoodComponent from './components/ListFoodComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFoodComponent from './components/CreateFoodComponent';
import UpdateFoodComponent from './components/UpdateFoodComponent';


function App() {
  return (
    <div>
      <Router>
              <HeaderComponent />
              <div className="container">
                   <Routes>
                         <Route path = "/" exact element={<ListFoodComponent/>}></Route>
                         <Route path = "/food" element={<ListFoodComponent/>}></Route>
                         <Route path = "/add-food" element={<CreateFoodComponent/>}></Route>
                        <Route path = "/update-food/:id" element={<UpdateFoodComponent/>}></Route>  

                   </Routes>
              </div>
              <FooterComponent/>
          
      </Router>
    </div>
  );
}

export default App;
