import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`py-4 mt-5 fw-bold text-center text-uppercase shadow-sm syncopate ${styles.footer}`}
    >
      © Laura Karaliene 2025
    </footer>
  );
}

export default Footer;
