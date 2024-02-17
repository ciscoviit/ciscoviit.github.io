import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import CN_Logo2 from '../../assets/CN_Logo2.png';

import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="/">
        <NavLink to="/">Home</NavLink>
      </a>
    </p>
    {/* <p>
      <a href="/">
        <NavLink to="/about">About</NavLink>
      </a>
    </p> */}
    <p>
      <a href="/">
        <NavLink to="/courses">Courses</NavLink>
      </a>
    </p>
    <p>
      <a href="/">
        <NavLink to="/team">Team</NavLink>
      </a>
    </p>
    <p>
      <a href="/">
        <NavLink to="/contactus">Contact Us</NavLink>
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cisco__navbar ">
      <div className="cisco__navbar-links">
        <div className="cisco__navbar-links_logo">
          {/* <img
            src={CN_Logo2}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          /> */}
          {/* Add logo and remove h3 tag */}
          <h2>
            <a href="/">CISCOVIIT</a>
          </h2>
        </div>
        <div className="cisco__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cisco__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cisco__navbar-menu_container scale-up-center">
            <div className="cisco__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
