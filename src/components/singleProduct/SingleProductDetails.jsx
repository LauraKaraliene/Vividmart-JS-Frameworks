import styles from "./SingleProductDetails.module.scss";
import useCartStore from "../../store/useCartStore";
import RatingStars from "../RatingStars";

const SingleProductDetails = ({ product }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const discount = product.price - product.discountedPrice;

  return (
    <div
      className={`d-flex flex-column h-100 poppins ${styles.productDetails}`}
    >
      <h1>{product.title}</h1>
      <RatingStars rating={product.rating} />

      <p className="fs-6 pt-3">{product.description}</p>
      <div className={`d-flex flex-column mb-4 pt-3 ${styles.priceSection}`}>
        <span className={`fs-5 fw-bold ${styles.discountedPrice}`}>
          ${product.discountedPrice}
        </span>
        {discount > 0 && (
          <span
            className={`text-muted text-decoration-line-through ${styles.originalPrice}`}
          >
            ${product.price}
          </span>
        )}
      </div>
      <button
        className={`btn btn-primary syncopate text-uppercase text-white mt-auto p-2 text-uppercase ${styles.addToCart}`}
        onClick={handleAddToCart}
      >
        ADD TO CART <i className="bi bi-cart ms-3"></i>
      </button>
    </div>
  );
};

export default SingleProductDetails;
