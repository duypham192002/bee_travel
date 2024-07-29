import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-menu">
        <div className="logo">
          <img src={require("../assets/img/logo.png")} alt="Logo" />
        </div>

        <a href="/">Home</a>
        <a href="/">Countries</a>
        <a href="/">Features</a>
        <a href="/">Customer</a>

        <button className="nav-btn">
          <span>
            Contact Now <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
