import React from "react";
import "../assets/styles/countries.css";

const Countries = () => {
  const countries = [
    { name: "Portugal", img: require("../assets/img/portugal.jpg") },
    { name: "France", img: require("../assets/img/france.jpg") },
    { name: "Spain", img: require("../assets/img/spain.jpg") },
    { name: "Italy", img: require("../assets/img/italy.jpg") },
    { name: "Netherland", img: require("../assets/img/netherland.jpg") },
    { name: "Germany", img: require("../assets/img/germany.jpg") },
  ];

  return (
    <div className="countries-content">
      <div className="section-top">
        <h1 className="countries-title">Countries</h1>
      </div>
      <p className="countries-description">
        BeesTravel offers great deals for you. You can easily travel and explore
        over 10+ europen countries with one simple touch.
      </p>
      <div className="countries-list">
        {countries.map((country, index) => (
          <div key={index} className="country">
            <img src={country.img} alt={country.name} />
            <div className="country-name">{country.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
