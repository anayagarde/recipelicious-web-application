import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import RecipeService from '../services/RecipeService';
import { useNavigate } from 'react-router';
import { Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Card } from 'react-bootstrap';
import {Divider} from '@mui/material';

export default function AddRecipeComponent() {

  const [recipeName, setRecipeName] = useState("");
  const [timeRequired, setTimeRequired] = useState("");
  const [ingredients,setIngredients] = useState(
    [{IngredientName:'',Quantity:''},]
);
  const [method, setMethod] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var dict = {};
    for(var i=0;i<ingredients.length;i++){
      dict[ingredients[i].IngredientName] = ingredients[i].Quantity;
    }
    for(var key in dict) {
      console.log(key + " : " + dict[key]);
   }
    const recipe = {recipeName:recipeName, timeRequired:timeRequired,method:method,ingredients:dict};
    console.log('recipe =>'+JSON.stringify(recipe));    

    RecipeService.createRecipe(recipe);
    alert(`Recipe Added Successfully!`)
    navigate("/recipes");  
    
  }
  const cancel=()=>{
    alert(`Discarding Changes`)
    navigate("/recipes");  
  }

  const handleChangeInput =(index,event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  }
  const handleAddField = () => {
    setIngredients([...ingredients,{IngredientName:'',Quantity:''}]);
  }
  const handleRemoveField = (index) => {
    const values = [...ingredients];
    values.splice(index,1);
    setIngredients(values);
  }
  
  return (

    <div>
    <div className='container'>
        <div className='row'>
          <Card border="info">
          <h3 className="text-center" style={{fontWeight:"bolder",margin:'10px',color:'black'}}> Add your Recipe!</h3>
          <Divider spacing={10} style={{color:'lightseagreen'}}></Divider>
              <Card.Body>
                    <form>
                        <div className='form-group'>
                            <label style={{fontWeight:'bolder'}}>Recipe Name: </label>
                            <input placeholder="Enter Recipe Name" name="recipeName" className='form-control'
                            value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label style={{fontWeight:'bolder'}}>Time Required: </label>
                            <input placeholder="Enter Time Required" name="timeRequired" className='form-control'
                            value={timeRequired} onChange={(e) => setTimeRequired(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                        <label style={{fontWeight:'bolder'}}>Ingredients:</label>
                            { ingredients.map((ingredients,index)=>
                            <div key = {index}>
        
                               <TextField style={{marginRight:'5px',marginBottom:'5px',marginTop:'5px'}}
                                name="IngredientName"
                                label='Ingredient Name'
                                value={ingredients.IngredientName} 
                                onChange={event => handleChangeInput(index,event)}/>
                             
               
                               <TextField style={{marginRight:'5px',marginBottom:'5px',marginTop:'5px'}}
                                name="Quantity"
                                label='Quantity'
                                value={ingredients.Quantity}
                                onChange={event => handleChangeInput(index,event)} />
                               
                               <IconButton onClick={() => handleAddField()}>
                                <AddIcon></AddIcon>
                               </IconButton>

                               <IconButton onClick={() => handleRemoveField(index)}>
                               <RemoveIcon></RemoveIcon>
                               </IconButton>
                             
                                </div>
                            )}
                        </div>
                        
                        <div className='form-group'>
                            <label style={{fontWeight:'bolder'}}>Method: </label>
                            <textarea placeholder="Enter your recipe and steps" name="method" className='form-control'
                            value={method} onChange={(e) => setMethod(e.target.value)}/>
                        </div>
                        <button className='btn btn-success' onClick={handleSubmit}>Save</button> 
                        <button className='btn btn-danger' onClick = {cancel.bind()} style={{marginLeft:"10px"}}>Cancel</button>
                
                    </form>
                    </Card.Body>

            
            </Card>
        </div>
        
    </div>

    </div>
  )
}