import React from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import AddIcon from '@mui/icons-material/Add';

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
                    />
                    
                    <Carousel.Caption style={{backgroundColor:'lightgrey'}}>
                    <h1 style={{color:'black',fontWeight:'bolder',fontFamily:'cursive'}}>Indian Delicacies</h1>
                    <p style={{color:'black',fontWeight:'bold'}}>Delicious Indian Food from different regions of India!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./dish2.jpeg')}
                    height="50%"
                    width="80%"
                    />

                    <Carousel.Caption style={{backgroundColor:'lightgrey'}}>
                    <h1 style={{color:'black',fontWeight:'bolder',fontFamily:'cursive'}}>Cuisines</h1>
                    <p style={{color:'black',fontWeight:'bold'}}>There are hundreds of different cuisines around the world!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./dish3.jpeg')}
                    height="50%"
                    width="80%"
                    />

                    <Carousel.Caption style={{backgroundColor:'lightgrey'}}>
                    <h1 style={{color:'black',fontWeight:'bolder',fontFamily:'cursive'}}>Desserts</h1>
                    <p style={{color:'black',fontWeight:'bold'}}>
                        Desserts are the delicacies enjoyed by all!
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <Card style={{marginTop:'20px' }}>
                    <button className="btn btn-primary" style={{fontSize:'20px',fontFamily:'monospace'}} onClick={()=> navigate("/add-recipe")}><AddIcon></AddIcon> Add Recipe</button>
            </Card>
            </div>
        );

}

