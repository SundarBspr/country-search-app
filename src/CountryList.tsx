import React from "react";
import { CountryCard } from "./CountryCard";
import "./index.css";

export const CountryList = ({ countries }: any) => {
  return (
    <div className="countries">
      {countries.map((country: any) => {
        return country && <CountryCard country={country} />;
      })}
    </div>
  );
};
