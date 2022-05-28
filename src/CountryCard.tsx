import "./index.css";
import { countryCardprop } from "./typesDef";

export const CountryCard = ({ props }: countryCardprop) => {
  return (
    <div className="card">
      <img src={props.country.image} alt="" />
      <div className="card-details">
        <div>Name: {props.country.name}</div>
        <div>Population: {props.country.population}</div>
        <div>Region: {props.country.region}</div>
        <div>Captial: {props.country.capital}</div>
      </div>
    </div>
  );
};
