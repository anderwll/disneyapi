import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- PAGES --
import Characters from '../pages/Characters';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/characters' element={<Characters />}/>
                
                <Route path='*' element={<h1>404 - NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;