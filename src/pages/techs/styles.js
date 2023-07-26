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

export const TechsBackground = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
`;

export const TechsContainer = styled.div`
  height: 40rem;
  width: 75%;
  display: flex;
  margin-left: 12.5%;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  animation: ${fadeInOutAnimation} 1s ease-in-out;
`;

export const TechCard = styled.div`
  height: 7rem;
  width: 7rem;
  margin: 2rem;
`;

export const TechImg = styled.img`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
