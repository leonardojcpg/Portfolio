import { Header } from "../../components/header/index.jsx";
import {
  ContactBackground,
  ContactContainer,
  ContactTitle,
  ContactSubtitle,
  ContactIcons,
  ContactIconLogo,
  ContactLogoLink
} from "./styles.js";
import linkedinLogo from "./assets/linkedinLogo.png";
import intagramLogo from "./assets/instagramLogo.png";

export const Contact = (props) => {
  const linkedinUrl = "https://www.linkedin.com/in/leonardo-gomes-a429a5198/";
  const instagramUrl = "https://www.instagram.com/leonardogomes/";

  return (
    <ContactBackground>
      <Header />
      <ContactContainer>
        <ContactTitle>{props.title}</ContactTitle>
        <ContactSubtitle>{props.subtitle}</ContactSubtitle>
        <ContactIcons>
          <ContactIconLogo src={linkedinLogo} alt="" height={30} width={30} />
          <ContactLogoLink href={linkedinUrl} target="_blank">
            Linkedin
          </ContactLogoLink>
        </ContactIcons>
        <ContactIcons>
          <ContactIconLogo src={intagramLogo} alt="" height={30} width={30} />
          <ContactLogoLink href={instagramUrl} target="_blank">
            Instgram
          </ContactLogoLink>
        </ContactIcons>
        <div className="buttonContactMe"></div>
      </ContactContainer>
    </ContactBackground>
  );
};
