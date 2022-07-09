import React, { Component } from 'react';
import { Container, Divider } from '@mui/material';
import {Grid} from '@mui/material';
import {Box} from '@mui/material';
import {Link} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
export default function FooterComponent(){

    return <div className="flex-wrapper">
    <footer className='footer'>
        <Box bgcolor="black">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={30}>
                        <Box className="text-center" style={{color:"white",fontFamily:'monospace',fontSize:'20px',marginBottom:"20px",}}>Copyright @Recipelicious</Box>
                        <Divider style={{color:'white'}}></Divider>
                        <Box className="text-center" style={{color:"white",marginBottom:"20px",marginTop:'10px'}}>
                            <Link underline='none' href="/" color="inherit"><HomeRoundedIcon></HomeRoundedIcon>  Home Page</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    </div>
}