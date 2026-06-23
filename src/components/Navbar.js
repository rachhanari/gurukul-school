import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import logo from "../images/logo.PNG _final.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Parents", path: "/parents" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <div className="top-header">
        <div className="top-left">
          <span>📞 09137322177</span>

          <span>
            📍 JVM Accord, Manorama Nagar, Manpada,
            Thane (W), Maharashtra 400607
          </span>
        </div>

        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>

          <a href="#">
            <FaYoutube />
          </a>

          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="School Logo" />

          <div className="logo-text">
            <h2>Gurukul International School</h2>
            <p>Learning Today, Leading Tomorrow</p>
          </div>
        </div>

        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={active === item.name ? "active" : ""}
              onClick={() => setActive(item.name)}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;