import React, {Component} from "react";
import { Card,Button } from "react-bootstrap";
import RecipeService from '../services/RecipeService';

const images = {
    url:"{require('./dishes.jpeg')}",
    url:"{require('./pasta.jpeg')}"
}
const renderCard = (recipe,index) => {
    return (
        <div>

        <Card style={{ width: '30rem' }} key={index} className="box">
        <Card.Img variant="top" src={require('./pasta.jpeg')} />
        <Card.Body>
            <Card.Title><h3 className='text-center'>{recipe.recipeName}</h3></Card.Title>
            <Card.Text>
           <h6>Time Required: {recipe.timeRequired}</h6>
           <h6>Ingredients: {JSON.stringify(recipe.ingredients)}</h6>
           <h6>Recipe: {recipe.method}</h6>
            </Card.Text>
            <Button variant="primary">View Recipe</Button>
        </Card.Body>
        </Card>

        </div>
    );
}
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
    
    render() {
        return (
        <div className="grid">
            {this.state.recipes.map(renderCard)}
        </div>

    )
        }
    
};

export default ListRecipesComponent;

