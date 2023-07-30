import { useEffect, useState } from "react";
import { Header } from "../../components/Header/index.jsx";
import {
  ProjectsPageBackground,
  ProjectsContainer,
  ProjectsCards,
  ProjectsTitle,
  ProjectsCreatedAt,
  ProjectsLink,
  ProjectLanguage,
} from "./styles.js";

export const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/leonardojcpg/repos")
      .then((response) => response.json())
      .then((data) => {
        const sortedRepositories = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRepositories(sortedRepositories);
      })
      .catch((error) => console.log(error));
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  
  return (
    <ProjectsPageBackground>
      <Header />
      <ProjectsContainer>
        {repositories.map((repo) => (
          <ProjectsCards key={repo.id}>
            <ProjectsTitle>{repo.name}</ProjectsTitle>
            <ProjectsCreatedAt>{formatDate(repo.created_at)}</ProjectsCreatedAt>
            <ProjectLanguage>Used tech: {repo.language}</ProjectLanguage>
            <ProjectsLink href={repo.html_url}>Visit repository here!</ProjectsLink>
          </ProjectsCards>
        ))}
      </ProjectsContainer>
    </ProjectsPageBackground>
  );
};
