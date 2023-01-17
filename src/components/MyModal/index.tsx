import React, { useEffect } from 'react';
import { Box, Modal, Typography } from '@mui/material';

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
                    width: 700,
                    height: 500,
                    bgcolor: '#fff',
                    boxShadow: 20,
                    borderRadius: 2,
                    overflow: 'auto',
                    display: 'flex' 
                }}
            >
                <Box sx={{
                    width: '55%',
                    height: '100%',
                    bgcolor: 'rgb(112,112,112)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto', 
                    p: 2
                }}>
                    <Typography variant="h5" color="initial">Name:<Typography variant="body1" color="#333" sx={{ml: 4, mb: 2}}>{ character && character.name }</Typography></Typography>
                    <Typography variant="h5" color="initial">Films:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.films }</Typography></Typography>
                    <Typography variant="h5" color="initial">Short films:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.shortFilms }</Typography></Typography>
                    <Typography variant="h5" color="initial">Tv shows:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.tvShows }</Typography></Typography>
                    <Typography variant="h5" color="initial">Video games:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.videoGames }</Typography></Typography>
                    <Typography variant="h5" color="initial">Park attractions:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.parkAttractions }</Typography></Typography>
                    <Typography variant="h5" color="initial">Allies:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.allies }</Typography></Typography>
                    <Typography variant="h5" color="initial">Enemies:  <Typography variant="body1" color="#333" sx={{ml: 4,  mb: 2}}>{ character && character.enemies  }</Typography></Typography>
                </Box>

                <Box sx={{
                    width: '45%',
                    height: '100%',
                    backgroundImage: `url(${character && character.imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}/>
            </Box>
        </Modal>
    );
};

export default MyModal;


