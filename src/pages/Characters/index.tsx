import React, { useEffect } from 'react';
import { getCharacters } from '../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Grid, Typography } from '@mui/material';
import MyCard from '../../components/MyCard';


const Characters = () => {
    const dispatch = useAppDispatch();
    const listCharacters = useAppSelector((state) => state.characters.data); 

    useEffect(() => {
        dispatch(getCharacters());

        console.log(listCharacters)
    }, [])

    return (
        <Grid container spacing={4} padding={2} textAlign='center'>
            <Grid item xs={12}>
                <Typography variant="h2" color="initial">Personagens</Typography>
            </Grid>

            {listCharacters && listCharacters.map((item: any, index: number) => (
                <Grid item sm={4} md={3} lg={2} key={index}>
                    <MyCard name={item.name} imgUrl={item.imageUrl} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Characters;