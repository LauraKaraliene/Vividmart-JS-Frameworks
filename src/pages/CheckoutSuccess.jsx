import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <div className="alert alert-success">
        <h2>Thank you for your purchase!</h2>
        <p>Your order was successful.</p>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
