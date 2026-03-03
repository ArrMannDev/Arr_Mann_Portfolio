import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function PageLayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
