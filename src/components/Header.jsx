import { Search } from "./Search";

export const Header = ({ searchValue, onSearchChange }) => {
  return (
    <>
      <h1>My Photo Collection</h1>
      <Search searchValue={searchValue} onSearchChange={onSearchChange} />
    </>
  );
};
