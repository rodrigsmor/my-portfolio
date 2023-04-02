import { useState } from "react"
import ModalContext from "./context/modalContext"
import { routes } from "./routes/routes"
import { RouterProvider } from "react-router-dom"

function App() {
  const [ showModal, setShowModal ] = useState({ is_opened: false, type_modal: '', progress: '0%' })

  return (
    <ModalContext.Provider value={[showModal, setShowModal]}>
      <RouterProvider router={routes} />
    </ModalContext.Provider>
  )
}

export default App
