import styled, { keyframes } from "styled-components";

/* 반응형 웹 지정 사이즈
모바일: 420px;
패드: 820px;
pc max-width: 900px;
*/

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const WaterBottle = styled.div`
    width: 300px;
    height: 300px;
    margin: 20px;
    background-color: #71caed;
    .white {
        width: 300px;
        height: 30%;
        background-color: #fff;
    }
    img {
        width: 300px;
        height: 300px;
    }
`

export const WaterBtn = styled.button`
    border-style: none;
    border-radius: 20px;
    background-color: #7078a0;
    color: #fff;
    width: 120px;
    height: 40px;
`