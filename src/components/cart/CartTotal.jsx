import styles from "./CartTotal.module.scss";

const CartTotal = ({ totalPrice, totalSavings, itemCount, onCheckout }) => {
  return (
    <div
      className={`mt-5 mb-3 p-3 border shadow bg-white rounded mx-auto ${styles.summary} ${styles.poppins}`}
    >
      <h2 className="mb-3 text-center">Your total</h2>

      <div className="mb-2 pb-2 border-bottom d-flex justify-content-between">
        <span>Items:</span>
        <span>{itemCount}</span>
      </div>
      <div className="mb-2 pb-2 border-bottom d-flex justify-content-between">
        <span>Amount saved:</span>
        <span>- ${totalSavings.toFixed(2)}</span>
      </div>
      <div className="mb-2 pb-2 border-bottom d-flex justify-content-between fw-bold">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button
        className={`btn btn-primary w-100 mt-3 p-2 text-uppercase ${styles.checkoutButton} ${styles.syncopate}`}
        onClick={onCheckout}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;

// const CartTotal = ({ totalPrice, totalSavings, itemCount, onCheckout }) => {
//   return (
//     <div className={`col-md-5 mx-auto ${styles.summary} ${styles.poppins}`}>
//       <h2>Your total</h2>
//       <div className={styles.summaryDetails}>
//         <p>Items: {itemCount}</p>
//         <p>Amount saved: - ${totalSavings.toFixed(2)}</p>
//         <p>
//           <strong>Total: ${totalPrice.toFixed(2)}</strong>
//         </p>
//         <button
//           className={`${styles.checkoutButton} ${styles.syncopate}`}
//           onClick={onCheckout}
//         >
//           Proceed to checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartTotal;
