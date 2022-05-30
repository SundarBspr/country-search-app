import "./index.css";
import "./typesDef";
import { SearchBarPropsType } from "./typesDef";

export const SearchBar = ({ setText }: SearchBarPropsType) => {
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
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
