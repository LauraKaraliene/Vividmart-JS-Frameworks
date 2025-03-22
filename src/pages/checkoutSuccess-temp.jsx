import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutSuccess.module.scss";

const CheckoutSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <div className=" col-md-6 mx-auto poppins">
        <h2>Thank you for your purchase!</h2>
        <p>Your order was successful.</p>
      </div>
      <Link
        to="/"
        className={`btn btn-primary text-white py-2 px-4 mt-3 syncopate text-uppercase ${styles.backButton}`}
      >
        Back to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
