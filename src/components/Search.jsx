export const Search = ({ searchValue, onSearchChange }) => {
  return (
    <input
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-input"
      placeholder="Search by name"
    />
  );
};
