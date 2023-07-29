import { AboutImg } from "../../components/AboutImg";
import { AboutTexts } from "../../components/AboutTexts";
import { Header } from "../../components/Header";
import { AboutContainer } from "./styles.js";

export const About = () => {
  return (
    <AboutContainer>
      <Header />
      <AboutImg />
      <AboutTexts
        title="About."
        subtitle="I'm a Full Stack Developer based in cloudy São Paulo, Brazil."
        firstParagraph="A lover for technology and in a constant quest for new challenges. My journey in web development began with HTML, CSS, and JavaScript, and since then, I have been honing my skills and knowledge in various technologies"
        secondParagraph="Since 2022, I've enjoyed turning complex problems into simple solutions."
      />
    </AboutContainer>
  );
};
