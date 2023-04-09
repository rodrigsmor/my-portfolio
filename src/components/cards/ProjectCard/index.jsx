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
        <img src={image} alt={alt_image}/>
        <h5>{ title }</h5>
        <p>{ description }</p>
      </header>
      <footer>
        <div>
          { web_link && <a href={web_link}> <BsGlobe size={15} /> </a> }
          { github_link && <a href={github_link}> <VscGithub size={15} /> </a>}
          { figma_link && <a href={figma_link}> <SiFigma size={15} /> </a> }
        </div>
        <ul>
          {
            technologies.slice(0, 2).map((value, index) => (
              <li key={index}>
                <img src={technologies_icons[value.toLowerCase()]} alt={value} />
              </li>
            ))
          }
        </ul>
      </footer>
    </ProjectCardContainer>
  )
}