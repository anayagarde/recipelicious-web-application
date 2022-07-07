package com.example.demo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.JoinColumn;

@Entity
@Table(name="recipes")
public class Recipee implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long recipeeId;
	
	@Column(name="recipe_name")
	private String recipeName;
	
	@Column(name="time_required")
	private String timeRequired;
	
	@ElementCollection
    @MapKeyColumn(name="IngredientName")
    @Column(name="Quantity")
    @CollectionTable(name="ingredients_table", joinColumns= @JoinColumn(name="recipe_id"))
	@JsonProperty("ingredients")
    Map<String, String> ingredients;// = new HashMap<String, String>();
	
	
	@Column(name="method")
	private String method;
	
	public Recipee() {
		
	}
	

	public Recipee(Long recipeeId, String recipeName, String timeRequired,Map<String,String> ingredients,
			String method) {
		super();
		this.recipeeId = recipeeId;
		this.recipeName = recipeName;
		this.timeRequired = timeRequired;
		this.ingredients = ingredients;
		this.method = method;
	}


	public Long getRecipeeId() {
		return recipeeId;
	}

	public void setRecipeeId(Long recipeeId) {
		this.recipeeId = recipeeId;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public String getTimeRequired() {
		return timeRequired;
	}

	public void setTimeRequired(String timeRequired) {
		this.timeRequired = timeRequired;
	}

	public Map<String,String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(Map<String,String> ingredients) {
		this.ingredients = ingredients;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	@Override
	public String toString() {
		return "Recipee [recipeeId=" + recipeeId + ", recipeName=" + recipeName + ", timeRequired=" + timeRequired
				+ ", ingredients=" + ingredients + ", method=" + method + "]";
	}
	

	
	
	
	
}
