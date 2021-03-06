
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RecipeService from '../services/RecipeService';
import { useNavigate } from 'react-router';
import { Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useParams} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {Divider} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

export default function UpdateRecipeComponent() {

  const [recipeName, setRecipeName] = useState("");
  const [timeRequired, setTimeRequired] = useState("");
  const [ingredients,setIngredients] = useState(
    [{IngredientName:'',Quantity:''},]);
  const [method, setMethod] = useState("");
  const params = useParams();
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

    RecipeService.updateRecipe(recipe,params.id);
    alert(`Recipe Updated Successfully!`)
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
   useEffect(() => {
    RecipeService.getRecipeById(params.id).then((res) =>{
        let recipee = res.data;
        setRecipeName(recipee.recipeName);
        setTimeRequired(recipee.timeRequired);
        setMethod(recipee.method);
        const list=[]
        Object.entries(recipee.ingredients).forEach(([key, value]) => {
        setIngredients([...ingredients,{IngredientName:'',Quantity:''}]);
        list.push({'IngredientName':key,'Quantity':value})
         });
        setIngredients(list);
        console.log(list);
    
        
       
    })
    
    },[]);
  
  return (

    <div>
    <div className='container'>
        <div className='row'>
            <Card border="dark">
                <h3 className="text-center" style={{fontWeight:"bolder",margin:'10px',color:'black'}}> Update your Recipe!</h3>
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
                        <button className='btn btn-success' onClick={handleSubmit}><DoneIcon></DoneIcon> Save</button> 
                        <button className='btn btn-danger' onClick = {cancel.bind()} style={{marginLeft:"10px"}}><CancelIcon></CancelIcon> Cancel</button>
                
                    </form>
                    </Card.Body>

                </Card>
        </div>
    </div>

    </div>
  )
}