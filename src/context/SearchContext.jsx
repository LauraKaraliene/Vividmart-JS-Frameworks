import { createContext, useState, useEffect, useContext } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched search products:", data.data);
        setProducts(data.data);
      });
  }, []);

  return (
    <SearchContext.Provider value={products}>{children}</SearchContext.Provider>
  );
};
