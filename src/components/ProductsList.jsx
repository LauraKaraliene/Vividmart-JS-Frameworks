import { BASE_URL } from "../constants/api.js";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./ProductsList.module.scss";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setIsError(false);

        console.log("Fetching products...");

        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        console.log("API response data:", data);

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

  //useEffect to track when 'products' updates
  useEffect(() => {
    console.log("Updated products state in useEffect:", products);
  }, [products]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products. Please try again.</div>;

  return (
    // <div className={`container mt-4 ${styles.productsContainer}`}>
    <div className="container mt-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-md-6 col-lg-4 col-xl-3 gap-4 mb-4 mt-4"
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
