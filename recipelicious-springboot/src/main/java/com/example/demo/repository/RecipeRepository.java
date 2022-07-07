package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recipee;
import com.example.demo.model.RecipeeIngredientProjecton;

@Repository
public interface RecipeRepository extends JpaRepository<Recipee,Long>{

	@Query(value="SELECT recipes.recipee_id,recipes.recipe_name, recipes.method, recipes.time_required,ingredients_table.ingredient_name,ingredients_table.quantity\n"
			+ "FROM recipes\n"
			+ "INNER JOIN ingredients_table ON recipes.recipee_id=ingredients_table.recipe_id;",nativeQuery = true)
	List<RecipeeIngredientProjecton> findRecipeIngredient();

}
