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


export const ContainerContent = styled.div`
  animation: ${fadeInOutAnimation} 1s ease-in-out;
  width: 55%;
  margin-top: 12rem;
`;

export const AboutTextH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.6;
  color: #141414;
`;

export const AboutTextH3 = styled.h3`
  width: 18.75rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #141414;
  font-size: 1.125rem;
`;

export const AboutParagraph = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: justify;
  width: 31.25rem;
  align-items: center;
  color: #141414;
`;
