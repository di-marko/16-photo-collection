import React, { useState, useMemo } from "react";
import "./index.scss";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Collection } from "./components/Collection";
import { Loading } from "./components/Loading";
import { Pagination } from "./components/Pagination";
import { useData } from "./useData";
import { filterCollections } from "./utils";

const ITEMS_PER_PAGE = 4;

function App() {
  const { data, isLoading, error } = useData("/data.json"); // <-- Use custom hook
  const { categories, collections } = data;
  const [categoryID, setCategoryID] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const filteredCollections = useMemo(() => {
    return filterCollections(collections, categoryID, searchValue); // <-- Use utility function
  }, [collections, categoryID, searchValue]);

  const totalPages = Math.ceil(filteredCollections.length / ITEMS_PER_PAGE);

  return (
    <div className="App">
      <Header searchValue={searchValue} onSearchChange={setSearchValue} />
      <Filter
        categories={categories}
        selectedCategory={categoryID}
        onCategoryChange={setCategoryID}
      />

      <div className="content">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          filteredCollections
            .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
            .map((obj) => (
              <Collection
                key={obj.id}
                name={obj.name}
                images={obj.photos}
                itemCount={obj.photos.length}
              />
            ))
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default App;
