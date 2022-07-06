import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom'

export default function MyRecipesComponents(){
    const navigate = useNavigate();
   
        return (
            <div>
                <div className = "row">
                    <button className="btn btn-primary" onClick={()=> navigate("/add-recipe")}>Add Recipe</button>
                </div>
            </div>
        );

}

