import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoggedInMenu from "../Dropdown/LoggedInMenu";
import "./Dropdown.css";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div id="dropdown-container">
      <button id="dropdown-btn" onClick={openMenu}>
        <i class="fa-solid fa-bars" id="dropdown-icon"></i>
      </button>
      {showMenu && (
        <ul id="dropdown-list">
          <LoggedInMenu />
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
