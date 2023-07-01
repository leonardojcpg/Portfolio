import {
  HeaderContainer,
  NavLinks,
  NavButtons,
  NavButtonContact
} from "./style.js";

export const Header = () => {
  return (
    <HeaderContainer>
        <NavLinks>
          <NavButtons href="/">Home</NavButtons>
          <NavButtons href="/techs">Techs</NavButtons>
          <NavButtons href="/projects">Projects</NavButtons>
          <NavButtonContact>Contact</NavButtonContact>
        </NavLinks>
    </HeaderContainer>
  );
};
