import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import RecipeService from '../services/RecipeService';
import {useNavigate} from 'react-router-dom'


class CreateRecipeComponent {
   constructor(props){
         const state = {
            recipeName: '',
            timeRequired:'',
            method:''
        }
        this.changeRecipeNameHandler = this.changeRecipeNameHandler.bind(this);
        this.changetimeRequiredHandler = this.changetimeRequiredHandler.bind(this);
        this.changeMethodHandler = this.changeMethodHandler.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }
        saveRecipe = (e) =>{
        e.preventDefault();
        let recipe = {recipeName:this.state.recipeName, timeRequired:this.state.timeRequired,
        ingredientName:this.state.ingredientName,quantity:this.state.quantity, method:this.state.method};
        console.log('recipe =>'+JSON.stringify(recipe));    

        RecipeService.createRecipe(recipe);
        
    /*.then(res => {
        useNavigate('/recipes');*/
    }
    
    changeRecipeNameHandler = (event) => {
        this.setState({recipeName: event.target.value});
    }
    changetimeRequiredHandler = (event) => {
        this.setState({timeRequired: event.target.value});
    }
    
    changeMethodHandler = (event) => {
        this.setState({method: event.target.value});
    }
    cancel(){
        this.props.history.push('/recipes')

    }
    render(){
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className="text-center"> Add your Recipe!</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Recipe Name: </label>
                                        <input placeholder="Enter Recipe Name" name="recipeName" className='form-control'
                                        value={this.state.recipeName} onChange={this.changeRecipeNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Time Required: </label>
                                        <input placeholder="Enter Time Required" name="timeRequired" className='form-control'
                                        value={this.state.timeRequired} onChange={this.changetimeRequiredHandler}/>
                                    </div>
                                    

                                    <div className='form-group'>
                                        <label>Method: </label>
                                        <input placeholder="Enter your recipe and steps" name="method" className='form-control'
                                        value={this.state.method} onChange={this.changeMethodHandler}/>
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveRecipe}>Save</button> 
                                    <button className='btn btn-danger' onClick = {this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

