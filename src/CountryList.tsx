import { CountryCard } from "./CountryCard";
import "./index.css";
import { CountryListprop } from "./typesDef";

export const CountryList = ({ countries }: CountryListprop) => {
  return (
    <div className="countries">
      {countries.map((country) => {
        return country && <CountryCard key={country.name} country={country} />;
      })}
    </div>
  );
};
