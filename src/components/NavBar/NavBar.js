import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";
import { LINKS } from "./data.js";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { logo } from "../images";
import Sidebar from "../Sidebar/Sidebar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className={classes.navwrapper}>
      <div className={classes.navbar}>
        {/* Logo */}
        <div className={classes.logo}>
          <img src={logo} alt="heia_ logo" />
          <NavLink to="/">HEIA</NavLink>
        </div>
        {/* Links */}
        <div className={classes.links}>
          {LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive ? classes.activeNavLink : ""
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Nav Menu Btn */}
        <div className={classes.menuBtn} onClick={openSidebar}>
          <MenuIcon size={30} />
        </div>
      </div>
      <Sidebar isOpen={isOpen} isClose={closeSidebar} links={LINKS} />
    </header>
  );
};

export default NavBar;
