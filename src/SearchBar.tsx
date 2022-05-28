import React, { SetStateAction } from "react";
import "./index.css";
import "./typesDef";

type Props = {
  // settext: (text: string) => {};
  settext: React.Dispatch<SetStateAction<String>>;
};
export const SearchBar = ({ settext }: Props) => {
  async function handleTextChange(e: any) {
    settext(e.target.value);
  }

  return (
    <input
      name="searchbar"
      placeholder="Search Country Here"
      className="searchbar"
      onChange={handleTextChange}
    ></input>
  );
};
