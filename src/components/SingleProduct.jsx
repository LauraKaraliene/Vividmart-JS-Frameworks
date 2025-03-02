import styles from "./SingleProduct.module.scss";

const SingleProduct = ({ product, onAddToCart }) => {
  if (!product) return <p>Loading...</p>;

  const { title, description, image, price, discountedPrice, reviews } =
    product;
  const discount = price - discountedPrice;

  return (
    <div className={styles.productContainer}>
      <div className={styles.productGrid}>
        <img
          src={image?.url}
          alt={image?.alt || "Product Image"}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            <strong>${discountedPrice}</strong>{" "}
            {discount > 0 && (
              <span className={styles.discount}>Save ${discount}</span>
            )}
          </p>
          <button className={styles.addToCart} onClick={onAddToCart}>
            ADD TO CART <i className="bi bi-cart"></i>{" "}
            {/* Use Bootstrap icon */}
          </button>
        </div>
      </div>
      {/* Reviews Section */}
      <div className={styles.reviews}>
        <h3>Reviews</h3>
        {reviews?.length ? (
          reviews.map((review, index) => (
            <div key={index} className={styles.reviewItem}>
              <strong>{review.username}</strong>: {review.description} ⭐
              {review.rating}
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
