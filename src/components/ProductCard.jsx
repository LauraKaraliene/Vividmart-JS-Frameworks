import React from "react";
import styles from "./ProductCard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RatingStars from "./RatingStars";

function ProductCard({ product }) {
  const discountAmount = (product.price - product.discountedPrice).toFixed(2);
  const discountPercentage = Math.round((discountAmount / product.price) * 100);
  const hasDiscount = discountAmount > 0;

  return (
    <div
      className={`card border-0 shadow h-100 ${styles.poppins} ${styles.productCard}`}
    >
      {hasDiscount && (
        <div
          className={`bg-success position-absolute top-0 start-0 m-2 p-1 text-white rounded-2 align-items-center fs-6 ${styles.discountBadge}`}
        >
          Save{" "}
          {discountAmount >= 1
            ? `$${discountAmount}`
            : `${discountPercentage}%`}
        </div>
      )}

      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        className={`card-img-top ${styles.fixedImage}`}
      />

      <div className="card-body d-flex flex-column">
        <h4
          className={`card-title mb-3 text-uppercase d-flex align-items-center fs-6 ${styles.productTitle}`}
        >
          {product.title}
        </h4>

        <div
          className={`card-text d-flex flex-column align-items-start ${styles.productPrice}`}
        >
          {hasDiscount ? (
            <>
              <p className="pb-0 mb-0 fs-6">${product.discountedPrice}</p>{" "}
              <p className="text-muted text-decoration-line-through pt-0 fs-6">
                ${product.price}
              </p>
            </>
          ) : (
            <p className="pb-0 mb-0 fs-6">${product.price}</p>
          )}
        </div>

        <p className={`card-text d-flex mt-auto${styles.ratingContainer}`}>
          <RatingStars rating={product.rating} />
        </p>

        <button
          className={`btn btn-primary text-white mt-auto text-uppercase ${styles.syncopate} ${styles.viewProductBtn}`}
        >
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
