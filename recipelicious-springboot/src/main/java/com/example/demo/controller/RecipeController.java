package com.example.demo.controller;

import java.util.List;

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
import com.example.demo.model.ingredients;
import com.example.demo.repository.IngredientsRepository;
import com.example.demo.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class RecipeController {

	@Autowired
	private RecipeRepository reciperepository;
	
	@Autowired 
	private IngredientsRepository ingredientsrepository;	
	
	//get all recipees
	@GetMapping("/recipes")
	public List<Recipee> getAllRecipees(){
		return reciperepository.findAll();
	}
	
//	//create recipe
//	@PostMapping("/recipes")
//	public ResponseEntity<String> createRecipe(@RequestBody Recipee recipe) {
//		
//		reciperepository.save(recipe);
//		for(ingredients s: recipe.getIngredients() ){
//			ingredients i = new ingredients();
//			i.setIngredientName(s.getIngredientName());
//			i.setQuantity(s.getQuantity());
//			i.setQuantityType(s.getQuantityType());
//			i.setRecipe(recipe);
//			ingredientsrepository.save(i);
//		}
//		return new ResponseEntity<String>("Recipe Saved!",HttpStatus.CREATED);
//	}
	
	@PostMapping("/recipes")
	public Recipee createRecipe(@RequestBody Recipee recipe) {
		return reciperepository.save(recipe);
		
	}

	  
}
