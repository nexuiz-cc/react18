import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";
const Layout = (props) => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
