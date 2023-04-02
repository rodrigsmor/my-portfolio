import { IconContext } from "react-icons"
import { useTheme } from "styled-components"
import { ImLinkedin2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom"
import { SiBehance, SiDevdotto } from 'react-icons/si'
import { FooterContainer, ProgressDetailed, ProgressIndicator, SocialMedias } from "./styled"
import { useContext } from "react"
import ModalContext from "../../../context/modalContext"

export const Footer = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useContext(ModalContext);

  const social_medias = [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/psrodrigomoreira/',
      Icon: <ImLinkedin2 />
    }, {
      name: 'github',
      link: 'https://github.com/rodrigsmor',
      Icon: <AiOutlineGithub />
    }, {
      name: 'behance',
      link: 'https://www.behance.net/rodrigsmor',
      Icon: <SiBehance />
    }, {
      name: 'devto',
      link: 'http://dev.to/psrodrigs',
      Icon: <SiDevdotto />
    }, 
  ]

  const pageNumbers = {
    '/': { number: '01', title: 'Início' },
    '/about-me': { number: '02', title: 'Sobre mim'},
    '/projects': { number: '03', title: 'Projetos'},
    '/contacts': { number: '04', title: 'Contatos'}
  }

  return (
    <FooterContainer>
      <ProgressIndicator>
        <strong>{ pageNumbers[pathname].number }</strong>
        <ProgressDetailed>
          <p>{pageNumbers[pathname].title }</p>
          <div className='progress-background'>
            <div style={{ width: showModal.progress }}></div>
          </div>
        </ProgressDetailed>
      </ProgressIndicator>
      <SocialMedias>
        {
          social_medias.map(({ Icon, link, name }) => (
            <li key={name}>
              <Link to={link}>
                <IconContext.Provider value={{
                  color: theme.colors.typography.main,
                }}>
                  { Icon }
                </IconContext.Provider>
              </Link>
            </li>
          ))
        }
      </SocialMedias>
    </FooterContainer>
  )
}