import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import Cart from "../pages/Cart.jsx";
import Contact from "../pages/Contact.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";

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
      {
        path: "checkout-success",
        element: <CheckoutSuccess />,
      },
    ],
  },
]);

export default router;
