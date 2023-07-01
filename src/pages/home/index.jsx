import { Header } from "../../components/header/index.jsx";
import { 
  HomeContainer,
  HomeTitle,
  HomeSubTitle
} from "./style.js";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeTitle>Leonardo Gomes</HomeTitle>
      <HomeSubTitle>Full Stack Developer</HomeSubTitle>
    </HomeContainer>
  );
};
