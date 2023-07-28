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

export const AboutContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ContainerContent = styled.div`
  display: flex;
  transform: translate(40%, 60%);
  width: 55%;
  height: 40%;
`;

export const PhotoProfile = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 40%;
`;

export const Image = styled.img`
  border-radius: 0.625rem;
  height: 100%;
  animation: ${fadeInOutAnimation} 1s ease-in-out;
`;

export const AboutTextH1 = styled.h1`
  margin: 0.5rem;
  font-family: "Poppins";
  font-size: 3rem;
  line-height: 1.6;
  color: #141414;
`;

export const AboutTextH3 = styled.h3`
  font-family: "Poppins";
  width: 18.75rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #141414;
  font-size: 1.125rem;
`;

export const AboutText = styled.p`
  height: 100%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: justify;
  width: 31.25rem;
  align-items: center;
  color: #141414;
  animation: ${fadeInOutAnimation} 1s ease-in-out;
`;
