import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListRecipeComponent from './components/ListRecipeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import MyRecipesComponents from './components/MyRecipesComponents';
import AddRecipeComponent from './components/AddRecipeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path = "/"  element= {<MyRecipesComponents/>}></Route>
              <Route path = "/recipes" element= {<ListRecipeComponent/>}></Route>
              <Route path = "/add-recipe" element= {<AddRecipeComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent />
      
      </Router>
    </div>
  );
}

export default App;
