import React, { useEffect, useState } from "react";
import "./index.css";
import { CountryList } from "./CountryList";
import { SearchBar } from "./SearchBar";
function App() {
  const [data, setdata] = useState([]);
  const [text, settext] = useState("");
  const [loading, setloading] = useState(false);
  async function getD() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setloading(true);
    const newdata = data.map((item: any) => {
      return {
        name: item.name.official,
        population: item.population,
        region: item.region,
        capital: item.capital !== undefined ? item.capital[0] : "No capital",
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
  const SelectedItems = data.filter(
    (item: any) =>
      item.name && item["name"].toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <div>
        <SearchBar text={text} settext={settext} />
      </div>
      {loading && <h3>Loading....</h3>}
      <CountryList countries={SelectedItems} />
    </div>
  );
}

export default App;
