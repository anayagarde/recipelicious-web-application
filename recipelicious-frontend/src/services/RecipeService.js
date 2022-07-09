import axios from 'axios'

const RECIPE_API_BASE_URL = "http://localhost:8080/api/v1/recipes";
class RecipeService{

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL);
    }

    async createRecipe(recipe){
        const config = { headers: { "Content-Type": "application/json" } };
       const data= await axios.post(RECIPE_API_BASE_URL,recipe,config)
            .then(response => {
               return response.data
            })
            .then(data => {
               console.log(data)
            })
            .catch(error => {
               console.log(error.response.data.error)
            })

            return data;
    }
    getRecipeById(recipeId){
      return axios.get(RECIPE_API_BASE_URL+'/'+recipeId);
    }

    updateRecipe(recipe,recipeId){
      return axios.put(RECIPE_API_BASE_URL+'/'+recipeId,recipe);
    }

   
}

export default new RecipeService()