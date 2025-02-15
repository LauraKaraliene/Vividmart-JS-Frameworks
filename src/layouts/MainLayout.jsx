import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function MainLayout() {
  return (
    <div className="container mx-auto my-5 h-lvh">
      <Header />
      <Outlet />
    </div>
  );
}
