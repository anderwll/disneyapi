import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/characters');
    }

    return (
        <Grid container spacing={2} display='flex' justifyContent='center' alignItems='center' height='100vh' textAlign='center'>
            <Grid item >
                <Typography variant="h2" color="initial">Bem vindo ao mundo</Typography>
                <Typography variant="h1" color="initial">DISNEY</Typography>
                <Button variant="text" color="inherit" onClick={handleNavigate} endIcon={<ArrowRightAlt />}>
                  Acessar
                </Button>
            </Grid>
        </Grid>
    );
};

export default Home;