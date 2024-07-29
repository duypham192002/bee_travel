import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/hero.css";
import HeroImage from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="left-section">
        <h1 className="hero-title">Explore the best place Now</h1>
        <p className="hero-description">
          Plan your schedule and start to explore world. BeeTravel helps you to
          get great offers. For more offer you can alway contact with us
        </p>
        <button className="btn-hero">
          <span>
            Contact Now <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </div>
      <div className="right-section">
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
