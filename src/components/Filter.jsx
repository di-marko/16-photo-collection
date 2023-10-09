export const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
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
  );
};
