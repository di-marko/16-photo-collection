export const SearchAndFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchValue,
  onSearchChange,
}) => {
  return (
    <div className="top">
      <ul className="tags">
        {categories.map((category, index) => (
          <li
            className={
              selectedCategory ===
              (category.name === "All" ? "all" : category.name.toLowerCase())
                ? "active"
                : ""
            }
            key={index}
            onClick={() =>
              onCategoryChange(
                category.name === "All" ? "all" : category.name.toLowerCase()
              )
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
      <input
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
        placeholder="Search by name"
      />
    </div>
  );
};
