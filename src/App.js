import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Home from './components/Home';
import Diets from './components/Diets';
import Exercises from './components/Exercises';
import Water from './components/Water';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div class="app-wrap">
            {/* 인트로 화면과 들어가서의 화면을 조건부 렌더링 */}
            <BrowserRouter>
                {isLoading ? (
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/diet" element={<Diets />} />
                            <Route path="/exercise" element={<Exercises />} />
                            <Route path="/water" element={<Water />} />
                        </Routes>
                        <Footer />
                    </>
                ) : <Start setIsLoading={setIsLoading}/>}
                {/* <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/diet" element={<Diets />} />
                    <Route path="/exercise" element={<Exercises />} />
                    <Route path="/water" element={<Water />} />
                </Routes>
                <Footer /> */}
            </BrowserRouter>
        </div>
    )
}

export default App