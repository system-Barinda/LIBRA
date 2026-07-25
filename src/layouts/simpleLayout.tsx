import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function simpleLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
