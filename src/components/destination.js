import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/destination.css";

const Destination = () => {
  return (
    <div className="destination-container">
      <div className="destination">
        <div className="destination-left">
          <div className="destination-image">
            <img src={require("../assets/img/destination.jpg")} alt="" />
          </div>
          <div className="top-card">
            <div className="top-card-title">
              <div className="top-card-content">
                <FontAwesomeIcon icon={faLocationDot} />
                <h3>500+</h3>
              </div>
              <div className="top-card-description">Destinations</div>
            </div>
          </div>
          <div className="bot-card">
            <div className="bot-card-title">
              <div className="bot-card-content">
                <img src={require("../assets/img/signal.png")} alt="" />
                <h3>2000+</h3>
              </div>
              <div className="bot-card-description">
                <p>Employees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="destination-right">
          <p className="destination-point">Destination Points</p>
          <div className="destination-title">
            <h2>Our Stories Have Adventures</h2>
          </div>
          <div className="destination-description">
            <p className="description-content">
              We are experienced in bringing adventures to stay their journey,
              with all outdoor destinations in the world as our specialties.
              Start your adventure now! Nature has already called you!
            </p>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-title">
                <h3>10+</h3>
              </div>
              <div className="card-description">
                <p>European</p>
                <p>Countries</p>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>40+</h3>
              </div>
              <div className="card-description">
                <p>Worldwide</p>
                <p>Office</p>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>20K+</h3>
              </div>
              <div className="card-description">
                <p>Happy</p>
                <p>Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
