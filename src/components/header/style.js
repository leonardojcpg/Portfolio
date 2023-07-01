import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
`;

export const NavLinks = styled.ul`
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.fontColor};
  margin-top: 1.5rem;
  margin-left: 12.5%;
  list-style: none;
  display: flex;
  gap: 2.5rem;
  align-items: center;

`;

export const NavButtons = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.buttonColor}; 
  }
`;


