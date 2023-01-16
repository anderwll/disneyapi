import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface MyCardProps {
    imgUrl: string,
    name: string,
    onClickCard: (e: any) => void
}

const MyCard: React.FC<MyCardProps> = ({ imgUrl, name, onClickCard }) => {
    return (
        <Card sx={{ maxWidth: 400, width: 250 }} onClick={onClickCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={imgUrl}
                    alt={name}
                />
                <CardContent sx={{height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom variant="h6">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MyCard;