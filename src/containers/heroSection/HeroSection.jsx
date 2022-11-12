import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroSection.css';

const Header = () => (
  <>
    <div className="cisco__header section__padding" id="home">
      <div className="cisco__header-content">
        <h1 className="main-heading">
          Welcome to <span>Cisco ViiT</span>
          <br />
          Connect Everywhere
        </h1>
        <p className="info-text">
          Automate, secure, and scale your network with a software-delivered approach.
        </p>
        <div className="btn_wrapper">
        <NavLink to='/about'><button className="btn view_more_btn">
            About <i className="ri-arrow-right-line"></i>
          </button></NavLink>

          <NavLink to='courses'><button className="btn documentation_btn">Courses</button></NavLink>
        </div>
      </div>


      <div className="cisco__header-image">
        <img alt='' src="https://images1.the-dots.com/1247540/spacegif4.gif?p=projectImageFullJpg" />
      </div>
    </div>
    <div className='cisco__header section__padding1'>

    </div>
  </>
);

export default Header;
