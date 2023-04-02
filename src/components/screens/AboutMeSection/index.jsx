import { useLocation } from "react-router-dom";
import { AboutMeIllustration, AboutMeSectionContainer } from "./styled";
import { SeeMoreButton } from "../../Buttons/SeeMoreButton";
import Illustration from '../../../assets/images/images/aboutme-home.png'

export const AboutMeSection = () => {
  const { pathname } = useLocation();

  const infoList = [
    {
      id: 0,
      value: 'Perfil profissional'
    }, {
      id: 1,
      value: 'Habilidades & conhecimentos'
    }, {
      id: 2,
      value: 'Experiências profissionais'
    }, {
      id: 3,
      value: 'Currículo profissional'
    },
  ]

  return (
    <AboutMeSectionContainer id="about-me" className={`${pathname !== '/about-me' && 'not-active'}`}>
      <AboutMeIllustration src={Illustration} alt='illustration of a person wearing an virtual reality glasses.' />
      <div className='section-main_summary'>
        <hgroup>
          <h1>SOBRE MIM</h1>
        </hgroup>
        <ul>
          {
            infoList.map(({ id, value }) => <li key={id}>{ value }</li>)
          }
        </ul>
      </div>
      <article className="professional_summary">
        <p>
          Um desenvolvedor de software Full Stack em busca de potencializar ao máximo o seu potencial através de inovação e criatividade.
        </p>
      </article>
      <SeeMoreButton type_modal='about-me' />
    </AboutMeSectionContainer>
  );
}