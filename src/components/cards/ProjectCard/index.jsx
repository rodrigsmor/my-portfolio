import { BsGlobe } from "react-icons/bs";
import { VscGithub } from 'react-icons/vsc'
import { SiFigma } from 'react-icons/si'
import { technologies_icons } from "../../../utils/technologiesIcons";
import { ProjectCardContainer } from "./styled"

export const ProjectCard = ({ values }) => {
  const { title, description, web_link, github_link, figma_link, technologies, image, alt_image } = values;

  return (
    <ProjectCardContainer>
      <header>
        <figure>
          <img src={image} alt={alt_image}/>
        </figure>
        <h5>{ title }</h5>
        <p>{ description }</p>
      </header>
      <footer>
        <div className="links-project">
          { web_link && <a href={web_link} title='web link'> <BsGlobe size={15} /> </a> }
          { github_link && <a href={github_link} title='github link'> <VscGithub size={15} /> </a>}
          { figma_link && <a href={figma_link} title='figma link'> <SiFigma size={15} /> </a> }
        </div>
        <figure className="project-languages">
          {
            technologies.slice(0, 4).map((value, index) => (
              <div key={index}>
                <img src={technologies_icons[value.toLowerCase()]} alt={value} />
              </div>
            ))
          }
        </figure>
      </footer>
    </ProjectCardContainer>
  )
}