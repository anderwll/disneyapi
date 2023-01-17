import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';
import { Content, Main } from './styled';

const MyPresentation: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/characters');
    }


    return (
        <Main>
            <video src="./images/video1.mp4" autoPlay muted/>
            <Content>
                <Button variant="text" color="primary" onClick={handleNavigate} endIcon={<ArrowRightAlt />} sx={{width: '10rem', height: '5rem'}}>
                    Access
                </Button>
            </Content>
        </Main>
    );
};

export default MyPresentation;