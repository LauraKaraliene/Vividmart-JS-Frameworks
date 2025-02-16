import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./cartIcon.module.scss"; // Import styles

export default function CartIcon({ cartCount }) {
  return (
    <Link to="/cart" className={styles.cartIcon}>
      <FaShoppingCart size={28} />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </Link>
  );
}
