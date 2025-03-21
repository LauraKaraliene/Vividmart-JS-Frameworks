import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Index.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/index.scss";
import "./styles/bootstrap.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
