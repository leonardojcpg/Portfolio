import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  
`;

export const NavLinks = styled.ul`
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.fontColor};
  margin-top: 1.5rem;
  list-style: none;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const NavButtons = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.buttonColor}; 
  }
`;


