import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DisplayFood from './components/DisplayFood/DisplayFood';
import FoodCategories from './components/FoodCategories/FoodCategories';
import NavBar from './components/NavBar/NavBar';
import SingleClickFood from './components/SingleClickFood/SingleClickFood';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <FoodCategories></FoodCategories>
          </Route>
          <Route path="/foodCategories">
            <FoodCategories></FoodCategories>
          </Route>
          <Route path="/Categories/:nameId">
            <DisplayFood></DisplayFood>
          </Route>
          <Route path="/food/:categoriId">
            <SingleClickFood></SingleClickFood>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
