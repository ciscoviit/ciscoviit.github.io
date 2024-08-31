import React from "react";
import { NavLink } from "react-router-dom";
import FooterHeart from "../footerHeart/FooterHeart";
import "./footer.css";

const Footer = () => (
  <div className="container mb-5">
    <div className="row">
      <div className="footer-col">
        <h4>Links</h4>
        <ul>
          <NavLink to="/">
            <li>
              <a href="/">Home</a>
            </li>
          </NavLink>
          <NavLink to="/courses">
            <li>
              <a href="/">Courses</a>
            </li>
          </NavLink>
          <NavLink to="/team">
            <li>
              <a href="/">Team</a>
            </li>
          </NavLink>
          <NavLink to="/contactus">
            <li>
              <a href="/">Contact Us</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="footer-col1">
        <h4>Get In Touch</h4>
        <ul>
          <li>
            <iframe
              title="VIIT"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.53320362823086!2d73.8841761!3d18.45958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf4662547c9%3A0xd96690b0786458f5!2sVIIT%20-%20Computer%20Science%20Department!5e0!3m2!1sen!2sin!4v1725101261796!5m2!1sen!2sin"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
          <li>
            <a href="tel:+919767530401">+91 97675 30401</a>
          </li>
          <li>
            <a href="mailto:cisconetacad@viit.ac.in">cisconetacad@viit.ac.in</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a
            href="https://instagram.com/ciscoviit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://in.linkedin.com/company/ciscoviit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/CiscoVIIT"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/ciscoviit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <FooterHeart />
    </div>
  </div>
);

export default Footer;
