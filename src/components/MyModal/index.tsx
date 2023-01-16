import React, { useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Modal, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacterId } from '../../store/character/characterSlice';

interface MyModalProps {
    isOpen: boolean,
    handleClose: () => void,
    idCharacter: number
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, handleClose, idCharacter }) => {
    const dispatch = useAppDispatch();
    const character = useAppSelector((state) => state.character.data);

    useEffect(() => {
        if(idCharacter !== -1) {
            dispatch(getCharacterId(idCharacter))

        }
    }, [idCharacter, dispatch]);

    useEffect(() => {
        console.log({character});
        
    }, [character])

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    height: 400,
                    bgcolor: '#fff',
                    boxShadow: 20,
                    borderRadius: 2,
                    overflow: 'hidden', 
                }}
            >
                <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 380 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="h5">
                               Nome: { character.name } 
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {character.films && (character.films)}
                                {character.shortFilms && character.shortFilms}
                                {character.tvShows && character.tvShows}
                                {character.videoGames && character.videoGames}
                                {character.parkAttractions && character.parkAttractions}
                                {character.allies && character.allies}
                                {character.enemies && character.enemies}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Button variant="contained" color="error">
                              teste
                            </Button>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 250, height: 400, p: 1 }}
                        image={character.imageUrl}
                        alt={character.name}
                    />
                </Card>
            </Box>
        </Modal>
    );
};

export default MyModal;