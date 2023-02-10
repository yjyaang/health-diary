import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import { setOneVh } from './styles/setOneVh';
import GlobalStyle from './styles/GlobalStyle';
import Main from './components/Main';

const App = () => {


    useEffect(() => {
        setOneVh();
        window.addEventListener('resize', setOneVh);
    }, []);

    return (
        <div className="app-wrap">
            <BrowserRouter>
            <GlobalStyle />
                        <Routes>
                            <Route path="/" element={<Start />} />
                            <Route path="/*" element={<Main />} />
                        </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App