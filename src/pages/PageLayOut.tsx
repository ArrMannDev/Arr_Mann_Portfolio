import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { SmokeCursor } from "../ui/SmokeCursor";

export default function PageLayOut() {
  return (
    <>
      <SmokeCursor />
      <NavBar />
      <Outlet />
    </>
  );
}
