import React, {Component} from "react";
import { Card,Button } from "react-bootstrap";
import RecipeService from '../services/RecipeService';
import { Link } from "react-router-dom";


class ListRecipesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            recipes: []
        }
       
        
    }
    componentDidMount(){
        RecipeService.getRecipes().then((res) => {

            this.setState({recipes:res.data});
        });
    }
    deleteRecipeMethod(id){

        RecipeService.deleteRecipe(id).then(res =>{
            alert("Recipe Deleted!");
            this.setState({recipes: this.state.recipes.filter(recipee => recipee.recipeeId != id)})});
    }
     
    render() {
        return (
        <div className="grid">
            {this.state.recipes.map( recipe =>
                <div>

                <Card style={{ width: '30rem', alignItems:'center'}} key={recipe.recipeeId} className="box">
                <Card.Img variant="top" src={require('./pasta.jpeg')} />
                <Card.Body>
                    <Card.Title><h3 className='text-center'>{recipe.recipeName}</h3></Card.Title>
                
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="primary" as={Link} to={`/view-recipe/${recipe.recipeeId}`}>View Recipe</Button>
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="secondary" as={Link} to={`/update-recipe/${recipe.recipeeId}`}>Update Recipe</Button>
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="danger" onClick={()=> this.deleteRecipeMethod(recipe.recipeeId)} >Delete Recipe</Button>
                </Card.Body>
                </Card>
        
                </div>
            )}
        </div>

    )
        }
    
};

export default ListRecipesComponent;

