import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-text">
        <div className="rectangle"></div>
        <div className="testimonial-title">
          <h2>What customers Think about us:</h2>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <p>
              BeeTravel helped to see great places with the great offers. The
              company also assure you to refund your money anytime. Easy to
              communicate easy to explore. Thank you.
            </p>
            <div className="testimonial-group">
              <div className="testimonial-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div className="testimonial-name">
                <h3>John Doe</h3>
              </div>

              <div className="testimonial-description">
                <p>Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-image">
        <img src={require("../assets/img/testimonial.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
