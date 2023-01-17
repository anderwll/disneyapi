import React from 'react';
import { DivButtons, DivLogo, SectionNav } from './styled';
import Button from '@mui/material/Button';
import { Menu, Notifications } from '@mui/icons-material';
import { TextField } from '@mui/material'

interface MyNavBarPros {
    value?: string,
    handleChange?: (e: any) => void,
    isScroll: boolean
}


const MyNavBar: React.FC<MyNavBarPros>  = ({ value, handleChange, isScroll }) => {

    const handleClick = () => {
        alert('In production... 🥱⏳');
    }

    return (
        <SectionNav>
            <DivLogo>
                <img src="./images/logo2.png" alt="Disney logo" />
            </DivLogo>

            <DivButtons isScroll={isScroll}>
               <TextField
                 label="Search..."
                 value={value}
                 onChange={handleChange}
                 color='primary'
                 sx={{mr: 2, mt: 1.6}}
                 size='small'
               />
               <Button variant="text" color="inherit" onClick={handleClick}>
                 <Notifications sx={{fontSize: '1.7rem'}}/>
               </Button>
               <Button variant="text" color="inherit" onClick={handleClick}>
                    <Menu sx={{fontSize: '1.7rem'}}/>
               </Button>
            </DivButtons>
        </SectionNav>
    );
};

export default MyNavBar;