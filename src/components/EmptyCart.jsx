import { useNavigate } from "react-router-dom";
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={`mt-5 mx-auto text-center ${styles.emptyCart}`}>
      <p className="text-dark fs-5">Your cart is empty!</p>
      <button
        className="btn text-white mt-2 px-3 syncopate text-uppercase"
        onClick={() => navigate("/")}
      >
        Return to Store
      </button>
    </div>
  );
};

export default EmptyCart;
