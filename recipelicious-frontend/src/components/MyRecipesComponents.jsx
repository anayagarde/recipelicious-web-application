import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function MyRecipesComponents(){
    const navigate = useNavigate();
   
        return (
            <div>        
           <div>
                <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./dish1.jpeg')}
                    height="50%"
                    width="80%"
                    alt="First slide"
                    
                    />
                    
                    <Carousel.Caption>
                    <h1 style={{color:'white',fontWeight:'bolder'}}>Indian Delicacies</h1>
                    <p style={{color:'white',fontWeight:'bold'}}>Delicious Indian Food from different regions of India!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./dish2.jpeg')}
                    height="50%"
                    width="80%"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 style={{color:'white',fontWeight:'bolder'}}>Cuisines</h1>
                    <p style={{color:'white',fontWeight:'bold'}}>There are more than hundreds of different cuisines around the world!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./dish3.jpeg')}
                    height="50%"
                    width="80%"
                    alt="Desserts"
                    />

                    <Carousel.Caption>
                    <h1 style={{color:'white',fontWeight:'bolder'}}>Desserts</h1>
                    <p style={{color:'white',fontWeight:'bold'}}>
                        Desserts are the delicacies enjoyed by all!
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <Card style={{ width: '100%', marginTop:'20px' }}>
                    <button className="btn btn-primary" onClick={()=> navigate("/add-recipe")}>Add Recipe</button>
            </Card>
            </div>
        );

}

