import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Grid, Typography, Box, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import MyCard from '../../components/MyCard';
import MyModal from '../../components/MyModal';
import MyNavBar from '../../components/MyNavBar';

const Characters = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState(-1);
    const [max, setMax] = useState(false);
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.characters.data);
    
    const handleShowModal = (id: number) => {
        setModalOpen(true);
        setId(id)
    };

    const handleMax = () => {
        setMax(!max);
    }

    useEffect(() => {
        dispatch(getCharacters());   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <Box sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                
                <MyNavBar />
                
                <Grid container spacing={5} sx={{padding: '0 10rem'}} overflow='hidden' height={max ? '100%' : '36.5rem'}>
                    
                    <Grid item xs={12}>
                        <Typography variant="h2" color="initial">Personagens</Typography>
                    </Grid>

                    {data && data.map((item: any, index: number) => (
                        <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                            <MyCard imgUrl={item.imageUrl} onClickCard={() => handleShowModal(item._id)}/>
                        </Grid>
                    ))}
            
                </Grid>

                <Button variant="text" color="inherit" endIcon={max ? <Remove /> : <Add />} sx={{p: 1.5}} onClick={handleMax}>
                  {max ? 'Mostrar menos' : 'Mostrar mais'} 
                </Button>
            </Box>

            <MyModal isOpen={modalOpen}
                handleClose={() => setModalOpen(false)}
                idCharacter={id}
             />
        </>
    );
};

export default Characters;