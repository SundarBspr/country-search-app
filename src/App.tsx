import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import { CountryList } from "./CountryList";
import { SearchBar } from "./SearchBar";
import { DataType, RawDataType } from "./typesDef";
import { arrayUseState, booleanUseState, stringUseState } from "./helpers";

function App() {
  const [data, setData] = useState<DataType[]>(arrayUseState);
  const [text, setText] = useState<string>(stringUseState);
  const [loading, setLoading] = useState<boolean>(booleanUseState);

  async function getData() {
    const response: Response = await fetch(
      "https://restcountries.com/v3.1/all"
    );
    const rawData: RawDataType[] = await response.json();
    setLoading(true);
    const newData: DataType[] = rawData.map((item) => {
      return {
        name: (item.name && item.name.official) || "Not Available",
        population:
          item.population && item.population !== 0
            ? item.population
            : "Not Available",
        region: item.region ? item.region : "Not Available",
        capital:
          item.capital !== undefined
            ? item.capital[0]
            : (item.name && item.name.official) || "Not Available",
        image:
          item.flags !== undefined && item.flags.png !== undefined
            ? item.flags.png
            : "https://cdn.pixabay.com/photo/2018/08/15/07/19/indian-flag-3607410_1280.jpg",
      };
    });
    setData(newData);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const selectedItems: DataType[] = useMemo(
    () =>
      data.filter(
        (item: DataType) =>
          item.name && item["name"].toLowerCase().includes(text.toLowerCase())
      ),
    [text, data]
  );
  return (
    <div>
      <SearchBar setText={setText} />
      {loading && <h3> Loading....</h3>}
      <CountryList countries={selectedItems} />
    </div>
  );
}
export default App;
