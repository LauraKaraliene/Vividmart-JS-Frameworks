import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import App from "../App";
import Cart from "../pages/cart";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />, // App is now the Home page
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
