export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ul className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <li
          className={currentPage === index + 1 ? "active" : ""}
          key={index}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
