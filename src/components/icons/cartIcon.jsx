import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./cartIcon.module.scss";
import useCartStore from "../../store/useCartStore";

export default function CartIcon() {
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <Link to="/cart" className={styles.cartIcon}>
      <FaShoppingCart size={28} />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </Link>
  );
}

// export default function CartIcon({ cartCount }) {
//   return (
//     <Link to="/cart" className={styles.cartIcon}>
//       <FaShoppingCart size={28} />
//       {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
//     </Link>
//   );
// }
