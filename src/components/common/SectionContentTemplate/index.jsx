import { useContext, useEffect, useRef } from "react";
import ModalContext from "../../../context/modalContext";
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { BackButton, SectionContentTemplateWrapper } from "./styled";
import calculatePercentage from "../../../utils/calculatePercentage";
import { useLocation } from "react-router-dom";
import { modalContextInitialState } from "../../../utils/contextInitialState";

export const SectionContentTemplate = ({ children, sectionName }) => {
  const { pathname } = useLocation();
  const contentScrollRef = useRef(null);
  const [showModal, setShowModal] = useContext(ModalContext);

  function updateProgressPercentage(element) {
    setShowModal({ ...showModal, progress: calculatePercentage(element.scrollHeight, element.scrollTop + element.offsetHeight) })
  }

  useEffect(() => {
    if(showModal.is_opened && showModal.type_modal === sectionName)
      updateProgressPercentage(contentScrollRef.current)
  }, [ showModal.is_opened ])

  useEffect(() => {
    if(pathname !== sectionName && showModal.is_opened)
      setShowModal(modalContextInitialState);
  }, [ pathname ])

  return (
    <SectionContentTemplateWrapper className={`${(showModal.is_opened && showModal.type_modal === sectionName) ? 'opened' : 'close'}`}>
      <BackButton onClick={e => setShowModal(modalContextInitialState)}>
        <IoReturnUpBackOutline size={18} /> voltar
      </BackButton>
      <div 
        ref={contentScrollRef}
        className='content-wrapper'
        onScroll={e => updateProgressPercentage(e.target)}
      >
        { children }
      </div>
    </SectionContentTemplateWrapper>
  );
}