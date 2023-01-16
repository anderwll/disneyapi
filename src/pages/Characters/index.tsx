import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Grid, Typography } from '@mui/material';
import MyCard from '../../components/MyCard';
import MyModal from '../../components/MyModal';


const Characters = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState(-1);
    const dispatch = useAppDispatch();
    const listCharacters = useAppSelector((state) => state.characters.data);
    
    const handleShowModal = (id: number) => {
        setModalOpen(true);
        setId(id)
    };

    useEffect(() => {
        dispatch(getCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Grid container spacing={4} padding={2} textAlign='center'>
                <Grid item xs={12}>
                    <Typography variant="h2" color="initial">Personagens</Typography>
                </Grid>

                {listCharacters && listCharacters.data.map((item: any, index: number) => (
                    <Grid item sm={4} md={3} lg={2} key={index} >
                        <MyCard name={item.name} imgUrl={item.imageUrl} onClickCard={() => handleShowModal(item._id)}/>
                    </Grid>
                ))}
            </Grid>

            <MyModal isOpen={modalOpen}
                handleClose={() => setModalOpen(false)}
                idCharacter={id}
             />
        </>
    );
};

export default Characters;