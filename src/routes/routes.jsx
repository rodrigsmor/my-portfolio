import { Portfolio } from "../pages/Portfolio";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: '*',
    element: <Portfolio />
  }
])