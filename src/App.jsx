import { useState } from "react"
import ModalContext from "./context/modalContext"
import { routes } from "./routes/routes"
import { RouterProvider } from "react-router-dom"
import { modalContextInitialState } from "./utils/contextInitialState"

function App() {
  const [ showModal, setShowModal ] = useState(modalContextInitialState)
  return (
    <ModalContext.Provider value={[showModal, setShowModal]}>
      <RouterProvider router={routes} />
    </ModalContext.Provider>
  )
}

export default App
