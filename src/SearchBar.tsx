import React from "react";
import "./index.css";

export const SearchBar = ({ text, settext }: any) => {
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
