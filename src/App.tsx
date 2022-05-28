import React, { useEffect, useState } from "react";
import "./index.css";
import { CountryList } from "./CountryList";
import { SearchBar } from "./SearchBar";
import { dataType } from "./typesDef";

function App() {
  const [data, setdata] = useState<dataType[]>([]);
  const [text, settext] = useState<String>("");
  const [loading, setloading] = useState<boolean>(false);
  async function getD() {
    const response: Response = await fetch(
      "https://restcountries.com/v3.1/all"
    );
    const rawdata: any = await response.json();
    setloading(true);
    const newdata: Array<dataType> = rawdata.map((item: any) => {
      return {
        name: item.name.official,
        population: item.population,
        region: item.region,
        capital:
          item.capital !== undefined ? item.capital[0] : item.name.official,
        image:
          item.flags !== undefined && item.flags.png !== undefined
            ? item.flags.png
            : "https://cdn.pixabay.com/photo/2018/08/15/07/19/indian-flag-3607410_1280.jpg",
      };
    });
    setdata(newdata);
    setloading(false);
  }
  useEffect(() => {
    setloading(true);
    getD();
  }, []);

  const SelectedItems: dataType[] = data.filter(
    (item: dataType) =>
      item.name && item["name"].toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <div>
        <SearchBar settext={settext} />
      </div>
      {loading && <h3> Loading....</h3>}
      <CountryList
        props={{
          countries: SelectedItems,
        }}
      />
    </div>
  );
}

export default App;
