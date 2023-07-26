import { Header } from "../../components/header/index.jsx";
import {
  ProjectsPageBackground,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsCards,
  ProjectsCreatedAt
} from "./styles.js";
import api from "../../services/api.js";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <ProjectsPageBackground>
      <Header />
      <ProjectsContainer>
        {repositories.map((repo) => {
          return (
            <ProjectsCards>
              <ProjectsTitle>{repo.name}</ProjectsTitle>
              <ProjectsCreatedAt>{repo.created_at}</ProjectsCreatedAt>
            </ProjectsCards>
          );
        })}
      </ProjectsContainer>
    </ProjectsPageBackground>
  );
};
