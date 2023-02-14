import React from 'react'
import { Container, WaterBottle, WaterBtn } from '../styles/style'

const Water = () => {
    return (
        <div className='wrap'>
            <Container>
                <div>
                    물을 마시고 여러분의 물통을 채워 주세요!
                </div>
                <WaterBottle>
                    <div className='white'>
                        <img src='image/plastic-bottle.png' alt='water-bottle' />
                    </div>
                </WaterBottle>
                <WaterBtn>물 채우기</WaterBtn>
            </Container>
        </div>
    )
}

export default Water