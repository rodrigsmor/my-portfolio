import { createContext } from "react";

const ModalContext = createContext([{
  is_opened: false,
  type_modal: '',
  progress: '0%'
}, () => {}]);

export default ModalContext;