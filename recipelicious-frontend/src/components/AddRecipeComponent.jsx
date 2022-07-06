import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import RecipeService from '../services/RecipeService';
import { useNavigate } from 'react-router';




export default function AddRecipeComponent() {
  const [recipeName, setRecipeName] = useState("");
  const [timeRequired, setTimeRequired] = useState("");
  const [ingredientName,setIngredientsName] = useState("")
  const [method, setMethod] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {recipeName:recipeName, timeRequired:timeRequired,method:method,IngredientName:ingredientName};
    console.log('recipe =>'+JSON.stringify(recipe));    

    RecipeService.createRecipe(recipe);
    alert(`Recipe Added Successfully!`)
    navigate("/recipes");  
    
  }
  const cancel=()=>{
    alert(`Discarding Changes`)
    navigate("/recipes");  
  }
  
  return (

    <div>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className="text-center"> Add your Recipe!</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>Recipe Name: </label>
                            <input placeholder="Enter Recipe Name" name="recipeName" className='form-control'
                            value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Time Required: </label>
                            <input placeholder="Enter Time Required" name="timeRequired" className='form-control'
                            value={timeRequired} onChange={(e) => setTimeRequired(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Ingredients: </label>
                            <input placeholder="Enter Ingredients" name="ingredientName" className='form-control'
                            value={ingredientName} onChange={(e) => setIngredientsName(e.target.value)}/>
                        </div>
                        
                        <div className='form-group'>
                            <label>Method: </label>
                            <input placeholder="Enter your recipe and steps" name="method" className='form-control'
                            value={method} onChange={(e) => setMethod(e.target.value)}/>
                        </div>
                        <button className='btn btn-success' onClick={handleSubmit}>Save</button> 
                        <button className='btn btn-danger' onClick = {cancel.bind()} style={{marginLeft:"10px"}}>Cancel</button>
                
                    </form>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}