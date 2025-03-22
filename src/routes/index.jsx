import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import Cart from "../pages/cart.jsx";
import Contact from "../pages/contact.jsx";
import CheckoutSuccess from "../pages/checkoutSuccess.jsx";
import ProductPage from "../pages/productPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
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
