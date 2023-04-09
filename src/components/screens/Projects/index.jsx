import { useLocation } from "react-router-dom";
import { DivImage, ImagePreviewWrapper, ProjectsContainer } from "./styled"

import FirstImage from '../../../assets/images/images/project-first.jpg'
import SecondImage from '../../../assets/images/images/projects-second.jpg'
import Thirdmage from '../../../assets/images/images/project-third.jpg'
import { SeeMoreButton } from "../../Buttons/SeeMoreButton";
import { SectionContentTemplate } from "../../common/SectionContentTemplate";
import ProjectSectionContent from "../../modals/ProjectSectionContent";

export const Projects = () => {
  const { pathname } = useLocation();

  return (
    <ProjectsContainer id='projects' className={`${pathname !== '/projects' && 'not-active'}`}>
      <div className='content-wrapper_projects'>
        <h1>Projetos</h1>
        <h2>Uma pequena demonstração do meu trabalho</h2>
        <p>Encontre aqui os meus principais projetos pessoais</p>
        <ImagePreviewWrapper className='preview-images'>
          <DivImage imageLink={FirstImage}></DivImage>
          <DivImage imageLink={SecondImage}></DivImage>
          <DivImage imageLink={Thirdmage}></DivImage>
        </ImagePreviewWrapper>
      </div>
      <SeeMoreButton type_modal='projects' />
      <SectionContentTemplate sectionName='projects'>
        <ProjectSectionContent />
      </SectionContentTemplate>
    </ProjectsContainer>
  )
}