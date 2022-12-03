import React from 'react';
import './footer.css';
import FooterHeart from "../footerHeart/FooterHeart";

const Footer = () => (
  <div className="container mb-5">
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
      <div className="footer-col1">
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="/">Survey No. 2/3/4, VIM Private Rd, Kapil Nagar, Kondhwa, Pune, Maharashtra 411048 </a></li>
          <li><a href='/'>+918023</a></li>
          <li><a href="mailto:ciscoviit@viit.ac.in">ciscoviit@viit.ac.in</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="https://instagram.com/ciscoviit"><i className="fab fa-instagram"></i></a>
          <a href="https://in.linkedin.com/company/ciscoviit"><i className="fab fa-linkedin-in"></i></a>
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/ciscoviit"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      
      <FooterHeart />
    </div>
   
  </div>

);

export default Footer;