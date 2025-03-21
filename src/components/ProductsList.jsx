import { Spinner } from "react-bootstrap";
import { BASE_URL } from "../constants/api.js";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {}, [products]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="primary" size="lg" />
      </div>
    );
  }

  if (error) return <div>Error loading products. Please try again.</div>;

  return (
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
