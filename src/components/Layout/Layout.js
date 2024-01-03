import { Outlet } from "react-router-dom";
import HeaderBar from "../HeaderBar/HeaderBar";

export default function Layout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
