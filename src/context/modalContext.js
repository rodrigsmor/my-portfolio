import { createContext } from "react";
import { modalContextInitialState } from "../utils/contextInitialState";

const ModalContext = createContext([modalContextInitialState, () => {}]);

export default ModalContext;