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
            <div>
              <p>
                Sou um desenvolvedor de software Full Stack formado em informática pelo Instituto Federal de São Paulo. Sendo apaixonado por tecnologia e inovação, estou em constante busca pela minha capacitação, o que me permite se adaptar rapidamente a novos desafios e expandir meu conhecimento acerca do mundo da programação.
              </p>
              <p>
                Minha experiência contempla uma ampla gama de tecnologias, como JavaScript, TypeScript, Java, Spring Boot, React.js, Next.js, Node.js, TailwindCSS e dentre outras. Obtive experiências que abrangem desde o desenvolvimento de aplicações web responsivas e atrativas até a criação de APIs REST, incluindo algumas experiências com design de Interfaces de Usuário utilizando o Figma. Tenho expertise em metodologias ágeis como Kanban e Scrum, orquestração de containers com Docker e Kubernetes, Design Patterns, TDD, Gitflow e versionamento de código.
              </p>
              <p>
                Estou comprometido em inovar e contribuir para soluções impactantes, utilizando de minha criatividade e proatividade para garantir o sucesso dos projetos a qual me envolvo. Com habilidades sólidas e um desejo incessante de crescimento, viso sempre aplicar minha paixão pela tecnologia e entregar resultados de alta qualidade.
              </p>
            </div>
            <Button type="link" props={{
              href: 'https://docs.google.com/document/d/1gHDYk6O-Y9DcGPp9p7E2ljeNSPgzabAt6TGvqRb0m8g/edit?usp=sharing'
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