import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { BASE_URL } from "../constants/api";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;

  return <SingleProduct product={product} />;
};

export default ProductPage;
