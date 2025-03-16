import styles from "./SingleProduct.module.scss";
import SingleProductImage from "./SingleProductImage";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductReviews from "./SingleProductReviews";

const SingleProduct = ({ product }) => {
  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.productContainer}>
      <div className={styles.productGrid}>
        <SingleProductImage image={product.image} />
        <SingleProductDetails product={product} />
      </div>
      <SingleProductReviews reviews={product.reviews} />
    </div>
  );
};

export default SingleProduct;
