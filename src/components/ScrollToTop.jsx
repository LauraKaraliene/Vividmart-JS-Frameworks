import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        className={`btn btn-primary rounded-circle d-flex justify-content-center align-items-center shadow ${styles.scrollToTop}`}
        onClick={scrollToTop}
      >
        <BsArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
