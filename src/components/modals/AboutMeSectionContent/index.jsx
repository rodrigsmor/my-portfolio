import { AboutMeSectionContainer, ArticleContentWrapper, ContentSectionWrappers, KnowledgesCard } from "./styled"
import AboutMeImage from '../../../assets/images/images/AboutMe-Image.png'
import { Button } from '../../Buttons/Button';
import { knowledges } from "../../../Mock/knowledges";

export const AboutMeSectionContent = () => {
  return (
    <AboutMeSectionContainer>
      <ContentSectionWrappers>
        <header>
          <h3>Sobre mim</h3>
        </header>
        <article>
          <figure>
            <img src={AboutMeImage} alt='A imagem possui cores pretas e brancas, e eu, Rodrigo Moreira, estou olhando para a câmera sorridente, enquanto meu punho está fechado e apoiado em minha bochecha.' />
          </figure>
          <ArticleContentWrapper>
            <h4>Perfil profissional</h4>
            <p>
              Sou um desenvolvedor de software Full Stack apaixonado por tecnologia e inovação, que não abre mão de expandir cada vez mais meus conhecimentos. Adoro construir interfaces de usuário responsivas e atrativas, desempenhando desde o processo de design até o desenvolvimento da aplicação. Sempre busco a melhoria profissional e pessoal, almejando tornar-se cada vez mais capacitado e a melhor versão de mim. Trabalhar comigo é trabalhar com uma pessoa descontraída, mas empenhada em entregar o melhor resultado possível.
            </p>
            <Button type="link" props={{
              href: 'https://docs.google.com/document/d/1RbSp81C3ZVFqUQQ1wwS4sFgy8zOT2vOwu_Yv1iub-G8/edit?usp=sharing'
            }}>
              Baixar CV
            </Button>
            <aside>
              <p>Sobre mim</p>
              <span></span>
            </aside>
          </ArticleContentWrapper>
        </article>
      </ContentSectionWrappers>
      <ContentSectionWrappers>
        <header>
          <h3>Conhecimentos</h3>
        </header>
        <ul>
          {
            knowledges.map(({ level, name, image }, index) => (
              <KnowledgesCard key={index} aria-labelledby={`knowledge_Title-${index}`}>
                <figure>
                  <img src={image} alt={`${name} logo`} />
                </figure>
                <div>
                  <p id={`knowledge_Title-${index}`} className="knowledge_Title"> { name } </p>
                  <p className="knowledge_Level">{ level }</p>
                </div>
              </KnowledgesCard>
            ))
          }
        </ul>
      </ContentSectionWrappers>
    </AboutMeSectionContainer>
  )
}