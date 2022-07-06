import axios from 'axios'

const RECIPE_API_BASE_URL = "http://localhost:8080/api/v1/recipes";
class RecipeService{

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL);
    }

    createRecipe(recipe){
        return axios.post(RECIPE_API_BASE_URL,recipe);
    }
}

export default new RecipeService()