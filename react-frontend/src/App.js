import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFoodComponent from './components/ListFoodComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
          <div className="container">
            <ListFoodComponent />
          </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
