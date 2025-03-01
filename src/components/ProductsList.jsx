import { BASE_URL } from "../constants/api.js";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
// import styles from "./ProductsList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-lg-4 col-md-6 col-sm-12 gap-4 mb-4 mt-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
