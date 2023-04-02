import { useContext } from "react";
import { BsChevronDoubleDown } from 'react-icons/bs'
import ModalContext from "../../../context/modalContext";
import { SeeMoreButtonContainer } from "./styled";

export const SeeMoreButton = ({ type_modal }) => {
  const [showModal, setShowModal] = useContext(ModalContext);

  return (
    <SeeMoreButtonContainer 
      onClick={e => setShowModal({ is_opened: true, type_modal })}
      className={`${(showModal.is_opened && showModal.type_modal === type_modal) && 'hide'}`}
    >
      <div className='mouse-draw'><span></span></div>
      <div className='scroll-indicator-icon'><BsChevronDoubleDown size={24} /></div>
    </SeeMoreButtonContainer>
  );
}