import { ContainerContent, AboutTextH1, AboutTextH3, AboutParagraph } from "./styles";

export const AboutTexts = ({ title, subtitle, firstParagraph, secondParagraph }) => {
  return (
    <ContainerContent>
      <AboutTextH1>{title}</AboutTextH1>
      <AboutTextH3>{subtitle}</AboutTextH3>
      <AboutParagraph>{firstParagraph}</AboutParagraph>
      <AboutParagraph>{secondParagraph}</AboutParagraph>
    </ContainerContent>
  );
};
