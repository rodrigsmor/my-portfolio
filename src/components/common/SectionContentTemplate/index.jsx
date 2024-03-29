import { useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { IoReturnUpBackOutline } from 'react-icons/io5';
import ModalContext from "../../../context/modalContext";
import { BackButton, SectionContentTemplateWrapper } from "./styled";
import { modalContextInitialState } from "../../../utils/contextInitialState";

export const SectionContentTemplate = ({ children, sectionName }) => {
  const { pathname } = useLocation();
  const contentScrollRef = useRef(null);
  const [showModal, setShowModal] = useContext(ModalContext);

  function updateProgressPercentage(element) {
    const maxScroll = element.scrollHeight - window.innerHeight;
    setShowModal({ ...showModal, progress: `${(element.scrollTop / maxScroll) * 100 }%`})
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