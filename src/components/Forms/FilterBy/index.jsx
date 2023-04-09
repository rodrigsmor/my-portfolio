import { useState } from "react";
import { FilterButton, FilterByContainer, FilterForm } from "./styled";
import { RiFilter3Fill } from "react-icons/ri";
import { categories } from "../../../Mock/categories";
import { Checkbox } from "../Checkbox";
import { Button } from "../../Buttons/Button";

const FilterBy = () => {
  const [isToShowForm, setIsToShowForm] = useState(false);
  const [ selectedFilters, setSelectedFilters ] = useState([]);

  const selectValue = (value) => {
    if(selectedFilters.includes(value))
      setSelectedFilters(selectedFilters.filter((id) => id !== value))
    else
      setSelectedFilters([...selectedFilters, value])
  }

  return (
    <FilterByContainer aria-labelledby="filterby_span">
      <FilterButton aria-haspopup={"true"} aria-expanded="filterby_form" onClick={e => setIsToShowForm(!isToShowForm)}>
        <RiFilter3Fill size={24} />
        <span id='filterby_span'>
          Filtrar por
        </span>
      </FilterButton>
      <FilterForm id="filterby_form" className={`${isToShowForm && 'open'}`}>
        <fieldset className="filter">
          <legend className="filter">Categorias</legend>
          <ul>
            {
              categories.map((label, index) => {
                let isSelected = selectedFilters.includes(label)
                return (
                  <li key={index}>
                    <Checkbox label={label} isChecked={isSelected} onClick={(value) => selectValue(value)} />
                  </li>
                )
              })
            }
          </ul>
        </fieldset>
        <div className="filterby_button-wrapper">
          <Button
            theme={'transparent'}
            props={{
              type: 'button',
              onClick: () => setIsToShowForm(false)
            }}
          >
            cancelar
          </Button>
          <Button
            theme={'gradient'}
            props={{
              type: 'button',
              onClick: () => setIsToShowForm(false)
            }}
          >
            salvar
          </Button>
        </div>
      </FilterForm>
    </FilterByContainer>
  );
}

export default FilterBy;