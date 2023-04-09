import { useState } from "react";
import FilterBy from "../../Forms/FilterBy";
import { FilterProjectsTabBar, FiltersSelectedGroup, HeaderSectionContent, ProjectSectionContentContainer, ProjectsListing, TabsBar, TabsBarContainer } from "./styled";
import { Checkbox } from "../../Forms/Checkbox";
import { projects } from "../../../Mock/projects";
import { ProjectCard } from "../../cards/ProjectCard";
import { useMemo } from "react";

const ProjectSectionContent = () => {
  const [ currentTab, setCurrentTab ] = useState('all');
  const [ selectedFilters, setSelectedFilters ] = useState([])

  const tabs = [
    {
      name: 'mobile',
      label: 'Mobile'
    }, {
      name: 'web',
      label: 'Web',
    }, {
      name: 'all',
      label: 'Todos',
    }, {
      name: 'back-end',
      label: 'Back-end'
    }, {
      name: 'front-end',
      label: 'Front-end'
    }
  ]

  const projectsList = useMemo(() => {
    let projectsMatched = projects;
    if(currentTab !== 'all') {
      projectsMatched = projects.filter(({ categories }) => categories.includes(currentTab))
    }

    if(selectedFilters.length > 0) {
      projectsMatched = projectsMatched.filter(({ technologies }) => technologies.some(value => selectedFilters.includes(value)))
    }

    return projectsMatched;
  }, [ selectedFilters, currentTab ])

  return (
    <ProjectSectionContentContainer>
      <HeaderSectionContent>
        <h3>Projetos</h3>
        <FilterProjectsTabBar>
          <TabsBarContainer>
            {
              tabs.map(({ name, label }, index) => {
                let isCurrent = name === currentTab;
                return (
                  <li key={index}>
                    <TabsBar className={`${isCurrent && 'current'}`} onClick={e => setCurrentTab(name)} aria-current={isCurrent}>
                      { label }
                    </TabsBar>
                  </li>
                )
              })
            }
          </TabsBarContainer>
          <FilterBy saveSelectedFilters={(values) => setSelectedFilters(values)} selectedFiltersSaved={selectedFilters}/>
          <FiltersSelectedGroup>
            {
              selectedFilters.length > 0 && selectedFilters.map((value, index) => {
                return (
                  <li key={index}>
                    <Checkbox isChecked label={value} onClick={e => setSelectedFilters(selectedFilters.filter(id => value !== id))}/>
                  </li>
                )
              })
            }
          </FiltersSelectedGroup>
        </FilterProjectsTabBar>
      </HeaderSectionContent>
      <ProjectsListing className={`${projectsList.length <= 2 && 'fews-results'}`}>
        {
          projectsList.map((value, index) => {
            return (
              <li key={index}>
                <ProjectCard values={value} />
              </li>
            )
          })
        }
      </ProjectsListing>
    </ProjectSectionContentContainer>
  )
}

export default ProjectSectionContent;