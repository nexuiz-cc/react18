import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <span className="span">  </span>

      <NavLink
        to="/goods"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Goods
      </NavLink>
      <span className="span">  </span>
      <NavLink
        to="/user"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "rgb(205, 207, 207)" } : null
        }
      >
        User
      </NavLink>
    </>
  );
};

export default Nav;
