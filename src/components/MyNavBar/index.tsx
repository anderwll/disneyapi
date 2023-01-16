import React from 'react';
import { DivButtons, DivLogo, SectionNav } from './styled';
import Button from '@mui/material/Button';
import { Menu, Notifications } from '@mui/icons-material';
import { TextField } from '@mui/material'

interface MyNavBarPros {
    value?: string,
    handleChange?: (e: any) => void
}


const MyNavBar: React.FC<MyNavBarPros>  = ({ value, handleChange }) => {
    return (
        <SectionNav>
            <DivLogo>
                <img src="./images/logo2.png" alt="Disney logo" style={{width: '15rem'}} />
            </DivLogo>

            <DivButtons>
               <TextField
                 label="Pesquisar..."
                 value={value}
                 onChange={handleChange}
                 color='primary'
                 sx={{mr: 2, mt: 1.6, width: 400}}
                 size='small'
               />
               <Button variant="text" color="inherit">
                 <Notifications sx={{fontSize: '1.7rem'}}/>
               </Button>
               <Button variant="text" color="inherit">
                    <Menu sx={{fontSize: '1.7rem'}}/>
               </Button>
            </DivButtons>
        </SectionNav>
    );
};

export default MyNavBar;