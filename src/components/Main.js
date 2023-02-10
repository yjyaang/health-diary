import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Diets from './Diets';
import Exercises from './Exercises';
import Water from './Water';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    return (
        <div className="app-wrap">
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/diet" element={<Diets />} />
                <Route path="/exercise" element={<Exercises />} />
                <Route path="/water" element={<Water />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main