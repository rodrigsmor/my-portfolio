import { useLocation } from "react-router-dom";
import { HomeSectionContent } from "../HomeSectionContent";
import { SeeMoreButton } from "../../Buttons/SeeMoreButton";
import { SectionContentTemplate } from "../../common/SectionContentTemplate";
import { GreetingsText, HomeSectionContainer, SectionTitle, Subtitle } from "./styled";

export const HomeSection = () => {
  const { pathname } = useLocation();

  return (
    <HomeSectionContainer id='home' className={`${pathname !== '/' && 'not-active'}`} onClick={e => setIsActive(!isActive) }>
      <GreetingsText>
        <p>Boas vindas ao meu <strong> portfólio</strong>!</p>
      </GreetingsText>
      <SectionTitle>
        <h1>Rodrigo Moreira</h1>
        <Subtitle>Desenvolvedor Full Stack & UI designer</Subtitle>
      </SectionTitle>
      <SeeMoreButton type_modal='home' />
      <SectionContentTemplate sectionName='home'>
        <HomeSectionContent />
      </SectionContentTemplate>
    </HomeSectionContainer>
  );
}