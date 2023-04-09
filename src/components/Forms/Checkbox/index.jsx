import { IoClose } from "react-icons/io5";
import { CheckBoxContainer } from "./styled";

export const Checkbox = ({ isChecked, label, onClick }) => {
  return (
    <CheckBoxContainer type="button" role='checkbox' aria-checked={isChecked} onClick={e => onClick(label)} className={`${isChecked && 'checked'}`}>
      { label }
      { isChecked && <IoClose size={14} /> }
    </CheckBoxContainer>
  );
}