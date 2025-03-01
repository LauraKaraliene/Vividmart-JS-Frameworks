import { BASE_URL } from "../constants/api.js";
import React, { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setIsError(false);

        console.log("Fetching products..."); // Log before fetching

        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();

        console.log("Fetched products:", data); // Log the response

        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products. Please try again.</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
