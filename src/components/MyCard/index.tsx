import React from 'react';

import { Paper, Typography } from '@mui/material';

interface MyCardProps {
    imgUrl: string,
    onClickCard: (e: any) => void
}

const MyCard: React.FC<MyCardProps> = ({ imgUrl, onClickCard }) => {
    return (
        <Paper 
            onClick={onClickCard}
            elevation={2} 
            sx={{width: '100%', 
                height: '25rem', 
                backgroundImage: `url(${imgUrl})`, 
                backgroundPosition: 'center', 
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                p: 2,
                cursor: 'pointer',
                background: ':hover: red'
            }}>
            <Typography variant="h5" color="#333">Know more...</Typography>
        </Paper>
    );
};

export default MyCard;