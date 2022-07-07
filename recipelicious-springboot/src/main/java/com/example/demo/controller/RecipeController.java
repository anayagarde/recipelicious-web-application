package com.example.demo.controller;

import java.util.List;
import java.util.Map;

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

import com.example.demo.model.Recipee;
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
	
	@PostMapping("/recipes")
	public Recipee createRecipe(@RequestBody Recipee recipe) {
		//Map<String, String> myObjects = recipe.getIngredients();
		
		return reciperepository.save(recipe);
		
	}

	  
}
