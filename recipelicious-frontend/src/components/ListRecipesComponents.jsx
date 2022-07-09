import React, {Component} from "react";
import { Card,Button } from "react-bootstrap";
import RecipeService from '../services/RecipeService';
import { Link } from "react-router-dom";
import PageviewIcon from '@mui/icons-material/Pageview';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

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
                <div style={{alignItems:'center'}}>

                <Card style={{alignItems:'center',margin:'20px'}} key={recipe.recipeeId} className="box">
                <Card.Img variant="top" src={require('./pasta.jpeg')} />
                <Card.Body>
                    <Card.Title><p className='text-center' style={{fontweight:'bolder',fontSize:'40px',fontFamily:'cursive'}}>{recipe.recipeName}</p></Card.Title>
                
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="primary" as={Link} to={`/view-recipe/${recipe.recipeeId}`}><PageviewIcon></PageviewIcon> View  </Button>
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="secondary" as={Link} to={`/update-recipe/${recipe.recipeeId}`}><UpdateIcon></UpdateIcon> Update</Button>
                    <Button style={{marginRight:"10px",marginTop:'20px'}} variant="danger" onClick={()=> this.deleteRecipeMethod(recipe.recipeeId)} ><DeleteIcon></DeleteIcon> Delete</Button>
                </Card.Body>
                </Card>
        
                </div>
            )}
        </div>

    )
        }
    
};

export default ListRecipesComponent;

