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

export const ProjectsPageBackground = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ProjectsContainer = styled.div`
  animation: ${fadeInOutAnimation} 1s ease-in-out;
  margin: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
`;

export const ProjectsCards = styled.div`
  margin: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9.375rem;
  flex-wrap: wrap;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectsTitle = styled.h3`
  font-size: 1.125rem;
  color: ${props => props.theme.fontColor};
  font-family: "Poppins";
  margin-bottom: 0.625rem;
`;

export const ProjectsCreatedAt = styled.p`
  font-family: "Poppins";
  margin-bottom: 0.625rem;
  `;


export const ProjectsLink = styled.a`
    font-family: "Poppins";
  margin-bottom: 0.625rem;
`

export const ProjectLanguage = styled.h5`
    font-family: "Poppins";

`