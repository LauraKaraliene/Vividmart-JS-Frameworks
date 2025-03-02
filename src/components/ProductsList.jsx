import { BASE_URL } from "../constants/api.js";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { Link } from "react-router-dom";
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

        console.log("Fetching products...");

        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        console.log("API response data:", data);

        setProducts(data.data); // ✅ Correctly setting state
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // ✅ New useEffect to track when 'products' updates
  useEffect(() => {
    console.log("Updated products state in useEffect:", products);
  }, [products]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products. Please try again.</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 col-sm-12 gap-4 mb-4 mt-4"
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

// import { BASE_URL } from "../constants/api.js";
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard.jsx";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setIsLoading(true);
//         setIsError(false);

//         console.log("Fetching products..."); // Log before fetching

//         const response = await fetch(BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch products");

//         const data = await response.json();
//         console.log("Fetched products:", data); // Log the response
//         // console.log("Products state:", products);
//         console.log("API response data:", data); // ✅ This will show what the API returns

//         setProducts(data.data);
//         console.log("Updated products state:", data.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading products. Please try again.</div>;

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="col-lg-4 col-md-6 col-sm-12 gap-4 mb-4 mt-4"
//           >
//             <Link
//               to={`/product/${product.id}`}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <ProductCard product={product} />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsList;
