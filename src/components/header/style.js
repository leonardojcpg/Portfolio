import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
`;

export const NavLinks = styled.ul`
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.fontColor};
  margin-top: 1.5rem;
  margin-left: 15%;
  list-style: none;
  display: flex;
  gap: 5rem;
  align-items: center;
`;

export const NavButtons = styled.a`
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${props => props.theme.buttonColor};
  }
`;

export const NavButtonContact = styled.button`
    margin-left: 90%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.buttonColor};
    height: 2.75rem;
    padding: 0.7rem;
    border: none;
    border-radius: 0.5rem;

    &:hover {
    background-color: ${props => props.theme.buttonHover};
    color: ${props => props.theme.fontColor};
    transition: background-color 0.2s ease;
  }

    
`
