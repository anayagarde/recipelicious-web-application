import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListRecipesComponent from './components/ListRecipesComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MyRecipesComponents from './components/MyRecipesComponents';
import AddRecipeComponent from './components/AddRecipeComponent';
import UpdateRecipeComponent from './components/UpdateRecipeComponent';
import ViewRecipeComponent from './components/ViewRecipeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path = "/"  element= {<MyRecipesComponents/>}></Route>
              <Route path = "/recipes" element= {<ListRecipesComponent/>}></Route>
              <Route path = "/add-recipe" element= {<AddRecipeComponent/>}></Route>
              <Route path = "/update-recipe/:id" element= {<UpdateRecipeComponent/>}></Route>
              <Route path = "/view-recipe/:id" element= {<ViewRecipeComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent />
      
      </Router>
    </div>
  );
}

export default App;
