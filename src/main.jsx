import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
