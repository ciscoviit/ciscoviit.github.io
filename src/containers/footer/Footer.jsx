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
            <a href="/">
              Survey No. 2/3/4, VIM Private Rd, Kapil Nagar, Kondhwa, Pune,
              Maharashtra 411048{" "}
            </a>
          </li>
          <li>
            <a href="/tel:+918552886372">+91 8552886372</a>
          </li>
          <li>
            <a href="mailto:ciscoviit@viit.ac.in">cisconetacad@viit.ac.in</a>
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
          <a href="/">
            <i
              className="fab fa-facebook-f"
              rel="noopener noreferrer"
              target="_blank"
            ></i>
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
