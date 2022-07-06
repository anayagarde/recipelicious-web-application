package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ingredients")
public class ingredients implements Serializable{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="quantity_type")
	private String quantityType;
	
	@Column(name="ingredient_name")
	private String ingredientName;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipeeId",nullable = false)
	@JsonIgnore
    private Recipee recipe;
	
	public ingredients() {
		
	}
	
	

	public ingredients(int quantity, String quantityType, String ingredientName, Recipee recipe) {
		super();
		this.quantity = quantity;
		this.quantityType = quantityType;
		this.ingredientName = ingredientName;
		this.recipe = recipe;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getQuantityType() {
		return quantityType;
	}

	public void setQuantityType(String quantityType) {
		this.quantityType = quantityType;
	}

	public String getIngredientName() {
		return ingredientName;
	}

	public void setIngredientName(String ingredientName) {
		this.ingredientName = ingredientName;
	}

	public Recipee getRecipe() {
		return recipe;
	}

	public void setRecipe(Recipee recipe) {
		this.recipe = recipe;
	}

	@Override
	public String toString() {
		return "ingredients [id=" + id + ", quantity=" + quantity + ", quantityType=" + quantityType
				+ ", ingredientName=" + ingredientName + ", recipe=" + recipe + "]";
	}


	

}
