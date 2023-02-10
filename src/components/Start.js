import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const change = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
const StartDiv = styled.div`
    animation: ${change} 2.8s;
    display: flex;
    flex-direction: column;
    background-color: #7078a0;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin: 20px;
    }
    h1 {
        font-size: 24px;
        margin: 10px;
        color: #fff;
    }
`

const Start = () => {

    const navigate = useNavigate();

    const timeout = () => {
        setTimeout(() => {
            navigate('/home');
        }, 3000);
    };

    useEffect(() => {
        timeout();
        return () => {
            // clear 해줌
            clearTimeout(timeout);
        };
    });

    return (
        <StartDiv>
            <img src='image/wave-white.png' className='wave' alt='wave' />
            <h1>갓생일지</h1>
        </StartDiv>
    )
}

export default Start