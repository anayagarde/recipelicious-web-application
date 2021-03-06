package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.model.Recipee;
import com.example.demo.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/recipelicious")
public class RecipeController {

	@Autowired
	private RecipeRepository reciperepository;
	
	//get all recipes
	@GetMapping("/recipes")
	public List<Recipee> getAllRecipees(){
		return reciperepository.findAll();
	}

	
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
	
	//delete Recipe
	@DeleteMapping("/recipes/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteRecipe(@PathVariable Long id){
		
		Recipee recipe = reciperepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Recipe does not exist: "+id));
		
		reciperepository.delete(recipe);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}

	  
}
