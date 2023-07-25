import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerContent = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 50%;
    width: 75%;
    height: 60%;
    border: 1px solid black;
`