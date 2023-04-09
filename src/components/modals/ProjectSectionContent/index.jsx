import FilterBy from "../../Forms/FilterBy";
import { FilterProjectsTabBar, HeaderSectionContent, ProjectSectionContentContainer } from "./styled";

const ProjectSectionContent = () => {
  return (
    <ProjectSectionContentContainer>
      <HeaderSectionContent>
        <h3>Projetos</h3>
        <FilterProjectsTabBar>
          <FilterBy />
        </FilterProjectsTabBar>
      </HeaderSectionContent>
    </ProjectSectionContentContainer>
  )
}

export default ProjectSectionContent;