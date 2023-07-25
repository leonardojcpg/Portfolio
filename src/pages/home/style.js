import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
`

export const HomeTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 5rem;
    color: ${props => props.theme.fontColor};
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 50%;

`

export const HomeSubTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    color: ${props => props.theme.buttonColor};
    margin-left: 35%;
    position: absolute;
    left: 15%;
    transform: translate(-50%, 50%);
    bottom: 40%;


`