import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Grid, Typography, Box, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import MyCard from '../../components/MyCard';
import MyModal from '../../components/MyModal';
import MyNavBar from '../../components/MyNavBar';
import ButtonFloating from '../../components/ButtonFloating';

const Characters = () => {
    const dispatch = useAppDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [scroll, setScroll] = useState('none');
    const [search, setSearch] = useState('');
    const [id, setId] = useState(-1);
    const [max, setMax] = useState(false);

    const { data } = useAppSelector((state) => state.characters.data);
    const [ listSearch, setListSearch] = useState([]);

    useEffect(() => {
        dispatch(getCharacters());   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleShowModal = (id: number) => {
        setModalOpen(true);
        setId(id)
    };

    const handleMax = () => {
        setMax(!max);
    }

    let ultimaPosicao:number = 0;
    const rolar = () => {
        let atualPosicao = window.scrollY;
        if(atualPosicao > ultimaPosicao) {
            setScroll('flex');
        } else {
            setScroll('none');
        }
        ultimaPosicao = atualPosicao;
    }

    const searching = (value: string) => {
        setSearch(value);

        const exist = data.filter((obj: any) => obj.name.toLowerCase().includes(value.toLowerCase()));

        if(exist) {
            setListSearch(exist);
        }
    }
     
    document.addEventListener('scroll', rolar);

    return (
        <>
            <Box id='' sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                
                <MyNavBar value={search} handleChange={(e) => searching(e.target.value)} isScroll={scroll === 'none' ? false : true} />
                
                <Grid container spacing={5} sx={{padding: '0 10rem'}} overflow='hidden' height={max ? '100%' : '35.7rem'}>
                    
                    <Grid item xs={12}>
                        <Typography variant="h3" color="initial">{search ? `Results: ${search}...` : 'Characters'}</Typography>
                    </Grid>

                    {search !== '' && (
                        listSearch.map((item: any, index: number) => (
                            <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                                <MyCard imgUrl={item.imageUrl} onClickCard={() => handleShowModal(item._id)}/>
                            </Grid>
                        ))
                    )}

                    {search === '' && data && data.map((item: any, index: number) => (
                        <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                            <MyCard imgUrl={item.imageUrl} onClickCard={() => handleShowModal(item._id)}/>
                        </Grid>
                    ))}
            
                </Grid>

                {search === '' && (
                    <Button variant="text" color="inherit" endIcon={max ? <Remove /> : <Add />} sx={{p: 1.5}} onClick={handleMax}>
                        {max ? 'Show less' : 'Show more'} 
                    </Button>
                )}
            </Box>

            <MyModal isOpen={modalOpen}
                handleClose={() => setModalOpen(false)}
                idCharacter={id}
             />

             <ButtonFloating isDisplay={scroll} />
        </>
    );
};

export default Characters;