import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
