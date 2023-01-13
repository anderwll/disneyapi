import React from 'react';
import { Typography, Grid } from '@mui/material'

const Home: React.FC = () => {
    return (
        <Grid container textAlign='center'>
            <Grid item >
                <Typography variant="h2" color="initial">Bem vindo ao mundo</Typography>
                <Typography variant="h1" color="initial">DISNEY</Typography>
            </Grid>
        </Grid>
    );
};

export default Home;