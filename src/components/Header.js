import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(200, 200, 200, 0.4);
`

const Header = () => {
    return (
        <HeaderDiv>갓생일지</HeaderDiv>
    )
}

export default Header