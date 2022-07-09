package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.model.Recipee;
import com.example.demo.model.RecipeeIngredientProjecton;
import com.example.demo.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class RecipeController {

	@Autowired
	private RecipeRepository reciperepository;
	
	//get all recipees
	@GetMapping("/recipes")
	public List<Recipee> getAllRecipees(){
		return reciperepository.findAll();
	}
//	@GetMapping("/recipes")
//	public ResponseEntity<List<RecipeeIngredientProjecton>> getRecipees() {
//
//    	List<RecipeeIngredientProjecton> types = reciperepository.findRecipeIngredient();
//        return ResponseEntity.ok(types);
//    }
//	
	
	@PostMapping("/recipes")
	public Recipee createRecipe(@RequestBody Recipee recipe) {
		//Map<String, String> myObjects = recipe.getIngredients();
		
		return reciperepository.save(recipe);
		
	}
	
	@GetMapping("/recipes/{id}")
	public ResponseEntity<Recipee> getRecipeById(@PathVariable Long id) {
		Recipee recipe = reciperepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Recipe does not exist: "+id));
		
		return ResponseEntity.ok(recipe);
	}
	
	// update Recipe 
	@PutMapping("/recipes/{id}")
	public ResponseEntity<Recipee> updateRecipe(@PathVariable Long id, @RequestBody Recipee recipeDetails){
		
		Recipee recipe = reciperepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Recipe does not exist: "+id));
		recipe.setRecipeName(recipeDetails.getRecipeName());
		recipe.setTimeRequired(recipeDetails.getTimeRequired());
		recipe.setIngredients(recipeDetails.getIngredients());
		recipe.setMethod(recipeDetails.getMethod());
		
		Recipee updatedRecipe = reciperepository.save(recipe);
		return ResponseEntity.ok(updatedRecipe);
		
	}

	  
}
