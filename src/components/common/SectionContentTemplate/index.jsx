import { useContext } from "react";
import { SectionContentTemplateWrapper } from "./styled";
import ModalContext from "../../../context/modalContext";

export const SectionContentTemplate = ({ children, sectionName }) => {
  const [showModal,] = useContext(ModalContext);

  return (
    <SectionContentTemplateWrapper className={`${(showModal.is_opened && showModal.type_modal === sectionName) && 'opened'}`}>
      { children }
    </SectionContentTemplateWrapper>
  );
}