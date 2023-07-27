import { useEffect, useState } from "react";
import { Header } from "../../components/header/index.jsx";
import {
  ProjectsPageBackground,
  ProjectsContainer,
  ProjectsCards,
  ProjectsTitle,
  ProjectsCreatedAt,
  ProjectsLink,
} from "./styles.js";

export const Projects = (props) => {
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

  return (
    <ProjectsPageBackground>
      <Header />
      <ProjectsContainer>
        {repositories.map((repo) => (
          <ProjectsCards key={repo.id}>
            <ProjectsTitle>{repo.name}</ProjectsTitle>
            <ProjectsCreatedAt>{repo.created_at}</ProjectsCreatedAt>
            <ProjectsLink href={repo.html_url}>
              {props.cardsLink}
            </ProjectsLink>
          </ProjectsCards>
        ))}
      </ProjectsContainer>
    </ProjectsPageBackground>
  );
};
