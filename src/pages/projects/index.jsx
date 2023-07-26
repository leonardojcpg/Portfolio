import { Header } from "../../components/header/index.jsx";
import { ProjectsPageBackground } from "./styles.js";

export const Projects = () => {

    const projectCards = [
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },

    ]

  return (
    <ProjectsPageBackground>
      <Header />
      <ProjectsContainer>
            {/* logica do map, passando pelo array de projetos e gerando um card para cada projeto */}
      </ProjectsContainer>
    </ProjectsPageBackground>
  );
};
