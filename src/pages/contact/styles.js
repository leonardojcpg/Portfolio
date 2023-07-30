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

export const ContactBackground = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
`;

export const ContactContainer = styled.div`
  animation: ${fadeInOutAnimation} 1s ease-in-out;
  height: 75%;
  width: 80%;
  transform: translate(20vh, 20vh);
`;

export const ContactTitle = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.6;
  color: #141414;
`;

export const ContactSubtitle = styled.h3`
  font-family: "Poppins";
  font-weight: 300;
  width: 18.75rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #141414;
`;

export const ContactIcons = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 1rem;
`;

export const ContactIconLogo = styled.img`
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContactLogoLink = styled.a`
  font-family: "Poppins";
  font-weight: 300;
  color: #141414;
  text-decoration: none;
  margin-top: 0.2rem;

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.buttonColor};
  }
`;
