import { NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import CartIcon from "./icons/CartIcon.jsx";
import styles from "./Header.module.scss";

export default function Header() {
  const cartCount = 3;

  return (
    <header className={`navbar navbar-expand-lg ${styles.header}`}>
      <div className="container-lg d-flex justify-content-between align-items-center">
        <NavLink
          to="/"
          className={`navbar-brand syncopate fs-3 fw-bold text-decoration-none ${styles.navbarBrand}`}
        >
          <span>Vivid</span>Mart
        </NavLink>
        <nav className="d-flex gap-3">
          <NavLink className={styles.navLink} to="/contact">
            <FiMail size={28} />
          </NavLink>
          <CartIcon cartCount={cartCount} /> {/* Use CartIcon */}
        </nav>
      </div>
    </header>
  );
}
