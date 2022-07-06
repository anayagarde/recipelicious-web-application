package com.example.demo.model;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	
	@OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<ingredients> ingredients;
	
	@Column(name="method")
	private String method;
	
	public Recipee() {
		
	}
	public Recipee(String recipeName, String timeRequired, String method) {
		super();
		this.recipeName = recipeName;
		this.timeRequired = timeRequired;
		this.method = method;
	}


	public Long getRecipeeId() {
		return recipeeId;
	}

	public void setRecipeeId(Long recipeeId) {
		this.recipeeId = recipeeId;
	}

	public String getTimeRequired() {
		return timeRequired;
	}

	public void setTimeRequired(String timeRequired) {
		this.timeRequired = timeRequired;
	}



	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}
	

	public String getRecipeName() {
		return recipeName;
	}


	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}


	@Override
	public String toString() {
		return "Recipee [recipeeId=" + recipeeId + ", recipeName=" + recipeName + ", timeRequired=" + timeRequired
				+ ", ingredients=" + ingredients + ", method=" + method + "]";
	}


	
	
	
	
}
