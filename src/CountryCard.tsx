import "./index.css";
import { CountryCardprop } from "./typesDef";

export const CountryCard = ({ country }: CountryCardprop) => {
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
