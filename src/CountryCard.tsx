import React from "react";
import "./index.css";

export const CountryCard = ({ country }: any) => {
  return (
    <div className="card">
      <img src={country.image} alt="" />
      <div className="card-details">
        <div>Name: {country.name}</div>
        <div>Population: {country.population}</div>
        <div>Region: {country.region}</div>
        <div>Captial: {country.capital}</div>
      </div>
    </div>
  );
};
