import { Header } from "../../components/header/index.jsx";
import { ContactBackground, ContactContainer, ContactTitle, ContactSubtitle } from "./styles.js";

export const Contact = (props) => {
  return (
    <ContactBackground>
      <Header />
      <ContactContainer>
        <ContactTitle>{props.title}</ContactTitle>
        <ContactSubtitle>{props.subtitle}</ContactSubtitle>
        <div className="contactIcons"></div>
        <div className="buttonContactMe"></div>
      </ContactContainer>
    </ContactBackground>
  );
};
