import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    // history.push('/');
  };

  return (
    <NavLink
      to="/"
      exact={true}
      className="dropdown-items"
      onClick={onLogout}
    >
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      Log out
    </NavLink>
  );
};

export default LogoutButton;
