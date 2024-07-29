import React from "react";
import "../assets/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={require("../assets/img/logo.png")} alt="logo" />
        </div>
        <p className="footer-text">Top 3 in the World</p>
        <div className="footer-social-icon">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-menu">
          <ul>
            <li>
              Resources
              <ul>
                <li>
                  <a href="/">Download</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Help Center</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Guide Book</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">App Directory</a>
                </li>
              </ul>
            </li>
            <li>
              Traveller
              <ul>
                <li>
                  <a href="/">Advantages</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Offers</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Customer Stories</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Specialist</a>
                </li>
              </ul>
            </li>
            <li>
              Company
              <ul>
                <li>
                  <a href="/">Travelling</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Offices</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Success</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Information</a>
                </li>
              </ul>
            </li>
            <li>
              Our App
              <ul>
                <li>
                  <a href="/">App Store</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Google Play Store</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
