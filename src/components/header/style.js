import styled from 'styled-components'


export const HeaderContainer = styled.div`
    display: flex;

`

export const NavContainer = styled.div`
align-items: center;
justify-content: center;
`

export const NavLinks = styled.ul`
    font-family: 'Poppins', sans-serif;
    margin-top: 1.5rem;
    margin-left: 20rem;
    list-style: none;
    display: flex;
    gap: 6rem;
    align-items: center;

`

export const NavButtons = styled.a`
    cursor: pointer;
    &:hover{
        color: greenyellow;
    }
`
