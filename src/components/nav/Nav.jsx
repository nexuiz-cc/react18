import "./Nav.less";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        首页
      </NavLink>

      <NavLink
        to="/goods"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        商品
      </NavLink>
      <NavLink
        to="/user"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#399" } : null
        }
      >
        用户
      </NavLink>
    </>
  );
};

export default Nav;
