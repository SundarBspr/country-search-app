import { useEffect, useState } from "react";
import { arrayUseState, booleanUseState } from "./helpers";
import { DataType, RawDataType } from "./typesDef";

export default function useGetData(dataLink:string):[DataType[],boolean]{
    const [data, setData] = useState<DataType[]>(arrayUseState);
    const [loading, setLoading] = useState<boolean>(booleanUseState);
    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            const response: Response = await fetch(dataLink);
            const rawData: RawDataType[] = await response.json();
            setData(rawData.map((item) => {
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
            }))
            setLoading(false);
        }
        fetchData();
        },[dataLink]);
        return [data,loading]
}