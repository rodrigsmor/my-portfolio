import { useState } from "react";
import { GreetingsText, HomeSectionContainer, SectionTitle, Subtitle } from "./styled";
import { useLocation } from "react-router-dom";

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
    </HomeSectionContainer>
  );
}