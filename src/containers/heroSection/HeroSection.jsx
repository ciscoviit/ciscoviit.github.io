import React from 'react';
import { NavLink } from 'react-router-dom';
import './heroSection.css';
import cloud from "../../assets/cloud.gif";
import { ScrollTop} from '../../components';


const Header = () => (
  <>
    <div className='gradient__bg-home'>

      <div className="cisco__header section__padding" id="home">
        <div className="cisco__header-content">
          <h1 className="main-heading">
            Welcome to <span>Cisco ViiT</span>
            <br />
            Connect Everywhere
          </h1>
          <p className="heading-fancy-font text-center">
            Loved by Developers, Trusted By Bussiness.
          </p>
        </div>
        <div className="cisco__header-image">
          <img alt='' src={cloud} />
        </div>
      </div>
      <div className='cisco__header section__padding_btn'>
        <div className="btn_wrapper">
          <NavLink to='/about'><button className="btn view_more_btn">
            About <i className="ri-arrow-right-line"></i>
          </button></NavLink>

          <NavLink to='courses'><button className="btn documentation_btn">Courses</button></NavLink>
        </div>
      </div>
      <ScrollTop/>
    </div>
  </>
);

export default Header;