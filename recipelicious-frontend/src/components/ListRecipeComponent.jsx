import React, { Component } from 'react';
import RecipeService from '../services/RecipeService';

class ListRecipeComponent extends Component {
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
    IngredientList(recipe){
    
        <ul>{recipe.ingredients((sub) =>
            <li>
                {sub.IngredientName}
            </li>
        )}
            </ul>
          
    }
    
    
    render() {
        return (
            <div>
                {this.state.recipes.map((recipe) => console.log(JSON.stringify(recipe.ingredients))
               
                )}
                <h2 className="text-center">Recipe List</h2>
                <div className="row">
               
                
                
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Time Required</th>
                                <th>Ingredients</th>          
                                <th>Method</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.recipes.map(
                                    recipe =>
                                    <tr key = {recipe.recipeeId}>
                                        <td> {recipe.recipeName}</td>
                                        <td> {recipe.timeRequired}</td>
                                        <td>{JSON.stringify(recipe.ingredients)}</td>
                                        
                                        <td>{recipe.method}</td>
                                     

                                    </tr> 
                                )
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        );
    }
}

export default ListRecipeComponent;