import React, { Component, useEffect } from 'react';
import RecipeService from '../services/RecipeService';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ViewRecipeComponent() {
    const {id} = useParams();
    const [recipes,setRecipes] = useState("");
    const [IngredientsList,setIngredientsList]=useState("");

    useEffect(()=>{
        RecipeService.getRecipeById(id).then( res =>{      
            setRecipes(res.data);
            let str = JSON.stringify(res.data.ingredients);
            setIngredientsList(str.replaceAll('"','').replace("{","").replace("}","").replaceAll(",",", ").replaceAll(":"," : "))
           
       })
        },[]);

        return (  
           
            
            <div>
       

                <Card style={{ width: '100%'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:'center',fontSize:'50px',fontWeight:'bold',fontFamily:'fantasy'}}>{recipes.recipeName}</Card.Title>
                        <Card.Img variant="bottom" src={require('./food.jpeg')} />
                        <Card.Text style={{marginTop:'20px', fontSize:'25px',fontFamily:'monospace'}}>
                            <Table striped bordered hover variant='light'>
                                <tbody>
                                <tr>
                                    <th>Time Required</th>
                                    <td>{recipes.timeRequired}</td>
                                </tr>
                                <tr>
                                    <th>Ingredients</th>
                                    <td>
                                    {IngredientsList}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Recipe</th>
                                    <td>{recipes.method}</td>
                                </tr>
                                </tbody>
                            </Table>
                        
                        </Card.Text>
                    </Card.Body>

                    </Card>

                    <Button style={{fontSize:'20px',marginRight:"10px",marginTop:'20px'}} variant="primary" as={Link} to={`/recipes`}><ArrowBackIcon></ArrowBackIcon> Back to View </Button>
                
            </div>
        );
    }

