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



export const PhotoProfile = styled.div`
  animation: ${fadeInOutAnimation} 1s ease-in-out;
  margin-left: 10rem;
  margin-top: 12rem;
`;

export const Image = styled.img`
  border-radius: 0.625rem;
`;