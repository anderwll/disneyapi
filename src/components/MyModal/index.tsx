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
                    overflow: 'hidden',
                    display: 'flex' 
                }}
            >
                <Box sx={{
                    width: '55%',
                    height: '100%',
                    bgcolor: '#707070',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h5" color="initial">Nome <Typography variant="body1" color="initial">{ character && character.name }</Typography> </Typography>
                    <Typography variant="body1" color="initial">  </Typography>
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


