import { Header } from "../../components/header/index.jsx";
import { HomeContainer } from "./style.js";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <div className="home-body">
        <span>Leonardo Gomes</span>
      </div>
    </HomeContainer>
  );
};
