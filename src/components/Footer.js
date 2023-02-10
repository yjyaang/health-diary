import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FooterDiv = styled.div`
height: 60px;
display: flex;
justify-content: space-evenly;
align-items: center;
border-top: 1px solid rgba(200, 200, 200, 0.4);
.category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #000;
    img {
        margin: 5px;
    }
}
`

const Footer = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const categoryArr = [
        {name: '홈', src: 'image/home.png', selsrc: 'image/home-selected.png', link: '/home'},
        {name: '식단기록', src: 'image/meal.png', selsrc: 'image/meal-selected.png', link: '/diet'},
        {name: '운동기록', src: 'image/exercise.png', selsrc: 'image/exercise-selected.png', link: '/exercise'},
        {name: '물마시기', src: 'image/water.png', selsrc: 'image/water-selected.png', link: '/water'}
    ]
    const selectCategory = (index) => {
        setCurrentTab(index);
    }
    return (
        <FooterDiv>
            {categoryArr.map((el, idx) => {
                return(
                    <Link to={el.link} className="category" key={idx} onClick={() => selectCategory(idx)}>
                        {currentTab === idx ? <img src={el.selsrc} alt={el.name} /> : <img src={el.src} alt={el.name} />}
                        <div>{el.name}</div>
                    </Link>
                )
            })}
        </FooterDiv>
    )
}

export default Footer