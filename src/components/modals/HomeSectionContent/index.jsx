import { IconContext } from 'react-icons'
import WhoIAmIllustration from '../../../assets/images/images/whoiam-home.png'
import { HomeSectionContentContainer, InterestingsSection, PresentationSection, WhoIAmSection } from "./styled"
import { CgCodeSlash } from 'react-icons/cg'
import { RiBook3Line, RiPaletteLine } from 'react-icons/ri'
import { TbBooks } from 'react-icons/tb'
import { MdOutlineDesignServices, MdOutlineDraw, MdOutlineCreate, MdOutlineMovie } from 'react-icons/md'
import { useTheme } from 'styled-components'

export const HomeSectionContent = () => {
  const theme = useTheme();

  const interestings = [
    {
      Icon: <CgCodeSlash />,
      title: 'Tecnologia',
      description: 'Adoro estudar e conhecer mais sobre T.I. e programação.'
    }, {
      Icon: <MdOutlineDesignServices />,
      title: 'Design',
      description: 'Gosto de projetar interfaces de usuário utilizando o Figma. '
    }, {
      Icon: <RiBook3Line />,
      title: 'Conhecimento',
      description: 'Adquirir novos conhecimentos e habilidades é algo que amo fazer.'
    }, {
      Icon: <RiPaletteLine />,
      title: 'Arte',
      description: 'Admirar e consumir diferentes tipos de artes é algo muito presente em minha vida.'
    }, {
      Icon: <MdOutlineDraw />,
      title: 'Desenhar',
      description: 'No meu tempo livre, gosto de praticar desenho e melhorar meus traços.'
    }, {
      Icon: <MdOutlineMovie />,
      title: 'Filmes e séries',
      description: 'Gosto de assistir filmes e séries, principalmente se for de terror, suspense ou sci-fi.'
    }, {
      Icon: <MdOutlineCreate />,
      title: 'Escrita',
      description: 'Gosto muito de escrever, desde ficção e fantasia até textos técnicos.'
    }, {
      Icon: <TbBooks />,
      title: 'Livros',
      description: 'Ler livros de diversos temas e gêneros é um dos meus maiores prazeres da vida.'
    }, 
  ]

  return (
    <HomeSectionContentContainer>
      <PresentationSection>
        <h3>Um pouco mais sobre mim</h3>
        <p>Um pouco mais sobre minhas características pessoais, como meu perfil pessoal, meus hobbies, personalidade, habilidades, conhecimentos, interesses, objetivos, trabalhos e o que esperar de mim enquanto pessoa.</p>
        <span></span>
      </PresentationSection>
      <WhoIAmSection>
        <figure>
          <img src={WhoIAmIllustration} alt='illustration of a boy reading a book sitting in the shade of a tree' />
        </figure>
        <div>
          <h3>Quem sou?</h3>
          <h4>Um desenvolvedor de software e UI designer</h4>
          <p>Sou um jovem apaixonado por tecnologia e inovação, que enxerga na tecnologia uma importante ferramenta para a construção de um mundo mais justo e acessível para todos. Tenho como objetivo a expansão constante dos meus conhecimentos, assim como o crescimento pessoal e profissional, visando sempre construir as melhores soluções possíveis.</p>
        </div>
      </WhoIAmSection>
      <InterestingsSection>
        <h3>interesses</h3>
        <ul>
          {
            interestings.map(({ Icon, description, title }, index) => (
              <li key={index}>
                <IconContext.Provider value={{ size: '26px', color: theme.colors.typography.main }}>
                  { Icon }
                </IconContext.Provider>
                <div>
                  <strong>{ title }</strong>
                  <p>{ description }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </InterestingsSection>
    </HomeSectionContentContainer>
  )
}