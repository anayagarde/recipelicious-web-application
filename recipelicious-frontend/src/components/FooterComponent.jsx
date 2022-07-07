import React, { Component } from 'react';
import { Container } from '@mui/material';
import {Grid} from '@mui/material';
import {Box} from '@mui/material';
import {Link} from '@mui/material';
export default function FooterComponent(){

    return <div className="flex-wrapper">
    <footer className='footer'>
        <Box bgcolor="black">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={30}>
                        <Box className="text-center" style={{color:"white"}}>Copyright @Recipelicious</Box>
                        <Box className="text-center" style={{color:"white",marginBottom:"10px"}}>
                            <Link underline='none' href="/" color="inherit">Home Page</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    </div>
}