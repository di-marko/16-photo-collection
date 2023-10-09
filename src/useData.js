import { useState, useEffect } from "react";

export const useData = (url) => {
  const [data, setData] = useState({ categories: [], collections: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) {
          const errorMsg = result.message || "Network response was not ok";
          throw new Error(errorMsg);
        }
        return result;
      })
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};
