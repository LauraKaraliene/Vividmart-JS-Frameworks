import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import App from "../App"; // Use App as Home
import About from "../pages/about";
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
