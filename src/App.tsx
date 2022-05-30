import React, { useMemo, useState } from "react";
import "./index.css";
import { CountryList } from "./CountryList";
import { SearchBar } from "./SearchBar";
import { DataType } from "./typesDef";
import { stringUseState } from "./helpers";
import useGetData from "./useGetData";

//Link of API
export const DATA_LINK = "https://restcountries.com/v3.1/all";

function App() {
  const [text, setText] = useState<string>(stringUseState);
  const [data, isLoading] = useGetData(DATA_LINK); //custom hook which return data and loading status

  //filtered data after the search text changes
  const selectedItems: DataType[] = useMemo(
    () =>
      data.filter(
        (item: DataType) =>
          item.name && item["name"].toLowerCase().includes(text.toLowerCase())
      ),
    [data, text]
  );
  return (
    <div>
      <SearchBar setText={setText} />
      {isLoading && <h3> Loading....</h3>}
      <CountryList countries={selectedItems} />
    </div>
  );
}
export default App;
