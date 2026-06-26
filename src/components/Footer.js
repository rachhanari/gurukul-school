import React from "react";
import "./../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../images/logo.PNG _final.png";
import building from "../images/childern2.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-left">

          <img
            src={logo}
            alt="logo"
            className="footer-logo"
          />

          <p>
            Gurukul Preschool provides a joyful,
            safe and inspiring learning environment
            where every child grows with confidence,
            creativity and care.
          </p>

          <div className="footer-social">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaYoutube />
            </a>

          </div>

        </div>

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-box">
            <FaPhoneAlt />
            <span>+91 9137322177</span>
          </div>

          <div className="contact-box">
            <FaEnvelope />
            <span>gurukulschool@gmail.com</span>
          </div>

          <div className="contact-box">
            <FaMapMarkerAlt />
            <span>
              JVM Accord, Manorama Nagar, Manpada, Thane (W), Maharashtra 400607
            </span>
          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><FaChevronRight /> Home</li>

            <li><FaChevronRight /> About</li>

            <li><FaChevronRight /> Admission</li>

            <li><FaChevronRight /> Gallery</li>

            <li><FaChevronRight /> Contact</li>

          </ul>

        </div>

        <div className="footer-image">

          <img
            src={building}
            alt="building"
          />

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Gurukul Preschool.
          All Rights Reserved.
        </p>

        <p>
          Designed By
          <span> Narendra</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;