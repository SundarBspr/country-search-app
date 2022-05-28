import { CountryCard } from "./CountryCard";
import "./index.css";
import { dataType, countryListprop } from "./typesDef";

export const CountryList = ({ props }: countryListprop) => {
  return (
    <div className="countries">
      {props.countries.map((country: dataType) => {
        return (
          country && <CountryCard key={country.name} props={{ country }} />
        );
      })}
    </div>
  );
};
