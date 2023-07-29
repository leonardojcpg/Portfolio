import styled, { keyframes } from "styled-components";

const fadeInOutAnimation = keyframes`
    0% {
    opacity: 0;
  }
    50% {
    opacity: 0.5;
  }
    100% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const HomeTitle = styled.div`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 5rem;
  color: ${(props) => props.theme.fontColor};
  transform: translate(0%, 40vh);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInOutAnimation} 1s ease-in-out;
`;

export const HomeSubTitle = styled.span`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 2.5rem;
  color: ${(props) => props.theme.buttonColor};
  transform: translate(0%, 40vh);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInOutAnimation} 1s ease-in-out;
`;
