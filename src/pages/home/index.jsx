import { Header } from "../../components/header/index.jsx";
import { 
  HomeContainer,
  HomeTitle,
  HomeSubTitle
} from "./style.js";

export const Home = (props) => {
  return (
    <HomeContainer>
      <Header />
      <HomeTitle>{props.name}</HomeTitle>
      <HomeSubTitle>{props.subtitle}</HomeSubTitle>
    </HomeContainer>
  );
};
