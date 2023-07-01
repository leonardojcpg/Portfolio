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
    margin-left: 27%;
    margin-top: 12%;
`

export const HomeSubTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    color: ${props => props.theme.buttonColor};
    margin-left: 37%;
    margin-top: 1rem;
`