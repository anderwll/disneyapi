import React from 'react';
import { Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material'
import { DivButtonFloating } from './styled';

interface ButtonFloatingProps {
    isDisplay: string
}

const ButtonFloating: React.FC<ButtonFloatingProps> = ({ isDisplay }) => {
    return (
        <DivButtonFloating display={isDisplay}>
            <Fab color="inherit" aria-label="add" href='#'>
                <ArrowUpward />
            </Fab>
        </DivButtonFloating>   
    );
};

export default ButtonFloating;