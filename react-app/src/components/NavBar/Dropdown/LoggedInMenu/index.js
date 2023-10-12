import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import LogoutButton from "../../../auth/LogoutButton";
import "../../Dropdown/Dropdown.css";

function LoggedInMenu() {
  return (
    <>
      <li>
        <NavLink
          to="/"
          exact={true}
          className="dropdown-items first-item"
        >
          <i class="fa-solid fa-house-chimney"></i>
          Home
        </NavLink>
      </li>
      <li>
        <LogoutButton />
      </li>
    </>
  );
}

export default LoggedInMenu;
