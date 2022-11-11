import React from 'react';
// import ciscoLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/">Contact Us</a></li>
          
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="/">kondhwa </a></li>
          <li><a href="/">+918023</a></li>
          <li><a href="/">ciscoviit@viit.ac.in</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="cisco__footer-copyright">
        <p>@Cisco Team. All rights reserved.</p>
      </div>
    </div>
  </div>

);

export default Footer;