import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#courses">Courses</a></p>
  <p><a href="#team">Team</a></p>
  <p><a href="#blog">Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cisco__navbar">
      <div className="cisco__navbar-links">
        <div className="cisco__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          {/* Add logo and remove h3 tag */}
          <h2>CISCOVIIT</h2>
        </div>
        <div className="cisco__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='cisco__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='cisco__navbar-menu_container scale-up-center'>
            <div className='cisco__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar