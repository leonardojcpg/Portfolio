import { ContactButton } from "../ContactButton/index";
import {
  HeaderContainer,
  NavContainer,
  NavLinks,
  NavButtons,
} from "./style.js";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLinks>
          <NavButtons href="/">Home</NavButtons>
          <NavButtons href="/techs">Techs</NavButtons>
          <NavButtons href="/projects">Projects</NavButtons>
          <NavButtons href="/contact">Contact</NavButtons>
          <ContactButton />
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};
