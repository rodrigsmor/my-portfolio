import { useState } from "react";
import FilterBy from "../../Forms/FilterBy";
import { FilterProjectsTabBar, FiltersSelectedGroup, HeaderSectionContent, ProjectSectionContentContainer, TabsBar, TabsBarContainer } from "./styled";
import { Checkbox } from "../../Forms/Checkbox";

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
    </ProjectSectionContentContainer>
  )
}

export default ProjectSectionContent;