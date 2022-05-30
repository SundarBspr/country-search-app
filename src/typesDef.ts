import { SetStateAction } from "react";

export type DataType={
    name:string,
    population:number | string,
    region:string,
    capital:string,
    image:string,
}
export type CountryListprop={
    countries:DataType[],
}
export type CountryCardprop={
    country:DataType,
}
export type SearchBarPropsType = {
    setText: React.Dispatch<SetStateAction<string>>,
  };
export interface RawDataNameType{
    official?:string,
}
export interface RawDataType{
    name?:RawDataNameType,
    population?:number,
    region?:string,
    capital?:string[],
    flags?:{
        png?:string,
    }
}