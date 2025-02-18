import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import CartIcon from "./icons/cartIcon.jsx";
import styles from "./header.module.scss";

export default function Header() {
  const cartCount = 3;

  return (
    <header className={`navbar navbar-expand-lg ${styles.header}`}>
      <div className="container-lg d-flex justify-content-between align-items-center">
        <Link to="/" className={`navbar-brand fs-3 ${styles.navbarBrand}`}>
          <span>Vivid</span>Mart
        </Link>
        <nav className="d-flex gap-3">
          <Link className={styles.navLink} to="/contact">
            <FiMail size={28} />
          </Link>
          <CartIcon cartCount={cartCount} /> {/* Use CartIcon */}
        </nav>
      </div>
    </header>
  );
}
