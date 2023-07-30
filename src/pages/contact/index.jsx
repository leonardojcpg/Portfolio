import { Header } from "../../components/Header/index.jsx";
import {
  ContactBackground,
  ContactContainer,
  ContactTitle,
  ContactSubtitle,
  ContactIcons,
  ContactIconLogo,
  ContactLogoLink,
} from "./styles.js";
import linkedinLogo from "./assets/linkedinLogo.png";
import intagramLogo from "./assets/instagramLogo.png";
import Button from "@mui/material/Button";

export const Contact = () => {
  const linkedinUrl = "https://www.linkedin.com/in/leonardo-gomes-a429a5198/";
  const instagramUrl = "https://www.instagram.com/leonardogomes/";

  return (
    <ContactBackground>
      <Header />
      <ContactContainer>
        <ContactTitle>Contact.</ContactTitle>
        <ContactSubtitle>
          Get in touch with me via social media or email.
        </ContactSubtitle>
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
        <Button
          href={`mailto:leonardojpinheirogomes@gmail.com`}
          sx={{
            width: "18.75rem",
            color: "#141414",
            backgroundColor: "#dfdeda",
            "&:hover": {
              backgroundColor: "#5d740c",
              borderColor: "#5d740c",
              color: "#dfdeda",
            },
          }}
        >
          Email me
        </Button>
      </ContactContainer>
    </ContactBackground>
  );
};
