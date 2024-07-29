import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1 className="contact-title">
          Contact With us to be informed about news
        </h1>
        <p className="contact-description">
          Recieve latest news, update, and many other things every week.
        </p>
      </div>
      <div className="contact-email">
        <input type="text" placeholder="Enter your email address" />
        <button className="email-btn">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
