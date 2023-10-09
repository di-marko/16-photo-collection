export const filterCollections = (collections, categoryID, searchValue) => {
  return collections
    .filter((obj) => {
      if (categoryID === "all") return true;
      return obj.category === categoryID;
    })
    .filter((obj) => {
      return (
        obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
};
