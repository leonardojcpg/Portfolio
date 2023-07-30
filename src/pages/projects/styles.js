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
  animation: ${fadeInOutAnimation} 1s ease-in-out;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
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
  background-color: #d3d3d3;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9.375rem;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectsTitle = styled.h3`
  font-size: 1.125rem;
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 0.625rem;
`;

export const ProjectsCreatedAt = styled.p`
  margin-bottom: 0.625rem;
`;

export const ProjectsLink = styled.a`
  margin-bottom: 0.625rem;
  text-decoration: none;
`;

export const ProjectLanguage = styled.h5`
  color: ${(props) => props.theme.fontColor};

`;
